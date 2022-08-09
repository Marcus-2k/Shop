const User = require("../models/User");
const jwt_decode = require("jwt-decode");
const fs = require("fs");

module.exports.getUserInfo = async function (req, res) {
  try {
    const user = await User.findOne(
      {},
      { password: 0, __v: 0, _id: 0 },
      { _id: req.user.id }
    );
    // const userRes = {
    //   _id: userInfo[0]._id,
    //   avatar: userInfo[0].avatar,
    //   name: userInfo[0].name,
    //   lastName: userInfo[0].lastName,
    //   email: userInfo[0].email,
    //   birthday: userInfo[0].birthday,
    //   country: userInfo[0].country,
    // };
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports.editUser = async function (req, res) {
  console.log("Сервер userUpInfo");

  const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

  const user = await User.findOne({ email: tokenDecode.email });

  try {
    if (user) {
      const updatedUser = {};
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
      if (req.file) {
        updatedUser.avatar = req.file.path;
        if (user.avatar !== null) {
          deleteImgFromFolder(user.avatar);
        }
      } else {
        updatedUser.avatar = null;
        if (user.avatar !== null) {
          deleteImgFromFolder(user.avatar);
        }
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
