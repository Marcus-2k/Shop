const { CATALOG } = require("../db/catalog");
const { CATEGORY } = require("../db/category");

module.exports.getCatalog = async function (req, res) {
  console.log("Server getCatalog");

  try {
    return res.status(200).json(CATALOG);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCatalogHome = async function (req, res) {
  console.log("Server getCatalogHome");

  try {
    const CLONE_CATALOG = JSON.parse(JSON.stringify(CATALOG));

    let catalogPopuap = [];
    CLONE_CATALOG.forEach((element) => {
      const homeElement = {
        nameCategory: element.nameCategory,
        nameCategoryImg: element.nameCategoryImg,
        navigate_link: element.navigate_link,
      };

      catalogPopuap.push(homeElement);
    });

    return res.status(200).json(catalogPopuap);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCatalogSection = async function (req, res) {
  console.log("Server getCatalogSection");

  try {
    const { navigate_link } = req.params;

    if (!navigate_link) {
      return res.status(404).json({ message: "Не існуючий розділ каталогу" });
    }

    const CLONE_CATALOG = JSON.parse(JSON.stringify(CATALOG));

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

module.exports.getCategory = async function (req, res) {
  console.log("Server getCategory");

  try {
    return res.status(200).json(CATEGORY);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.getCharacteristics = async function (req, res) {
  console.log("Server getCharacteristics");

  try {
    const categoryNumber = req.body.categoryNumber;

    if (!categoryNumber) {
      return res.status(404).json({ message: "Incorrect data entry" });
    }

    let characteristics = [];
    if (categoryNumber.length === 3) {
      characteristics =
        CATEGORY[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .subNameListCategory[categoryNumber[2]].characteristics;
    } else if (categoryNumber.length === 2) {
      characteristics =
        CATEGORY[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .characteristics;
    } else {
      return res.status(404).json({ message: "Incorrect data entry" });
    }

    return res.status(200).json(characteristics);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
