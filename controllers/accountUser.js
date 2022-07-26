const User = require("../models/User");
const fs = require("fs");

module.exports.getUserAccount = async function (req, res) {
  try {
    const userInfo = await User.find({ _id: req.user.id });
    const userRes = {
      _id: userInfo[0]._id,
      avatar: userInfo[0].avatar,
      name: userInfo[0].name,
      lastName: userInfo[0].lastName,
      email: userInfo[0].email,
      birthday: userInfo[0].birthday,
      country: userInfo[0].country,
    };
    res.status(200).json(userRes);
  } catch (error) {
    console.log(error);
  }
};

module.exports.userUpInfo = async function (req, res) {
  console.log("Сервер userUpInfo");
  // console.log(req.params.id);
  const updated = {};

  if (req.body) {
    console.log("Є боді");
    console.log(req.body);
    if (req.body.birthday) {
      updated.birthday = req.body.birthday;
    } // Add birthday user
    if (req.body.name) {
      updated.name = req.body.name;
    } // Add name user
    if (req.body.lastName) {
      updated.lastName = req.body.lastName;
    } // Add lastName user
    if (req.body.country) {
      updated.country = Number(req.body.country);
    } // Add country user
  }

  if (req.file) {
    updated.avatar = req.file.path;

    const userInDB = await User.findById(req.params.id);
    if (userInDB.avatar) {
      fs.unlink(userInDB.avatar, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Deleted file: ${userInDB.avatar}`);
        }
      }); // Delete img, in folder
    }
  }

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    );
    res.status(200).json({ message: "Користувача успішно оновлено" });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ message: "Помилка: Користувача не оновлено, спробуйте пізнеше" });
  }
};
