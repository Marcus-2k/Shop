import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TokenService } from "./token.service";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [JwtModule, DatabaseModule],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
