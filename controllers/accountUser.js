const User = require("../models/User");
const jwt_decode = require("jwt-decode");
const fs = require("fs");

module.exports.getUserInfo = async function (req, res) {
  try {
    console.log(req.user);
    const user = await User.findOne(
      {},
      { password: 0, __v: 0, _id: 0 },
      { _id: req.user.id }
    );
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};

module.exports.editUser = async function (req, res) {
  console.log("Сервер userUpInfo");

  const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

  const user = await User.findOne({ email: tokenDecode.email });

  try {
    if (user) {
      const updatedUser = {};

      console.log(req.file);
      console.log(req.body);
      if (req.file) {
        updatedUser.avatar = req.file.path;
        if (user.avatar !== null) {
          deleteImgFromFolder(user.avatar);
        }
      } else if (req.body.image === "") {
        updatedUser.avatar = null;
        deleteImgFromFolder(user.avatar);
      }

      if (req.body.name) {
        updatedUser.name = req.body.name;
      }
      if (req.body.lastName) {
        updatedUser.lastName = req.body.lastName;
      }
      if (req.body.email) {
        updatedUser.email = req.body.email;
      }
      if (req.body.country) {
        updatedUser.country = req.body.country;
      }
      if (req.body.birthday) {
        updatedUser.birthday = req.body.birthday;
      }

      const newUser = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: updatedUser },
        { new: true }
      );
      res.status(200).json({ message: "Користувача успішно оновлено." });
    } else {
      res
        .status(404)
        .json({ message: "Помилка такого користувача немає в БД." });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Помилка: Користувача не оновлено, спробуйте пізнеше.",
    });
  }
};

function deleteImgFromFolder(linkImg) {
  fs.unlink(linkImg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted file: ${linkImg}`);
    }
  }); // Delete img, in folder
}
