const Product = require("../models/Product");

module.exports.searchSite = async function (req, res) {
  console.log("Server searchSite");
  try {
    console.log(req.query);

    const search_text = req.query.search_text; // Requst Text search
    let category; // Reques Category

    let categoryFilter = [];

    if (req.query.category) {
      category = req.query.category.split(",");

      category.forEach((element, idx) => {
        let numberArray = ("" + Number(element)).split("").map(Number);
        categoryFilter.push(numberArray);
      }); // Перетворюємо массив строкових чисел в, масив масивів з числами
    }

    let productCategory = [];

    if (req.query.search_text) {
      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
      }); // $regex >> partial keyWords, options "i" >> case insensitivity

      product.forEach((element) => {
        productCategory.push(element.category);
      }); // Категорії в знайдених товарів по ключовому слові

      // const countItems = numbers.reduce((acc, item) => {
      //   acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
      //   return acc;
      // }, {});
      // const makeUniq = (arr) => {
      //   const uniqSet = new Set(arr);
      //   return [...uniqSet];
      // } // Перевірка чи є однакові значення в масиві і їх видалення

      if (req.query.category) {
        delete product;
        const product = await Product.find({
          name: { $regex: search_text, $options: "i" },
          category: { $in: categoryFilter },
        });
        res.status(200).json({ product, productCategory });
      } else {
        res.status(200).json({ product, productCategory });
      }
    } else {
      res.status(404).json({ message: "Помилка запуту" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};

module.exports.filterSearchSite = async function (req, res) {
  console.log("Server filterSearchSite");
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};
