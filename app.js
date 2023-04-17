import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import middleware_passport from "./middleware/passport.js";

// Routes =======================================================================================
import Routes_Auth from "./routes/auth.js";
import Routes_Catalog from "./routes/catalog.js";
import Routes_Category from "./routes/category.js";
import Routes_Order from "./routes/order.js";
import Routes_Product from "./routes/product.js";
import Routes_User from "./routes/accountUser.js";
import Routes_Guest from "./routes/guest.js";
import Routes_Seller from "./routes/seller.js";
import Routes_News from "./routes/news.js";
import Routes_Card from "./routes/card.js";
import Routes_Search from "./routes/search.js";
import Routes_Checking from "./routes/checking.js";
// Routes =======================================================================================

dotenv.config();
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
const specs = swaggerJSDoc(options);

mongoose
  .connect(process.env.DB_MONGO)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((errors) => {
    console.error(errors);
  });

app.use(passport.initialize());
middleware_passport(passport);

app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL_LOCALHOST,
  })
);
app.use(cookieParser());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs)); // link to swagger-docs

// Routes =======================================================================================
app.use("/api/auth", Routes_Auth);
app.use("/api/catalog", Routes_Catalog);
app.use("/api/category", Routes_Category);
app.use("/api/order", Routes_Order);
app.use("/api/account/product", Routes_Product);
app.use("/api/account/user", Routes_User);
app.use("/api/guest", Routes_Guest);
app.use("/api/seller", Routes_Seller);
app.use("/api/news", Routes_News);
app.use("/api/card", Routes_Card);
app.use("/api/search", Routes_Search);
app.use("/api/checking", Routes_Checking);
// Routes =======================================================================================

export default app;
