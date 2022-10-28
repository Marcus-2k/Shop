const express = require("express");
const mongoose = require("mongoose");
const pasport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Router START
const authRoutes = require("./routes/auth");
const catalogRoutes = require("./routes/catalog");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/accountUser");
const guestRoutes = require("./routes/guest");
const sellerRoutes = require("./routes/seller");
const newsRoutes = require("./routes/news");
const cardRoutes = require("./routes/card");
const searchRoutes = require("./routes/search");
// Router END

// Swagger START
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// Swagger END

require("dotenv").config();
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API-DOCS",
      version: "2.0.0",
      descriprion: "Swagger API-DOCS",
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./docs/swagger.yml"],
}; // Options Swagger
const specs = swaggerJsDoc(options);

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

app.use(
  require("cors")({ credentials: true, origin: process.env.CLIENT_URL_DOMEN })
);
app.use(cookieParser());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs)); // link to swagger-docs

// Router START ==========================================================================
app.use("/api/auth", authRoutes);
app.use("/api/catalog", catalogRoutes);

app.use("/api/account/product", productRoutes);
app.use("/api/account/user", userRoutes);
app.use("/api/guest/", guestRoutes);

app.use("/api/card", cardRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/news", newsRoutes);

app.use("/api/search", searchRoutes);
// Router END ============================================================================

module.exports = app;
