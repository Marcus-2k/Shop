const Product = require("../models/Product");

module.exports.search = async function (req, res) {
  console.log("Server search");

  try {
    console.log(req.query);
    const lengthReq = Object.keys(req.query).length;
    const search_text = req.query.search_text; // Назва товару пошуку

    if (lengthReq === 1) {
      let categoryNoUnique = [];
      let productOptions = [];

      // Пошук в БД всіх продуктів за словами з пошуку
      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
      }); // $regex >> partial keyWords, options "i" >> case insensitivity

      product.sort((item, itemTwo) =>
        item.category < itemTwo.category ? 1 : -1
      );
      // Пошук в БД всіх продуктів за словами з пошуку

      //======================================================================================
      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      });
      //======================================================================================

      // Delete dublicate category === Start
      categoryNoUnique.forEach((element, i) => {
        categoryNoUnique[i] = element.join("");
      }); // [ [1,0,5] ... ] >>> [ '105' ...]
      const uniqueProductCategory = Array.from(new Set(categoryNoUnique));
      uniqueProductCategory.forEach((element, i) => {
        uniqueProductCategory[i] = ("" + element).split("").map(Number);
      }); // [ '105' ... ] >>> [ [1,0,5] ... ]
      // Delete dublicate category === End

      // Counter product in category === START
      let counterOptionsInCategory = []; // Кількість категорій, і товарів в них
      let uniqueCategory = [];

      uniqueProductCategory.forEach((element, i) => {
        uniqueCategory[i] = element.join(""); // uniqueCategory = [ '100', '105' ]
        counterOptionsInCategory.push([0]); // [ [ 0 ], [ 0 ], [ 0 ] ]
      });

      categoryNoUnique.forEach((element, i) => {
        uniqueCategory.forEach((item, idx) => {
          if (element === item) {
            counterOptionsInCategory[idx][0]++;
          }
        });
      }); // counterOptionsInCategory = [ [ 1 ], [ 6 ], [ 10 ] ]

      // Counter product in category === END

      // Параметри товарів поблочно до категорій
      const productOptionsBlock = [];
      counterOptionsInCategory.forEach((element, idx) => {
        let optionsBlock = productOptions.splice(0, element[0]);
        productOptionsBlock.push(optionsBlock);
      });
      // Параметри товарів поблочно до категорій

      // ===========================================================================
      res.status(200).json({
        product,
        uniqueProductCategory,
        productOptionsBlock,
      });
    } else if (lengthReq > 1) {
      // ===========================================================================
      const parameters = Object.values(req.query).splice(1); // {search_text: "телефон"; ram: "4 ГБ,16 ГБ"} >>> ['4 ГБ,16 ГБ']

      let parametersSplit = [];
      parameters.forEach((element) => {
        parametersSplit.push(element.split(","));
      });

      const allParams = parametersSplit.flat(1); // concat all arrays in one array

      allParams.forEach((element, idx) => {
        allParams[idx] = [element];
      }); // [ 'example', 'example' ] >>> [ ['example'], ['example'] ]
      console.log(allParams);

      const product = await Product.find({
        name: { $regex: search_text, $options: "i" },
        optionsToString: { $in: allParams },
      }); // Search in DB, all product by keywors

      product.sort((item, itemTwo) =>
        item.category < itemTwo.category ? 1 : -1
      ); // sort all product by category
      // ===========================================================================
      // ===========================================================================
      // ===========================================================================
      // ===========================================================================

      let categoryNoUnique = [];
      let productOptions = [];

      //======================================================================================
      product.forEach((element) => {
        categoryNoUnique.push(element.category);
        productOptions.push(element.options);
      });
      //======================================================================================

      // Delete dublicate category === Start
      categoryNoUnique.forEach((element, i) => {
        categoryNoUnique[i] = element.join("");
      }); // [ [1,0,5] ... ] >>> [ '105' ...]
      const uniqueProductCategory = Array.from(new Set(categoryNoUnique));
      uniqueProductCategory.forEach((element, i) => {
        uniqueProductCategory[i] = ("" + element).split("").map(Number);
      }); // [ '105' ... ] >>> [ [1,0,5] ... ]
      // Delete dublicate category === End

      // Counter product in category === START
      let counterOptionsInCategory = []; // Кількість категорій, і товарів в них
      let uniqueCategory = [];

      uniqueProductCategory.forEach((element, i) => {
        uniqueCategory[i] = element.join(""); // uniqueCategory = [ '100', '105' ]
        counterOptionsInCategory.push([0]); // [ [ 0 ], [ 0 ], [ 0 ] ]
      });

      categoryNoUnique.forEach((element, i) => {
        uniqueCategory.forEach((item, idx) => {
          if (element === item) {
            counterOptionsInCategory[idx][0]++;
          }
        });
      }); // counterOptionsInCategory = [ [ 1 ], [ 6 ], [ 10 ] ]

      // Counter product in category === END

      // Параметри товарів поблочно до категорій
      const productOptionsBlock = [];
      counterOptionsInCategory.forEach((element, idx) => {
        let optionsBlock = productOptions.splice(0, element[0]);
        productOptionsBlock.push(optionsBlock);
      });
      // Параметри товарів поблочно до категорій

      // ===========================================================================

      res.status(200).json({
        product,
        uniqueProductCategory,
        productOptionsBlock,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};

module.exports.filterSearch = async function (req, res) {
  console.log("Server filterSearch");
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сталася помилка. Спробуйте пізніше." });
  }
};
