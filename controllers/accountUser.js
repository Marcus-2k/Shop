const User = require("../models/User");
const jwt_decode = require("jwt-decode");
const fs = require("fs");

module.exports.getUserInfo = async function (req, res) {
  try {
    console.log("Сервер getUserInfo");

    const user = await User.findOne(
      {},
      { password: 0, __v: 0, _id: 1 },
      { _id: req.user.id }
    );

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};

module.exports.editUser = async function (req, res) {
  console.log("Сервер editUser");

  const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

  const user = await User.findOne({ email: tokenDecode.email });

  try {
    if (user) {
      const updatedUser = {};

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

// ==== Favorite ====================================================================================================
module.exports.getFavorite = async function (req, res) {
  try {
    console.log("Server getFavorite");

    const toker_decode = jwt_decode(req.headers.authorization);

    const userFavorite = await User.findOne(
      {},
      { favorite: 1, _id: 0 },
      { _id: toker_decode.userId }
    );

    res.status(200).json({ favorite: userFavorite.favorite });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.addFavorite = async function (req, res) {
  try {
    console.log("Server addFavorite");

    const toker_decode = jwt_decode(req.headers.authorization);

    const user = await User.findOne({ _id: toker_decode.userId });

    const addFavorite = await User.updateOne(
      { _id: user._id },
      { $push: { favorite: req.body.id } },
      { new: true }
    );

    const userFavorite = await User.findOne(
      {},
      { favorite: 1, _id: 0 },
      { _id: toker_decode.userId }
    );

    res.status(200).json({
      favorite: userFavorite.favorite,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.removeFavorite = async function (req, res) {
  try {
    console.log("Server removeFavorite");

    const toker_decode = jwt_decode(req.headers.authorization);

    const user = await User.findOne({ _id: toker_decode.userId });

    const removeFavorite = await User.updateOne(
      { _id: user._id },
      { $pull: { favorite: req.body.id } },
      { new: true }
    );

    const userFavorite = await User.findOne(
      {},
      { favorite: 1, _id: 0 },
      { _id: toker_decode.userId }
    );

    res.status(200).json({
      favorite: userFavorite.favorite,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
// ==== Favorite ====================================================================================================

// Shopping Cart ====================================================================================================
module.exports.getShoppingCart = async function (req, res) {
  try {
    console.log("Server getShoppingCart");

    const token_decode = jwt_decode(req.headers.authorization);

    const userShoppingCart = await User.findOne(
      {},
      { shoppingCart: 1, _id: 0 },
      { _id: token_decode.userId }
    );

    res.status(200).json({ shoppingCart: userShoppingCart.shoppingCart });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.addShoppingCart = async function (req, res) {
  try {
    console.log("Server addShoppingCart");

    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findOne({ _id: token_decode.userId });

    const addShoppingCart = await User.updateOne(
      { _id: user._id },
      { $push: { shoppingCart: req.body.id } },
      { new: true }
    );

    const userShoppingCart = await User.findOne(
      {},
      { shoppingCart: 1, _id: 0 },
      { _id: token_decode.userId }
    );

    // console.log(userShoppingCart);
    res.status(200).json({
      shoppingCart: userShoppingCart.shoppingCart,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.removeShoppingCart = async function (req, res) {
  try {
    console.log("Server removeShoppingCart");

    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findOne({ _id: token_decode.userId });

    const removeShoppingCart = await User.updateOne(
      { _id: user._id },
      { $pull: { shoppingCart: req.params.id } },
      { new: true }
    );

    const userShoppingCart = await User.findOne(
      {},
      { shoppingCart: 1, _id: 0 },
      { _id: token_decode.userId }
    );

    res.status(200).json({
      shoppingCart: userShoppingCart.shoppingCart,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
// Shopping Cart ====================================================================================================

function deleteImgFromFolder(linkImg) {
  fs.unlink(linkImg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted file: ${linkImg}`);
    }
  }); // Delete img, in folder uploads
}
