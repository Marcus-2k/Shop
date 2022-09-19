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
    "Тип матриці",
    "Частота оновлення екрану",
    "Безпека",
    "Матеріал корпусу",
    "Країна-виробник",
    "Стандарт зв'язку",
  ];

  nameForServer: string[] = [
    "operating_system",
    "cpu",
    "video_card",
    "screen_diagonal",
    "drive_type",
    "ram",
    "color",
    "new_used",
    "guarantee",
    "ssd",
    "hdd",
    "type_matrix",
    "screen_refresh_rate",
    "guard",
    "body_material",
    "made_in",
    "communication",
  ];
}
