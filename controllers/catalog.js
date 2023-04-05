const Catalog = require("../db/catalog");
const Catalog_Characteristics = require("../db/catalog_characteristics");

module.exports.getCategory = async function (req, res) {
  console.log("Server getCategory");

  try {
    let newCatalog = JSON.parse(JSON.stringify(Catalog.categoryList));

    newCatalog.forEach((element) => {
      element.nameListCategory.forEach((item) => {
        delete item.searchWords;
        if (item.subNameListCategory !== undefined) {
          item.subNameListCategory.forEach((subItem) => {
            delete subItem.searchWords;
          });
        }
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
      const homeElement = {
        nameCategory: element.nameCategory,
        nameCategoryImg: element.nameCategoryImg,
      };

      catalogPopuap.push(homeElement);
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
    return res
      .status(200)
      .json(Catalog_Characteristics.categoryList_characteristics);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCharacteristics = async function (req, res) {
  console.log("Server getCharacteristics");

  try {
    console.log(req.body);

    const categoryNumber = req.body.categoryNumber;

    if (!categoryNumber) {
      return res.status(404).json({ message: "Incorrect data entry" });
    }

    let characteristics = [];
    if (categoryNumber.length === 3) {
      characteristics =
        Catalog_Characteristics.categoryList_characteristics[categoryNumber[0]]
          .nameListCategory[categoryNumber[1]].subNameListCategory[
          categoryNumber[2]
        ].characteristics;
    } else if (categoryNumber.length === 2) {
      characteristics =
        Catalog_Characteristics.categoryList_characteristics[categoryNumber[0]]
          .nameListCategory[categoryNumber[1]].characteristics;
    } else {
      return res.status(404).json({ message: "Incorrect data entry" });
    }

    return res.status(200).json(characteristics);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCatalogSection = async function (req, res) {
  console.log("Server getCatalogSection");

  try {
    console.log(req.params);
    const { navigate_link } = req.params;

    if (!navigate_link) {
      return res.status(404).json({ message: "Не існуючий розділ каталогу" });
    }

    const CLONE_CATALOG = JSON.parse(JSON.stringify(Catalog.categoryList));

    for (let idx = 0; idx < CLONE_CATALOG.length; idx++) {
      if (CLONE_CATALOG[idx].navigate_link === navigate_link) {
        const widget_breadcrumbs = {
          first: {
            name: CLONE_CATALOG[idx].nameCategory,
            link: CLONE_CATALOG[idx].navigate_link,
          },
        };

        return res.status(200).json({
          widget_breadcrumbs,
          catalog_section: CLONE_CATALOG[idx],
        });
      }
    }

    return res.status(404).json({ message: "Не існуючий розділ каталогу" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
