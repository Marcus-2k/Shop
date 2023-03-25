const Product = require("../models/Product");
const fs = require("fs");
const Catalog_characteristics = require("../db/catalog_characteristics");

module.exports.getAllProduct = async function (req, res) {
  console.log("Server getAllUser");

  try {
    const product = await Product.find({ user: req.user.id });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getByIdProduct = async function (req, res) {
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
        Catalog_characteristics.categoryList_characteristics[
          product.category[0]
        ].nameListCategory[product.category[1]].subNameListCategory[
          product.category[2]
        ].characteristics;
    } else if (product.length === 2) {
      characteristicsName =
        Catalog_characteristics.categoryList_characteristics[
          product.category[0]
        ].nameListCategory[product.category[1]].characteristics;
    }

    product = JSON.parse(JSON.stringify(product));
    product.characteristicsName = characteristicsName;

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.createProduct = async function (req, res) {
  console.log("Server createProduct");

  try {
    console.log(req.body);

    const files = Object.values(req.files);
    const imageSrc = []; // ["folder/name.extension", ...]
    files.forEach((image) => {
      imageSrc.push(image[0].path);
    });

    const keywords = req.body.keywords.split(" "); // ["phone", "samsung", "apple"]

    const category = req.body.category.split(" "); // '0 1 0' >>> [ '0', '1', '1' ]
    category.forEach((element, idx) => {
      category[idx] = Number(element);
    }); // [ '0', '1', '1' ] >>> [ 0, 1, 1 ]

    let categoryName = [];
    categoryName.push(
      Catalog_characteristics.categoryList_characteristics[category[0]]
        .nameCategory
    );
    categoryName.push(
      Catalog_characteristics.categoryList_characteristics[category[0]]
        .nameListCategory[category[1]].subNameCategory
    );
    if (category.length === 3) {
      categoryName.push(
        Catalog_characteristics.categoryList_characteristics[category[0]]
          .nameListCategory[category[1]].subNameListCategory[category[2]]
          .titleSubNameListCategory
      );
    }

    const characteristics = transformCharacteristicsStringToArray(
      req.body.characteristics
    );
    const characteristicsName = {};

    for (let idx = 0; idx < characteristics.length; idx++) {
      for (let j = 0; j < characteristics[idx].length; j++) {
        if (category.length === 3) {
          if (
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].subNameListCategory[category[2]]
                .characteristics[idx].query_name
            ]
          ) {
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].subNameListCategory[category[2]]
                .characteristics[idx].query_name
            ].push(
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].subNameListCategory[category[2]]
                .characteristics[idx].select[characteristics[idx][j]]
            );
          } else {
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[
                category[0]
              ].nameListCategory[category[1]].subNameListCategory[
                category[2]
              ].characteristics[idx].query_name
            ] = [
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].subNameListCategory[category[2]]
                .characteristics[idx].select[characteristics[idx][j]],
            ];
          }
        } else if (category.length === 2) {
          if (
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].characteristics[idx].query_name
            ]
          ) {
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].characteristics[idx].query_name
            ].push(
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].characteristics[idx].select[
                characteristics[idx][j]
              ]
            );
          } else {
            characteristicsName[
              Catalog_characteristics.categoryList_characteristics[
                category[0]
              ].nameListCategory[category[1]].characteristics[idx].query_name
            ] = [
              Catalog_characteristics.categoryList_characteristics[category[0]]
                .nameListCategory[category[1]].characteristics[idx].select[
                characteristics[idx][j]
              ],
            ];
          }
        }
      }
    }

    const status = Number(req.body.status); // 0 = В наявнності, 1 = Очікується постачання , 2 = Немає в наявності, 3 = Закінчується

    const action = Boolean(Number(req.body.action)); // true || false
    const actionPrice = action === true ? Number(req.body.actionPrice) : -1; // if(action === true) {actionPrice = number} else {actionPrice = -1}

    const product = new Product({
      imageSrc,
      name: req.body.name,
      price: req.body.price,
      action,
      actionPrice,
      counter: Number(req.body.counter),
      category,
      categoryName,
      characteristics,
      characteristicsName,
      status,
      keywords,
      description: req.body.description,
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
};

module.exports.updateProduct = async function (req, res) {
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
        categoryName.push(
          Catalog_characteristics.categoryList_characteristics[category[0]]
            .nameCategory
        );
        categoryName.push(
          Catalog_characteristics.categoryList_characteristics[category[0]]
            .nameListCategory[category[1]].subNameCategory
        );
        if (category.length === 3) {
          categoryName.push(
            Catalog_characteristics.categoryList_characteristics[category[0]]
              .nameListCategory[category[1]].subNameListCategory[category[2]]
              .titleSubNameListCategory
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

      let characteristics = transformCharacteristicsStringToArray(
        req.body.characteristics
      );
      if (product.characteristics.join("-") !== characteristics.join("-")) {
        console.log("new characteristics");
        updateProduct.characteristics = characteristics;

        let options;
        if (category.length === 3) {
          options =
            Catalog_characteristics.categoryList_characteristics[category[0]]
              .nameListCategory[category[1]].subNameListCategory[category[2]]
              .characteristics;
        } else if (category.length === 2) {
          options =
            Catalog_characteristics.categoryList_characteristics[category[0]]
              .nameListCategory[category[1]].characteristics;
        }

        if (options.length !== characteristics.length) {
          return res.status(400).json({
            message: "Не всі характеристики вибрані",
          });
        }

        const characteristicsName = {};
        for (let idx = 0; idx < options.length; idx++) {
          characteristicsName[options[idx].query_name] = [];

          for (let i = 0; i < characteristics[idx].length; i++) {
            characteristicsName[options[idx].query_name].push(
              options[idx].select[characteristics[idx][i]]
            );
          }
        }

        console.log("new characteristicsName");
        updateProduct.characteristicsName = characteristicsName;
      } else {
        console.log("Characteristics has NOT been changed.");
      }
    } else if (req.body.characteristics) {
      const characteristics = transformCharacteristicsStringToArray(
        req.body.characteristics
      );
      console.log("new characteristics");
      updateProduct.characteristics = characteristics;

      let options;
      if (category.length === 3) {
        options =
          Catalog_characteristics.categoryList_characteristics[category[0]]
            .nameListCategory[category[1]].subNameListCategory[category[2]]
            .characteristics;
      } else if (category.length === 2) {
        options =
          Catalog_characteristics.categoryList_characteristics[category[0]]
            .nameListCategory[category[1]].characteristics;
      }

      if (options.length !== characteristics.length) {
        return res.status(400).json({
          message: "Не всі характеристики вибрані",
        });
      }

      const characteristicsName = {};
      for (let idx = 0; idx < options.length; idx++) {
        characteristicsName[options[idx].query_name] = [];

        for (let i = 0; i < characteristics[idx].length; i++) {
          characteristicsName[options[idx].query_name].push(
            options[idx].select[characteristics[idx][i]]
          );
        }
      }

      console.log("new characteristicsName");
      updateProduct.characteristicsName = characteristicsName;
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
};

module.exports.deleteProduct = async function (req, res) {
  console.log("Server deleteProduct");

  try {
    // const product = await Product.findById(req.params.id, { imageSrc: 1 });

    // product.imageSrc.forEach((item) => {
    // deleteImgFromFolder(item);
    // }); // Delete file from folder uploads

    // await Product.remove({ _id: req.params.id }); // Delete card in DB

    return res.status(200).json({ message: "Товар успішно видалено" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

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

function transformCharacteristicsStringToArray(string) {
  const characteristicsArray = string.split("-"); // 3-2-4-2-3-0,3-1-1-2,3-1-1,2 >>> ['3','2','4','2','3','0,3','1','1','2,3','1','1,2']

  let characteristics = [];
  characteristicsArray.forEach((item, i) => {
    characteristics.push(item.split(","));
  }); // ['3','2','4','2','3','0,3','1','1','2,3','1','1,2'] >>> [['3'],['2'],['4'],['2'],['3'],['0','3'],['1'],['1'],['2','3'],['1'],['1','2']]

  characteristics.forEach((item, i) => {
    item.forEach((element, idx) => {
      characteristics[i][idx] = Number(element);
    });
  }); // [['3'],['2'],['4'],['2'],['3'],['0','3'],['1'],['1'],['2','3'],['1'],['1','2']] >>> [[3],[2],[4],[2],[3],[0,3],[1],[1],[2,3],[1],[1,2]]

  return characteristics;
}
