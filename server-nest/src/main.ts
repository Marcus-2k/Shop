import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

import * as path from "path";
import * as dotenv from "dotenv";
import * as express from "express";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const PORT: number = config.get<number>("SERVER_PORT") || 2000;

  const GlobalPrefix: string = "api";

  app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

  app.enableCors();
  app.setGlobalPrefix(GlobalPrefix);

  await app.listen(PORT, () => {
    console.log("The server is running on the", PORT, "th port");
  });
}
bootstrap();
