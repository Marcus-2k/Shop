import CATEGORY from "../db/category.js";

export async function getCategory(req, res) {
  console.log("Server getCategory");

  try {
    return res.status(200).json(CATEGORY);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getCharacteristics(req, res) {
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
}
