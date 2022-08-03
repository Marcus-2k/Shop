import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NameQueryService {
  constructor() {}

  originalName: string[] = [
    "Операційна система",
    "Процесор",
    "Відеокарта",
    "Діагональ екрана",
    "Тип накопичувача",
    "Обсяг оперативної пам'яті",
    "Колір",
    "Новий - б/в",
    "Гарантія",
    "Обсяг SSD",
    "Обсяг HDD",
  ];

  nameForServer: string[] = [
    "operating_system",
    "cpu_pc",
    "video_card",
    "screen_diagonal",
    "drive_type",
    "ram",
    "color",
    "new_used",
    "guarantee",
    "ssd",
    "hdd",
  ];
}
