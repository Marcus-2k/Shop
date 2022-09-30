const User = require("../models/User");
const Product = require("../models/Product");
const jwt_decode = require("jwt-decode");
const fs = require("fs");
const bcrypt = require("bcryptjs");

module.exports.getUserInfo = async function (req, res) {
  try {
    console.log("Сервер getUserInfo");

    const user = await User.findById(
      { _id: req.user.id },
      { password: 0, __v: 0, _id: 1 }
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
module.exports.editPasswordUser = async function (req, res) {
  console.log("Server editPasswordUser");

  try {
    const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

    const user = await User.findOne({ email: tokenDecode.email });

    const passwordResult = bcrypt.compareSync(
      req.body.oldPassword,
      user.password
    ); // Password validity check

    console.log(passwordResult);
    if (passwordResult) {
      const salt = bcrypt.genSaltSync(10);
      const newPassword = {
        password: bcrypt.hashSync(req.body.newPassword, salt),
      };

      const newUser = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: newPassword },
        { new: true }
      );

      res.status(200).json({ message: true });
    } else {
      res.status(200).json({ message: false });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Помилка: Користувача не оновлено, спробуйте пізнеше.",
    });
  }
};
module.exports.getHistoryUser = async function (req, res) {
  console.log("Server getHistoryUser");

  try {
    const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

    const user = await User.findOne({ email: tokenDecode.email });
    if (user) {
      let product = [];

      for (let i = 0; i < user.history__view.length; i++) {
        const itemProduct = await Product.findById(user.history__view[i]);
        product.push(itemProduct);
      }

      product.reverse();

      res.status(200).json({ history__view: product });
    } else {
      res.status(200).json({ message: "Користувач не існує" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Помилка: Користувача не оновлено, спробуйте пізніше",
    });
  }
};
module.exports.newHistoryUser = async function (req, res) {
  console.log("Server newHistoryUser");

  try {
    const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

    console.log(tokenDecode);
    console.log(req.body);
    let user = await User.findById({ _id: tokenDecode.userId });

    if (user) {
      if (user.history__view.indexOf(req.body.id) === -1) {
        await User.updateOne(
          { _id: user._id },
          { $push: { history__view: req.body.id } },
          { new: true }
        );
        res
          .status(200)
          .json({ message: "Успішно додано в історію переглядів" });
      } else {
        // Delete product from history and add to the first place
        await User.updateOne(
          { _id: user._id },
          { $pull: { history__view: req.body.id } },
          { new: true }
        );
        await User.updateOne(
          { _id: user._id },
          { $push: { history__view: req.body.id } },
          { new: true }
        );
        res
          .status(200)
          .json({ message: "Успішно додано в історію на перше місце" });
      }
    } else {
      res.status(401).json({ message: "Користувач не існує" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Помилка: Користувача не оновлено, спробуйте пізніше",
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
      { $pull: { favorite: req.params.id } },
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
module.exports.getWishList = async function (req, res) {
  try {
    console.log("Server getWishList");

    const toker_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(
      { _id: toker_decode.userId },
      {
        favorite: 1,
        _id: 1,
      }
    );
    const favoriteUser = user.favorite;

    const productWishList = await Product.find(
      { _id: { $in: favoriteUser } },
      {
        // imageSrc: 0,
        category: 0,
        counter: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        seller: 0,
        keyWords: 0,
        description: 0,
        comments: 0,
        user: 0,
        questions: 0,
        __v: 0,
      }
    );

    productWishList.forEach((element, idx) => {
      element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
    });

    res.status(200).json(productWishList);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.patchWishList = async function (req, res) {
  try {
    console.log("Server pathWishList");

    const token_decode = jwt_decode(req.headers.authorization);

    console.log(token_decode);
    const user = await User.findById({ _id: token_decode.userId });

    const updatedFavoriteUser = { favorite: [] };
    user.favorite.forEach((element, idx) => {
      if (req.body.indexOf(element) === -1) {
        updatedFavoriteUser.favorite.push(element);
      }
    });

    await User.findByIdAndUpdate(
      { _id: user._id },
      { $set: updatedFavoriteUser },
      { new: true }
    );

    const favoriteUser = await User.findById(
      { _id: token_decode.userId },
      {
        favorite: 1,
      }
    );

    console.log(favoriteUser);
    const productWishList = await Product.find(
      { _id: { $in: favoriteUser.favorite } },
      {
        // imageSrc: 0,
        category: 0,
        counter: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        seller: 0,
        keyWords: 0,
        description: 0,
        comments: 0,
        user: 0,
        questions: 0,
        __v: 0,
      }
    );

    productWishList.forEach((element, idx) => {
      element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
    });

    res.status(200).json(productWishList);
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
module.exports.getShoppingCartList = async function (req, res) {
  try {
    console.log("Server getShoppingCartList");

    const toker_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(
      { _id: toker_decode.userId },
      {
        shoppingCart: 1,
        _id: 1,
      }
    );
    const shoppingCartUser = user.shoppingCart;

    const productShoppingCart = await Product.find(
      { _id: { $in: shoppingCartUser } },
      {
        name: 1,
        imageSrc: 1,
        price: 1,
        action: 1,
        actionPrice: 1,
        counter: 1,
        status: 1,
        seller: 1,
      }
    );

    productShoppingCart.forEach((element, idx) => {
      element.imageSrc = productShoppingCart[idx].imageSrc[0];
    });

    // console.log(productShoppingCart);
    res.status(200).json(productShoppingCart);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
module.exports.patchShoppingCartList = async function (req, res) {
  try {
    console.log("Server patchShoppingCartList");

    const token_decode = jwt_decode(req.headers.authorization);

    console.log(token_decode);
    const user = await User.findById({ _id: token_decode.userId });

    const updatedFavoriteUser = { favorite: [] };
    user.favorite.forEach((element, idx) => {
      if (req.body.indexOf(element) === -1) {
        updatedFavoriteUser.favorite.push(element);
      }
    });

    await User.findByIdAndUpdate(
      { _id: user._id },
      { $set: updatedFavoriteUser },
      { new: true }
    );

    const favoriteUser = await User.findById(
      { _id: token_decode.userId },
      {
        favorite: 1,
      }
    );

    console.log(favoriteUser);
    const productWishList = await Product.find(
      { _id: { $in: favoriteUser.favorite } },
      {
        // imageSrc: 0,
        category: 0,
        counter: 0,
        options: 0,
        optionsToString: 0,
        queryParams: 0,
        seller: 0,
        keyWords: 0,
        description: 0,
        comments: 0,
        user: 0,
        questions: 0,
        __v: 0,
      }
    );

    productWishList.forEach((element, idx) => {
      element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
    });

    res.status(200).json(productWishList);
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
