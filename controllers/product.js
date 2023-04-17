import Product from "../models/Product.js";

import fs from "fs";
import jwt_decode from "jwt-decode";

import CATEGORY from "../db/category.js";

const Product_Validation = {
  name: {
    minLengthName: 12,
    maxLengthName: 50,
  },
  price: {
    maxPrice: 10000000,
    minActionProcent: -5,
  },
  keywords: {
    maxLengthKeywords: 200,
    minLengthWord: 2,
    maxLengthWord: 10,
  },
  description: {
    minLengthDescription: 60,
    maxLengthDescription: 5000,
  },
};

export async function getAllProduct(req, res) {
  console.log("Server getAllUser");

  try {
    const product = await Product.find({ user: req.user.id });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getByIdProduct(req, res) {
  console.log("Server getByIdProduct");

  try {
    let product = await Product.findById(req.params.id, {
      imageSrc: 1,
      name: 1,
      price: 1,
      action: 1,
      actionPrice: 1,
      counter: 1,
      category: 1,
      categoryName: 1,
      characteristics: 1,
      status: 1,
      keywords: 1,
      description: 1,
    });

    let characteristicsName;

    if (product.category.length === 3) {
      characteristicsName =
        CATEGORY[product.category[0]].nameListCategory[product.category[1]]
          .subNameListCategory[product.category[2]].characteristics;
    } else if (product.length === 2) {
      characteristicsName =
        CATEGORY[product.category[0]].nameListCategory[product.category[1]]
          .characteristics;
    }

    product = JSON.parse(JSON.stringify(product));
    product.characteristicsName = characteristicsName;

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function createProduct(req, res) {
  console.log("Server createProduct");

  try {
    // Photo
    const imageSrc = []; // ["folder/name.extension", ...]
    if (Object.keys(req.files).length >= 1) {
      for (const key in req.files) {
        imageSrc.push(req.files[key][0].path);
      }
    } else {
      return res.status(400).json({ message: "Фото товару є обовз'язковим" });
    }

    // Name
    let name;
    if (req.body.name) {
      name = req.body.name;
      if (
        name.length < Product_Validation.name.minLengthName ||
        name.length > Product_Validation.name.maxLengthName
      ) {
        return res.status(400).json({
          message: `Мінімальна довжина назви товару ${Product_Validation.name.minLengthName} символів. Максимальна довжина назви товару ${Product_Validation.name.maxLengthName} символів.`,
        });
      }
    } else {
      return res.status(400).json({ message: "Назва товару є обовз'язковою" });
    }

    // Price
    let price;
    if (req.body.price) {
      price = Number(req.body.price);

      if (price >= 0 && isNaN(price) === false) {
        if (price > Product_Validation.price.maxPrice) {
          return res.status(400).json({
            message: `Максимальна ціна на товар ${Product_Validation.price.maxPrice.toLocaleString(
              "ru-RU"
            )} грн.`,
          });
        }
      } else {
        return res.status(400).json({ message: "Ви ввели не дійсну ціну" });
      }
    } else {
      return res.status(400).json({ message: "Ціна товару є обовз'язковою" });
    }

    // Discount &
    let action; // true || false
    let actionPrice;
    if (req.body.action === "1" || req.body.action === "0") {
      if (req.body.action === "1") {
        action = true;

        if (req.body.actionPrice) {
          actionPrice = Number(req.body.actionPrice);

          if (actionPrice >= 0 && isNaN(actionPrice) === false) {
            if (actionPrice > price) {
              return res
                .status(400)
                .json({ message: "Акційна ціна не може бути більшою за ціну" });
            }

            const actionProcent = Number(
              ((100 * (actionPrice - price)) / price).toFixed(2)
            );

            if (actionProcent > Product_Validation.price.minActionProcent) {
              return res.status(400).json({
                message: `Акційна ціна повинна бути меншою за ціну на ${Product_Validation.price.minActionProcent}%. Ваш відсоток знижки = ${actionProcent}%`,
              });
            }
          } else {
            return res
              .status(400)
              .json({ message: "Ви ввели не дійсну акційну ціну" });
          }
        } else {
          return res.status(400).json({
            message: `Ви відмітили "Акція" прапорцем тому знижка товару є обов'язковою!`,
          });
        }
      } else {
        action = false;
        actionPrice = -1;
      }
    } else {
      action = false;
      actionPrice = -1;
    }

    // Counter & Status
    let counter;
    if (req.body.counter) {
      counter = Number(req.body.counter);

      if (counter < 0 || isNaN(counter)) {
        return res.status(400).json({
          message: "Ви ввели не дійсну кількість товару",
        });
      }
    } else {
      return res.status(400).json({
        message: "Кількість товару є обовз'язковою",
      });
    }

    let status; // 0 = В наявнності, 1 = Очікується постачання , 2 = Немає в наявності, 3 = Закінчується
    if (req.body.status) {
      status = Number(req.body.status);

      if (status > 0 || isNaN(status) === false) {
        if (validateStatus(status) === false) {
          return res.status(400).json({
            message: "Вибрано не існуючий статус товару",
          });
        }
      } else {
        return res.status(400).json({
          message: "Ви ввели не дійсний статус товару",
        });
      }
    } else {
      return res.status(400).json({
        message: "Статус товару є обовз'язковим",
      });
    }

    // Category
    let category;
    let categoryName;
    if (req.body.category) {
      category = req.body.category.split(" "); // '0 1 0' > [ '0', '1', '1' ]

      for (let idx = 0; idx < category.length; idx++) {
        category[idx] = Number(category[idx]);

        if (category[idx] < 0 || isNaN(category[idx]) === true) {
          return res.status(400).json({
            message: "Категорію товару не можливо визначити",
          });
        }
      } // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

      if (category.length !== 2 && category.length !== 3) {
        return res.status(400).json({
          message: "Вибрана не існуюча категорія товару",
        });
      }

      categoryName = [];
      if (CATEGORY[category[0]]) {
        categoryName.push(CATEGORY[category[0]].nameCategory);
      } else {
        return res.status(400).json({
          message: "Вибрана не існуюча категорія товару",
        });
      }
      if (CATEGORY[category[0]].nameListCategory[category[1]]) {
        categoryName.push(
          CATEGORY[category[0]].nameListCategory[category[1]].subNameCategory
        );
      } else {
        return res.status(400).json({
          message: "Вибрана не існуюча категорія товару",
        });
      }
      if (category.length === 3) {
        if (
          CATEGORY[category[0]].nameListCategory[category[1]]
            .subNameListCategory[category[2]]
        ) {
          categoryName.push(
            CATEGORY[category[0]].nameListCategory[category[1]]
              .subNameListCategory[category[2]].titleSubNameListCategory
          );
        } else {
          return res.status(400).json({
            message: "Вибрана не існуюча категорія товару",
          });
        }
      }
    } else {
      return res
        .status(400)
        .json({ message: "Категорія товару є обовз'язковою" });
    }

    // Characteristics
    let data;
    if (req.body.characteristics) {
      data = createCharacteristics(category, req.body.characteristics);

      if (data.message !== undefined) {
        return res.status(400).json({ message: data.message });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Характеристики товару є обовз'язковими" });
    }

    // Keywords
    let keywords; // ["phone", "samsung", "apple"] > required = false
    if (req.body.keywords) {
      keywords = req.body.keywords.split(" ");

      for (let idx = 0; idx < keywords.length; idx++) {
        if (
          keywords[idx].length < Product_Validation.keywords.minLengthWord ||
          keywords[idx].length > Product_Validation.keywords.maxLengthWord
        ) {
          return res.status(400).json({
            message: `Одне з ключових слів не відповідає умові. Мінімальна кількість ${Product_Validation.keywords.minLengthWord} символів. Максимальна кількість ${Product_Validation.keywords.maxLengthWord} символів`,
          });
        }
      }
    }

    // Description
    let description;
    if (req.body.description) {
      description = req.body.description;

      if (
        description.length <
          Product_Validation.description.minLengthDescription ||
        description.length > Product_Validation.description.maxLengthDescription
      ) {
        return res.status(400).json({
          message: `Мінімальна довжина опису товару ${Product_Validation.description.minLengthDescription}. Максимальна довжина опису товару ${Product_Validation.description.maxLengthDescription}`,
        });
      }
    } else {
      return res.status(400).json({ message: "Опис товару є обовз'язковим" });
    }

    const product = await new Product({
      imageSrc,
      name,
      price,
      action,
      actionPrice,
      counter,
      status,
      category,
      categoryName,
      characteristics: data.characteristicsNumber,
      characteristicsName: data.characteristicsName,
      keywords,
      description,
      comments: [],
      questions: [],
      accessories: [],
      user: req.user.id,
    });

    await product.save();
    return res.status(201).json({ message: "Товар створено успішно." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function updateProduct(req, res) {
  console.log("Server updateProduct");

  try {
    const product = await Product.findById({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Товар не існує" });
    }

    let updateProduct = {};

    // Photo
    if (req.body.imageSrc || Object.keys(req.files).length >= 1) {
      const separatorPhoto = "?";
      let imageSrc = product.imageSrc;
      let imageSrcLink = req.body.imageSrc.split(separatorPhoto);

      if (Object.keys(req.files).length >= 1) {
        for (const key in req.files) {
          const positionFile = Number(key.split("-")[1]);

          imageSrcLink.splice(positionFile, 0, req.files[key][0].path);
        }

        for (let idx = 0; idx < product.imageSrc.length; idx++) {
          if (imageSrcLink.includes(product.imageSrc[idx]) === false) {
            deleteImgFromFolder(product.imageSrc[idx]);
          }
        }
        updateProduct.imageSrc = imageSrcLink;
      } else {
        if (
          imageSrc.join(separatorPhoto) !== imageSrcLink.join(separatorPhoto)
        ) {
          if (imageSrc.length === imageSrcLink.length) {
            console.log("Photo positions have been changed");

            updateProduct.imageSrc = imageSrcLink;
          } else {
            console.log("Photo was deleted");

            for (let idx = 0; idx < imageSrc.length; idx++) {
              if (imageSrcLink.includes(imageSrc[idx]) === false) {
                deleteImgFromFolder(imageSrc[idx]);
              }
            }
            updateProduct.imageSrc = imageSrcLink;
          }
        } else {
          console.log("Photo positions have NOT been changed");
        }
      }
    }

    // Name
    if (req.body.name) {
      const minLengthName = 12;
      const maxLengthName = 50;
      const name = req.body.name;

      if (product.name !== name) {
        if (name.length >= minLengthName && name.length <= maxLengthName) {
          console.log("new name");
          updateProduct.name = name;
        } else {
          return res.status(400).json({
            message: `Мінімальна довжина назви товару ${minLengthName} символів. Максимальна довжина назви товару ${maxLengthName} символів.`,
          });
        }
      } else {
        console.log("Name has NOT been changed.");
      }
    }

    // Price
    if (req.body.price) {
      const maxPrice = 10000000;
      const price = Number(req.body.price);

      if (product.price !== price) {
        if (price >= 0 && isNaN(price) === false) {
          if (price <= maxPrice) {
            console.log("new price");
            updateProduct.price = Number(req.body.price);
          } else {
            return res.status(400).json({
              message: `Максимальна ціна на товар ${maxPrice.toLocaleString(
                "ru-RU"
              )} грн.`,
            });
          }
        } else {
          return res.status(400).json({
            message: "Ви ввели не дійсну ціну.",
          });
        }
      } else {
        console.log("Price has NOT been changed.");
      }
    }

    // Discount
    if (req.body.action || req.body.actionPrice) {
      const action = true ? req.body.action === "1" : false;
      const actionPrice = Number(req.body.actionPrice);
      const minActionProcent = -5;

      if (action === true && product.action === false) {
        if (actionPrice >= 0 && isNaN(actionPrice) === false) {
          const actionProcent = Number(
            ((100 * (actionPrice - product.price)) / product.price).toFixed(2)
          );

          if (actionProcent <= minActionProcent) {
            updateProduct.action = action;
            updateProduct.actionPrice = actionPrice;
          } else {
            return res.status(400).json({
              message: `Акційна ціна повинна бути меншою за ціну на ${minActionProcent}%. Ваш відсоток знижки = ${actionProcent}%.`,
            });
          }
        } else {
          return res.status(400).json({
            message: `Ви відмітили "Акція" прапорцем тому знижка товару є обов'язковою!`,
          });
        }
      } else if (action === false && product.action === true) {
        updateProduct.action = action;
        updateProduct.actionPrice = -1;
      } else if (action === true && product.action === true) {
        if (product.actionPrice !== actionPrice) {
          if (actionPrice >= 0 && isNaN(actionPrice) === false) {
            const actionProcent = Number(
              ((100 * (actionPrice - product.price)) / product.price).toFixed(2)
            );

            if (actionProcent <= minActionProcent) {
              updateProduct.actionPrice = actionPrice;
            } else {
              return res.status(400).json({
                message: `Акційна ціна повинна бути меншою за ціну на ${minActionProcent}%. Ваш відсоток знижки = ${actionProcent}%.`,
              });
            }
          } else {
            return res.status(400).json({
              message: `Ви відмітили "Акція" прапорцем тому знижка товару є обов'язковою!`,
            });
          }
        }
      }
    }

    // Counter & Status
    if (req.body.counter) {
      const counter = Number(req.body.counter);

      if (product.counter !== counter) {
        if (counter >= 0 && isNaN(counter) === false) {
          console.log("new counter");
          updateProduct.counter = counter;
        } else {
          return res.status(400).json({
            message: "Ви ввели не дійсну кількість товару.",
          });
        }
      } else {
        console.log("Counter has NOT been changed.");
      }
    }
    if (req.body.status) {
      const status = Number(req.body.status);

      if (product.status !== status) {
        if (validateStatus(status)) {
          console.log("new status");
          updateProduct.status = status;
        } else {
          return res.status(400).json({
            message: "Вибрано не існуючий статус товару.",
          });
        }
      } else {
        console.log("Status has NOT been changed.");
      }
    }

    // Category & Characteristics
    if (req.body.category && req.body.characteristics) {
      let category = req.body.category.split(" ");

      if (product.category.join(" ") !== category.join(" ")) {
        for (let idx = 0; idx < category.length; idx++) {
          category[idx] = Number(category[idx]);

          if (category[idx] < 0 || isNaN(category[idx]) === true) {
            return res.status(400).json({
              message: "Категорію товару не можливо визначити",
            });
          }
        }

        if (category.length !== 2 && category.length !== 3) {
          return res.status(400).json({
            message: "Вибрана не існуюча категорія товару",
          });
        }

        let categoryName = [];
        categoryName.push(CATEGORY[category[0]].nameCategory);
        categoryName.push(
          CATEGORY[category[0]].nameListCategory[category[1]].subNameCategory
        );
        if (category.length === 3) {
          categoryName.push(
            CATEGORY[category[0]].nameListCategory[category[1]]
              .subNameListCategory[category[2]].titleSubNameListCategory
          );
        }

        for (let idx = 0; idx < categoryName.length; idx++) {
          if (typeof categoryName[idx] !== "string") {
            return res.status(400).json({
              message: "Категорію товару не можливо визначити",
            });
          }
        }

        console.log("new category");
        updateProduct.category = category;
        updateProduct.categoryName = categoryName;
      } else {
        console.log("Category has NOT been changed.");
      }

      let data = createCharacteristics(category, req.body.characteristics);

      if (data.message !== undefined) {
        return res.status(400).json({ message: data.message });
      }

      if (
        product.characteristics.join("-") !==
        data.characteristicsNumber.join("-")
      ) {
        console.log("new characteristics");
        updateProduct.characteristics = data.characteristicsNumber;

        console.log("new characteristicsName");
        updateProduct.characteristicsName = data.characteristicsName;
      } else {
        console.log("Characteristics has NOT been changed.");
      }
    } else if (req.body.characteristics) {
      let data = createCharacteristics(
        product.category,
        req.body.characteristics
      );

      if (data.message !== undefined) {
        return res.status(400).json({ message: data.message });
      }

      if (
        product.characteristics.join("-") !==
        data.characteristicsNumber.join("-")
      ) {
        console.log("new characteristics");
        updateProduct.characteristics = data.characteristicsNumber;

        console.log("new characteristicsName");
        updateProduct.characteristicsName = data.characteristicsName;
      } else {
        console.log("Characteristics has NOT been changed.");
      }
    }

    // Keywords
    if (req.body.keywords) {
      const maxLengthKeywords = 200;
      const minLengthWord = 2;
      const maxLengthWord = 10;

      let keywords = req.body.keywords;
      const product_keywords = product.keywords.join(" ");

      if (product_keywords !== keywords) {
        if (keywords.split(" ").join().length > maxLengthKeywords) {
          return res.status(400).json({
            message: `Максимальна довжина ключових слів ${maxLengthKeywords} символів`,
          });
        }

        keywords = keywords.split(" ");
        for (let idx = 0; idx < keywords.length; idx++) {
          if (
            keywords[idx].length < minLengthWord ||
            keywords[idx].length > maxLengthKeywords
          ) {
            return res.status(400).json({
              message: `Мінімальна довжина одного слова ${minLengthWord}. Максимальна довжина одного слова ${maxLengthWord}.`,
            });
          }
        }

        console.log("new keywords");
        updateProduct.keywords = keywords;
      } else {
        console.log("Keywords has NOT been changed.");
      }
    }

    // Description
    if (req.body.description) {
      const minLengthDescription = 60;
      const maxLengthDescription = 5000;
      const description = req.body.description;

      if (product.description !== description) {
        if (
          description.length < minLengthDescription ||
          description.length > maxLengthDescription
        ) {
          return res.status(400).json({
            message: `Мінімальна довжина опису товару ${minLengthDescription}. Максимальна довжина опису товару ${maxLengthDescription}.`,
          });
        }

        console.log("new description");
        updateProduct.description = description;
      } else {
        console.log("Description has NOT been changed.");
      }
    }

    if (Object.keys(updateProduct).length > 0) {
      console.log(updateProduct);
      await Product.findByIdAndUpdate(
        req.params.id,
        { $set: updateProduct },
        { new: true }
      );

      return res.status(200).json({ message: "Товар успішно змінено" });
    } else {
      return res.status(200).json({ message: "Нових змін не відбулося" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function deleteProduct(req, res) {
  console.log("Server deleteProduct");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    let product = await Product.findById(req.params.id, {
      imageSrc: 1,
      user: 1,
    });

    if (!product) {
      return res.status(200).json({ message: "Товар не існує" });
    }
    product = JSON.parse(JSON.stringify(product));

    if (token_decode.id === product.user) {
      await Product.deleteOne({ _id: req.params.id });

      for (let idx = 0; idx < product.imageSrc.length; idx++) {
        deleteImgFromFolder(product.imageSrc[idx]);
      }

      return res
        .status(200)
        .json({ message: "Товар успішно видалено", deleted: true });
    } else {
      return res
        .status(200)
        .json({ message: "Недостатньо прав доступу", deleted: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

function validateStatus(status) {
  if (isNaN(status) === false) {
    if (status >= 0 && status <= 3) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function deleteImgFromFolder(linkImg) {
  fs.unlink(linkImg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted file: ${linkImg}`);
    }
  }); // Delete img, in folder uploads
}

function createCharacteristics(category, string) {
  let stringArray = string.split("-"); // 3-2-4-2-3-0,3-1-1-2,3-1-1,2 >>> ['3','2','4','2','3','0,3','1','1','2,3','1','1,2']
  let characteristicsNumber = [];

  for (let idx = 0; idx < stringArray.length; idx++) {
    characteristicsNumber.push(stringArray[idx].split(","));
  } // ['3','2','4','2','3','0,3','1','1','2,3','1','1,2'] >>> [['3'],['2'],['4'],['2'],['3'],['0','3'],['1'],['1'],['2','3'],['1'],['1','2']]

  for (let i = 0; i < characteristicsNumber.length; i++) {
    for (let idx = 0; idx < characteristicsNumber[i].length; idx++) {
      characteristicsNumber[i][idx] = Number(characteristicsNumber[i][idx]);

      if (
        characteristicsNumber[i][idx] < 0 ||
        isNaN(characteristicsNumber[i][idx])
      ) {
        return {
          message: "Характеристики не вибрані або не можливо визначити",
        };
      }
    }
  } // [['3'],['2'],['4'],['2'],['3'],['0','3'],['1'],['1'],['2','3'],['1'],['1','2']] >>> [[3],[2],[4],[2],[3],[0,3],[1],[1],[2,3],[1],[1,2]]

  let characteristics;
  let characteristicsName = {};

  if (category.length === 3) {
    characteristics =
      CATEGORY[category[0]].nameListCategory[category[1]].subNameListCategory[
        category[2]
      ].characteristics;
  } else if (category.length === 2) {
    characteristics =
      CATEGORY[category[0]].nameListCategory[category[1]].characteristics;
  } else {
    return {
      message: "Категорія не вибрана або не можливо визначити категорію",
    };
  }

  if (characteristicsNumber.length !== characteristics.length) {
    return {
      message: "Не всі характеристики вибрані",
    };
  }

  for (let i = 0; i < characteristics.length; i++) {
    characteristicsName[characteristics[i].query_name] = [];

    if (characteristics[i].multiple) {
      for (let idx = 0; idx < characteristicsNumber[i].length; idx++) {
        characteristicsName[characteristics[i].query_name].push(
          characteristics[i].select[characteristicsNumber[i][idx]]
        );
      }
    } else {
      characteristicsName[characteristics[i].query_name].push(
        characteristics[i].select[characteristicsNumber[i][0]]
      );
    }
  }

  let i = 0;
  for (const key in characteristicsName) {
    if (characteristicsName[key].indexOf(undefined) >= 0) {
      return {
        message: `Для характеристики "${characteristics[i].name}" вибрано не існуюче значення`,
      };
    }
    i++;
  }

  return { characteristicsNumber, characteristicsName };
}
