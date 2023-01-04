const bcrypt = require("bcryptjs");
const jwt_decode = require("jwt-decode");

const fs = require("fs");

const User = require("../models/User");
const Product = require("../models/Product");

module.exports.getUserInfo = async function (req, res) {
  console.log("Server getUserInfo");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id, {
      avatar: 1,
      name: 1,
      lastName: 1,
      email: 1,
      birthday: 1,
      country: 1,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.editUser = async function (req, res) {
  console.log("Server editUser");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

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
        updatedUser.name = req.body.name.split(/\s+/).join("");
      }
      if (req.body.lastName) {
        updatedUser.lastName = req.body.lastName.split(/\s+/).join("");
      }
      // if (req.body.email) {
      //   updatedUser.email = req.body.email;
      // }
      if (req.body.birthday === "") {
        updatedUser.birthday = null;
      } else if (req.body.birthday !== "" && req.body.birthday) {
        updatedUser.birthday = req.body.birthday;
      }
      if (req.body.country) {
        updatedUser.country = req.body.country;
      }

      await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: updatedUser },
        { new: true }
      );

      return res.status(200).json({ message: "Користувача успішно оновлено." });
    } else {
      return res.status(401);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.editPasswordUser = async function (req, res) {
  console.log("Server editPasswordUser");

  try {
    const tokenDecode = jwt_decode(req.headers.authorization); // Decode jwt

    const user = await User.findOne({ email: tokenDecode.email });

    if (user) {
      const passwordResult = bcrypt.compareSync(
        req.body.oldPassword,
        user.password
      ); // Password validity check

      if (passwordResult) {
        const salt = bcrypt.genSaltSync(10);
        const newPassword = {
          password: bcrypt.hashSync(req.body.newPassword, salt),
        };

        await User.findByIdAndUpdate(
          { _id: user._id },
          { $set: newPassword },
          { new: true }
        );

        return res.status(200).json({ message: true });
      } else {
        return res.status(200).json({ message: false });
      }
    } else {
      return res.status(401);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
// History =========================================================================================================
module.exports.getHistoryUser = async function (req, res) {
  console.log("Server getHistoryUser");

  try {
    const token_decode = jwt_decode(req.headers.authorization);
    const user = await User.findById(token_decode.id);

    if (user) {
      let product = [];

      for (let i = 0; i < user.history__view.length; i++) {
        const itemProduct = await Product.findById(user.history__view[i]);
        product.push(itemProduct);
      }

      product.reverse();

      return res.status(200).json({ history__view: product });
    } else {
      return res.status(401);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.newHistoryUser = async function (req, res) {
  console.log("Server newHistoryUser");

  try {
    const token_decode = jwt_decode(req.headers.authorization);
    const user = await User.findById(token_decode.id);

    if (user) {
      if (user.history__view.indexOf(req.body.id) === -1) {
        await User.updateOne(
          { _id: user._id },
          { $push: { history__view: req.body.id } },
          { new: true }
        );
        return res
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
        return res.status(200).json({
          message: "Успішно додано в історію переглядів на перше місце",
        });
      }
    } else {
      return res.status(401);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
// History =========================================================================================================
// Universal START =================================================================================================
module.exports.getFavoriteAndShoppingCart = async function (req, res) {
  console.log("Server getFavoriteAndShoppingCart");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const userData = await User.findById(token_decode.id, {
      favorite: 1,
      shoppingCart: 1,
      _id: 0,
    });

    return res.status(200).json({
      favorite: userData.favorite,
      shoppingCart: userData.shoppingCart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
// Universal END ===================================================================================================
// Favorite ========================================================================================================
module.exports.getFavorite = async function (req, res) {
  console.log("Server getFavorite");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const userFavorite = await User.findById(token_decode.id, {
      favorite: 1,
      _id: 0,
    });

    return res.status(200).json({ favorite: userFavorite.favorite });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.addFavorite = async function (req, res) {
  console.log("Server addFavorite");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    await User.updateOne(
      { _id: token_decode.id },
      { $push: { favorite: req.body.id } },
      { new: true }
    );

    const userFavorite = await User.findById(token_decode.id, {
      favorite: 1,
      _id: 0,
    });

    return res.status(200).json({
      favorite: userFavorite.favorite,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.removeFavorite = async function (req, res) {
  console.log("Server removeFavorite");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

    await User.updateOne(
      { _id: user._id },
      { $pull: { favorite: req.params.id } },
      { new: true }
    );

    const userFavorite = await User.findById(token_decode.id, {
      favorite: 1,
      _id: 0,
    });

    return res.status(200).json({
      favorite: userFavorite.favorite,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.getWishList = async function (req, res) {
  console.log("Server getWishList");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id, {
      favorite: 1,
      _id: 1,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Ви не авторизовані для цієї дії" });
    }

    const wishListUser = user.favorite;

    const productWishList = await Product.find(
      { _id: { $in: wishListUser } },
      {
        imageSrc: 1,
        name: 1,
        price: 1,
        action: 1,
        actionPrice: 1,
        status: 1,
      }
    );

    productWishList.forEach((element, idx) => {
      element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
    });

    return res.status(200).json(productWishList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.patchWishList = async function (req, res) {
  console.log("Server pathWishList");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

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

    const favoriteUser = await User.findById(token_decode.id, {
      favorite: 1,
      _id: 0,
    });

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

    return res.status(200).json(productWishList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
// Favorite =========================================================================================================
// Shopping Cart ====================================================================================================
module.exports.getShoppingCart = async function (req, res) {
  console.log("Server getShoppingCart");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const userShoppingCart = await User.findById(token_decode.id, {
      shoppingCart: 1,
      _id: 0,
    });

    return res
      .status(200)
      .json({ shoppingCart: userShoppingCart.shoppingCart });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.addShoppingCart = async function (req, res) {
  console.log("Server addShoppingCart");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

    await User.updateOne(
      { _id: user._id },
      { $push: { shoppingCart: req.body.id } },
      { new: true }
    );

    const userShoppingCart = await User.findById(token_decode.id, {
      shoppingCart: 1,
      _id: 0,
    });

    return res.status(200).json({
      shoppingCart: userShoppingCart.shoppingCart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.removeShoppingCart = async function (req, res) {
  console.log("Server removeShoppingCart");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

    await User.updateOne(
      { _id: user._id },
      { $pull: { shoppingCart: req.params.id } },
      { new: true }
    );

    const userShoppingCart = await User.findById(token_decode.id, {
      shoppingCart: 1,
      _id: 0,
    });

    return res.status(200).json({
      shoppingCart: userShoppingCart.shoppingCart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.getShoppingCartList = async function (req, res) {
  console.log("Server getShoppingCartList");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id, {
      shoppingCart: 1,
      _id: 1,
    });

    if (!user) {
      return res.status(401);
    }

    const shoppingCartUser = user.shoppingCart;

    const productShoppingCart = await Product.find(
      { _id: { $in: shoppingCartUser } },
      {
        imageSrc: 1,
        name: 1,
        price: 1,
        action: 1,
        actionPrice: 1,
        counter: 1,
        status: 1,
        user: 1,
      }
    );

    productShoppingCart.forEach((element, idx) => {
      element.imageSrc = productShoppingCart[idx].imageSrc[0];
    });

    return res.status(200).json(productShoppingCart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
module.exports.patchShoppingCartList = async function (req, res) {
  console.log("Server patchShoppingCartList");

  try {
    const token_decode = jwt_decode(req.headers.authorization);

    const user = await User.findById(token_decode.id);

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

    const favoriteUser = await User.findById(token_decode.id, {
      favorite: 1,
    });

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

    return res.status(200).json(productWishList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
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
