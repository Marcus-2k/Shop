import { BadRequestException } from "@nestjs/common";
import * as multer from "multer";
import * as moment from "moment";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

const storage: MulterOptions["storage"] = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },

  filename(req, file, cb) {
    const date = moment().format("DDMMYYYY-HHmmss-SSS");
    cb(null, `${date}-${file.originalname}`);
  },
});

const fileFilter: MulterOptions["fileFilter"] = (
  req: any,
  file,
  cb: (error: Error | null, acceptFile: boolean) => void,
): void => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(
      new BadRequestException(null, {
        description:
          "Prohibited file format. The following types are allowed: png, jpeg, jpg, webp",
      }),
      false,
    );
  }
};

const limits: MulterOptions["limits"] = {
  fileSize: 1024 * 1024 * 5,
};

export const upload: MulterOptions = { storage, fileFilter, limits };
