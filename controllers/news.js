const News = require("../models/News");

// News START =====================================================================================================================
module.exports.getAllNews = async function (req, res) {
  try {
    console.log("Server getAllNews");

    const news = await News.find();

    res.status(200).json(news);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
// News END =======================================================================================================================
