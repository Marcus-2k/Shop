const User = require("../models/User");

// Seller START =====================================================================================================================
module.exports.getByIdSeller = async function (req, res) {
  try {
    console.log("Server getByIdSeller");

    console.log(req.params.id);

    const seller = await User.findById(req.params.id, {
      avatar: 1,
      name: 1,
    });

    res.status(200).json(seller);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Сталася помилка на сервері спробуйте пізніше.",
    });
  }
};
// Seller END =======================================================================================================================
