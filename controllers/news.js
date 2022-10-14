const NewsModel = require("../models/News");

module.exports.getAllNews = async function (req, res) {
  console.log("Server getAllNews");

  try {
    const news = await NewsModel.find();

    return res.status(200).json(news);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
