const Catalog = require("../db/catalog");

module.exports.getCategory = async function (req, res) {
  console.log("Server getCategory");

  try {
    let newCatalog = JSON.parse(JSON.stringify(Catalog.categoryList));

    newCatalog.forEach((element) => {
      element.nameListCategory.forEach((item) => {
        item.subNameListCategory.forEach((subItem) => {
          delete subItem.characteristics;
        });
      });
    });

    return res.status(200).json(newCatalog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCategoryHome = async function (req, res) {
  console.log("Server getCategoryHome");

  try {
    let catalogPopuap = [];
    Catalog.categoryList.forEach((element) => {
      catalogPopuap.push(element.nameCategory);
    });

    return res.status(200).json(catalogPopuap);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCategoryAndCharacteristics = async function (req, res) {
  console.log("Server getCategoryAndCharacteristics");

  try {
    return res.status(200).json(Catalog.categoryList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
