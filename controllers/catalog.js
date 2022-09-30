const catalog = require("../db/catalog");

module.exports.getCategory = async function (req, res) {
  console.log("Server getCategory");
  try {
    let newCatalog = JSON.parse(JSON.stringify(catalog.categoryList));

    newCatalog.forEach((element) => {
      element.nameListCategory.forEach((item) => {
        item.subNameListCategory.forEach((subItem) => {
          delete subItem.characteristics;
        });
      });
    });

    res.status(200).json(newCatalog);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Сталася помилка на серверові. Спробуйте пізніше." });
  }
};

module.exports.getCategoryHome = async function (req, res) {
  console.log("Server getCategoryHome");
  try {
    let catalogPopuap = [];
    catalog.categoryList.forEach((element) => {
      catalogPopuap.push(element.nameCategory);
    });

    res.status(200).json(catalogPopuap);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Сталася помилка на серверові. Спробуйте пізніше." });
  }
};

module.exports.getCategoryAndCharacteristics = async function (req, res) {
  console.log("Server getCategoryAndCharacteristics");
  try {
    res.status(200).json(catalog.categoryList);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Сталася помилка на серверові. Спробуйте пізніше." });
  }
};
