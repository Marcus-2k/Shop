import express from "express";
import mongoose from "mongoose";
import pasport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import middleware_passport from "./middleware/passport.js";

// Router START
import authRoutes from "./routes/auth.js";

import Catalog_Routes from "./routes/catalog.js";
import Category_Routes from "./routes/category.js";

import orderRoutes from "./routes/order.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/accountUser.js";
import guestRoutes from "./routes/guest.js";
import sellerRoutes from "./routes/seller.js";
import newsRoutes from "./routes/news.js";
import cardRoutes from "./routes/card.js";
import searchRoutes from "./routes/search.js";
import checkingRoutes from "./routes/checking.js";
// Router END

// Swagger START
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
// Swagger END

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
const specs = swaggerJsDoc(options);

mongoose
  .connect(process.env.DB_MONGO)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((errors) => {
    console.error(errors);
  });

app.use(pasport.initialize());
middleware_passport(pasport);

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

// Router START ==========================================================================
app.use("/api/auth", authRoutes);

app.use("/api/catalog", Catalog_Routes);
app.use("/api/category", Category_Routes);

app.use("/api/order", orderRoutes);

app.use("/api/account/product", productRoutes);
app.use("/api/account/user", userRoutes);
app.use("/api/guest/", guestRoutes);

app.use("/api/card", cardRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/news", newsRoutes);

app.use("/api/search", searchRoutes);
app.use("/api/checking", checkingRoutes);
// Router END ============================================================================

export default app;
