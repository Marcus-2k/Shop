import {
  Controller,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Get,
  Post,
  Patch,
  Delete,
  Res,
  Body,
  UploadedFile,
  UseInterceptors,
  Param,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";
import { AccountUserService } from "./account-user.service";
import { Response } from "express";
import { User as UserData } from "src/shared/decorators/user.decorator";
import { TokenData } from "src/shared/interfaces/token-data";
import { User } from "src/shared/interfaces/schemas/User";
import { UpdateUser } from "src/shared/interfaces/user-update";
import { ChangePasswordUserDto, UpdateUserDto } from "./account-user.dto";
import { FilesInterceptor } from "@nestjs/platform-express";
import { upload } from "src/shared/middleware/upload.middleware";
import { MessageRes } from "src/shared/interfaces/res/message";
import { Product } from "src/shared/interfaces/schemas/Product";
import { ProductService } from "../product/product.service";
import { IdDto } from "src/shared/dto/id";

@Controller("user")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class AccountUserController {
  public constructor(
    private readonly accountUserService: AccountUserService,
    private readonly productService: ProductService
  ) {}

  @Get()
  public async getUserInfo(
    @Res() response: Response<User>,
    @UserData() userData: TokenData
  ): Promise<Response<User>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    return response.status(200).json(user);
  }

  @Patch()
  @UseInterceptors(FilesInterceptor("image", 1, upload))
  public async editUser(
    @Res() response: Response<MessageRes>,
    @UserData() userData: TokenData,
    @Body() body: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File
  ): Promise<Response<MessageRes>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const updatedUser: UpdateUser = {};

      if (file) {
        updatedUser.avatar = file.path;

        if (user.avatar !== null) {
          this.accountUserService.deleteImgFromFolder(user.avatar);
        }
      }

      // Name
      if (body.name) {
        updatedUser.name = body.name;
      }

      // Last name
      if (body.lastName) {
        updatedUser.lastName = body.lastName;
      }

      // Email
      // if (req.body.email) {
      //   updatedUser.email = req.body.email;
      // }

      // Birthday
      if (body.birthday) {
        updatedUser.birthday = body.birthday;
      }

      // Country
      if (body.country) {
        updatedUser.country = body.country;
      }

      await this.accountUserService.updateUserById(userData.id, updatedUser);

      return response
        .status(200)
        .json({ message: "Користувача успішно оновлено" });
    } else {
      return response.status(401).json({ message: "Неможливо виконати дію" });
    }
  }

  @Patch("password")
  public async changePassword(
    @Res() response: Response<{ message: boolean }>,
    @UserData() userData: TokenData,
    @Body() body: ChangePasswordUserDto
  ): Promise<Response<{ message: boolean }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const passwordValid: boolean = this.accountUserService.checkPasswordValid(
        body.oldPassword,
        user.password
      );

      if (passwordValid) {
        const passwordHash: string = this.accountUserService.newPasswordHash(
          body.newPassword
        );

        this.accountUserService.changePasswordById(userData.id, passwordHash);

        return response.status(200).json({ message: true });
      } else {
        return response.status(200).json({ message: false });
      }
    } else {
      return response.status(401);
    }
  }

  @Get("history")
  public async getHistoryUser(
    @Res() response: Response<any>,
    @UserData() userData: TokenData
  ): Promise<Response<any>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const product: Product[] = [];

      for (let i = 0; i < user.history__view.length; i++) {
        const itemProduct = await this.productService.findById(
          user.history__view[i]
        );
        product.push(itemProduct);
      }

      product.reverse().splice(9);

      return response.status(200).json({ history__view: product });
    } else {
      return response.status(401);
    }
  }

  @Patch("history")
  public async newHistoryUser(
    @Res() response: Response<MessageRes>,
    @UserData() userData: TokenData,
    @Body() body: IdDto
  ): Promise<Response<MessageRes>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      if (user.history__view.indexOf(body.id) === -1) {
        await this.accountUserService.addHistoryView(userData.id, body.id);

        return response
          .status(200)
          .json({ message: "Успішно додано в історію переглядів" });
      } else {
        await this.accountUserService.removeHistoryView(userData.id, body.id);

        await this.accountUserService.addHistoryView(userData.id, body.id);

        return response.status(200).json({
          message: "Успішно додано в історію переглядів на перше місце",
        });
      }
    } else {
      return response.status(401);
    }
  }

  @Get("favorite_and_shoppingCart")
  public async getFavoriteAndShoppingCart(
    @Res() response: Response<{ favorite: string[]; shoppingCart: string[] }>,
    @UserData() userData: TokenData
  ): Promise<Response<{ favorite: string[]; shoppingCart: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      return response.status(200).json({
        favorite: user.favorite,
        shoppingCart: user.shoppingCart,
      });
    } else {
      return response.status(401);
    }
  }

  @Get("favorite")
  public async getFavorite(
    @Res() response: Response<{ favorite: string[] }>,
    @UserData() userData: TokenData
  ): Promise<Response<{ favorite: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      return response.status(200).json({ favorite: user.favorite });
    } else {
      return response.status(401);
    }
  }

  @Post("favorite")
  public async addFavorite(
    @Res() response: Response<{ favorite: string[] }>,
    @UserData() userData: TokenData,
    @Body() body: IdDto
  ): Promise<Response<{ favorite: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const userFavorite: User = await this.accountUserService.addFavorite(
        userData.id,
        body.id
      );

      return response.status(200).json({
        favorite: userFavorite.favorite,
      });
    } else {
      return response.status(401);
    }
  }

  @Delete("favorite/:id")
  public async removeFavorite(
    @Res() response: Response<{ favorite: string[] }>,
    @UserData() userData: TokenData,
    @Param() param: IdDto
  ): Promise<Response<{ favorite: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const userFavorite: User = await this.accountUserService.removeFavorite(
        userData.id,
        param.id
      );

      return response.status(200).json({ favorite: userFavorite.favorite });
    } else {
      return response.status(401);
    }
  }

  @Get("wish_list")
  public async getWishList(
    @Res() response: Response<any>,
    @UserData() userData: TokenData
  ): Promise<Response<any>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const productWishList = await this.productService.findByIds(
        user.favorite
      );

      productWishList.forEach((element, idx) => {
        element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
      });

      return response.status(200).json(productWishList);
    } else {
      return response.status(401);
    }
  }

  @Patch("wish_list")
  public async patchWishList(
    @Res() response: Response<any>,
    @UserData() userData: TokenData,
    @Body() body: string[]
  ): Promise<Response<any>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      for (let idx = 0; idx < user.favorite.length; idx++) {
        if (body.indexOf(user.favorite[idx]) >= 0) {
          this.accountUserService.removeFavorite(
            userData.id,
            user.favorite[idx]
          );
        }
      }

      const userNewFavorite: User | null =
        await this.accountUserService.findById(userData.id);

      const productWishList = await this.productService.findByIds(
        userNewFavorite.favorite
      );

      productWishList.forEach((element, idx) => {
        element.imageSrc = productWishList[idx].imageSrc.splice(0, 2);
      });

      return response.status(200).json(productWishList);
    } else {
      return response.status(401);
    }
  }

  @Get("cart")
  public async getShoppingCart(
    @Res() response: Response<{ shoppingCart: string[] }>,
    @UserData() userData: TokenData
  ): Promise<Response<{ shoppingCart: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      return response.status(200).json({ shoppingCart: user.shoppingCart });
    } else {
      return response.status(401);
    }
  }

  @Post("cart")
  public async addShoppingCart(
    @Res() response: Response<{ shoppingCart: string[] }>,
    @UserData() userData: TokenData,
    @Body() body: IdDto
  ): Promise<Response<{ shoppingCart: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const userCart: User = await this.accountUserService.addCart(
        userData.id,
        body.id
      );

      return response.status(200).json({ shoppingCart: userCart.shoppingCart });
    } else {
      return response.status(401);
    }
  }

  @Delete("cart/:id")
  public async removeShoppingCart(
    @Res() response: Response<{ shoppingCart: string[] }>,
    @UserData() userData: TokenData,
    @Param() param: IdDto
  ): Promise<Response<{ shoppingCart: string[] }>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const userCart: User = await this.accountUserService.removeCart(
        userData.id,
        param.id
      );

      return response.status(200).json({ shoppingCart: userCart.shoppingCart });
    } else {
      return response.status(401);
    }
  }

  @Get("shopping_cart")
  public async getShoppingCartList(
    @Res() response: Response<any>,
    @UserData() userData: TokenData
  ): Promise<Response<any>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      const productShoppingCart: Product[] =
        await this.productService.findByIds(user.shoppingCart);

      for (let idx = 0; idx < productShoppingCart.length; idx++) {}
      productShoppingCart.forEach((element: any, idx) => {
        element.imageSrc = productShoppingCart[idx].imageSrc[0];
      });

      return response.status(200).json(productShoppingCart);
    } else {
      return response.status(401);
    }
  }

  @Patch("shopping_cart")
  public async patchShoppingCartList(
    @Res() response: Response<any>,
    @UserData() userData: TokenData,
    @Body() body: string[]
  ): Promise<Response<any>> {
    const user: User | null = await this.accountUserService.findById(
      userData.id
    );

    if (user) {
      for (let idx = 0; idx < user.shoppingCart.length; idx++) {
        if (body.indexOf(user.shoppingCart[idx]) >= 0) {
          await this.accountUserService.removeCart(
            userData.id,
            user.shoppingCart[idx]
          );
        }
      }

      const userCart: User = await this.accountUserService.findById(
        userData.id
      );

      const productShoppingCart: Product[] =
        await this.productService.findByIds(userCart.shoppingCart);

      productShoppingCart.forEach((element, idx) => {
        element.imageSrc = productShoppingCart[idx].imageSrc.splice(0, 2);
      });

      return response.status(200).json(productShoppingCart);
    } else {
      return response.status(401);
    }
  }
}
