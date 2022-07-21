const express = require("express");
const mongoose = require("mongoose");
const pasport = require("passport");
const bodyParser = require("body-parser");
//
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/accountUser");
const searchSite = require("./routes/searchSite");
//
const app = express();

mongoose
  .connect(
    "mongodb+srv://Marcus:ShopAdmin@cluster0.oxmti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((errors) => {
    console.error(errors);
  });

app.use(pasport.initialize());
require("./middleware/passport")(pasport);

app.use(require("morgan")("dev"));

app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/account/user", userRoutes);
app.use("/api/search", searchSite);

module.exports = app;
