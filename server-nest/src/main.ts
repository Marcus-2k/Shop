import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import * as path from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const PORT: number = Number(config.get<String>("SERVER_PORT")) || 3000;

  const GlobalPrefix: string = "api";

  app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

  app.use(cookieParser());

  app.enableCors()
  app.setGlobalPrefix(GlobalPrefix);

  await app.listen(PORT, () => {
    console.log("The server is running on the", PORT, "th port");
  });
}

bootstrap();
