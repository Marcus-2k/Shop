import { Injectable } from "@angular/core";
import { CategoryProduct } from "../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class CategoryProductService {
  constructor() {}

  categoryList: CategoryProduct[] = [
    {
      nameCategory: "Ноутбуки та комп'ютери",
      nameListCategory: [
        {
          subNameCategory: "Ноутбуки",
          subNameListCategory: [
            { titleSubNameListCategory: "Asus" },
            { titleSubNameListCategory: "Acer" },
            { titleSubNameListCategory: "HP (Hewlett Packard)" },
            { titleSubNameListCategory: "Lenove" },
            { titleSubNameListCategory: "Dell" },
            { titleSubNameListCategory: "Apple" },
          ],
        },
        {
          subNameCategory: "Аксесуари для ноутбуків і ПК",
          subNameListCategory: [
            { titleSubNameListCategory: "Флеш пам'ять USB" },
            { titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків" },
            { titleSubNameListCategory: "Підставки та столики для ноутбуків" },
            { titleSubNameListCategory: "Веб-камери" },
            { titleSubNameListCategory: "Універсальні мобільні батареї" },
            { titleSubNameListCategory: "Кабелі та перехідники" },
          ],
        },
        {
          subNameCategory: "Планшети",
          subNameListCategory: [
            { titleSubNameListCategory: "....................." },
          ],
        },
        {
          subNameCategory: "Аксесуари для планшетів",
          subNameListCategory: [
            { titleSubNameListCategory: "Чохли та клавіатури для планшетів" },
            { titleSubNameListCategory: "Захисні плівки та скло" },
          ],
        },
        {
          subNameCategory: "Електронні книги",
          subNameListCategory: [
            { titleSubNameListCategory: "Аксесуари для електронних книг" },
          ],
        },
        {
          subNameCategory: "Комплектуючі",
          subNameListCategory: [
            { titleSubNameListCategory: "Відеокарта" },
            { titleSubNameListCategory: "Жорсткі диски" },
            { titleSubNameListCategory: "Процесори" },
            { titleSubNameListCategory: "SSD" },
            { titleSubNameListCategory: "HDD" },
            { titleSubNameListCategory: "ОЗП" },
            { titleSubNameListCategory: "Материнські плати" },
            { titleSubNameListCategory: "Блоки живлення" },
            { titleSubNameListCategory: "Корпуси" },
            { titleSubNameListCategory: "Джерела безперебійного живлення" },
            { titleSubNameListCategory: "Системне охолодження" },
            { titleSubNameListCategory: "Стабілізатори напруги" },
            { titleSubNameListCategory: "Оптичні приводи" },
            { titleSubNameListCategory: "Звукові карти" },
          ],
        },
        {
          subNameCategory: "Комп'ютери",
          subNameListCategory: [
            { titleSubNameListCategory: "Монітори" },
            { titleSubNameListCategory: "Миші" },
            { titleSubNameListCategory: "Комплект клавіатура + миша" },
            { titleSubNameListCategory: "Мереживе сховище (NAS)" },
          ],
        },
        {
          subNameCategory: "Серверне обладнання",
          subNameListCategory: [{ titleSubNameListCategory: "........" }],
        },
        {
          subNameCategory: "Оргтехніка",
          subNameListCategory: [
            { titleSubNameListCategory: "БФП/Принтери" },
            { titleSubNameListCategory: "Проектори" },
            { titleSubNameListCategory: "Витратні матеріали для принтерів" },
            { titleSubNameListCategory: "Телефонні апарати" },
          ],
        },
        {
          subNameCategory: "Інтерактивне обладнання",
          subNameListCategory: [
            { titleSubNameListCategory: "..............." },
          ],
        },
        {
          subNameCategory: "Програмне забезпечення",
          subNameListCategory: [
            { titleSubNameListCategory: "Операційні системи" },
            { titleSubNameListCategory: "Офісні програми" },
            { titleSubNameListCategory: "Антивіруси" },
          ],
        },
        {
          subNameCategory: "Товари для геймерів",
          subNameListCategory: [
            { titleSubNameListCategory: "Play Station" },
            { titleSubNameListCategory: "Ігрові консолі та приставки" },
            { titleSubNameListCategory: "Джойстики та аксесуари" },
            { titleSubNameListCategory: "Ігри" },
            { titleSubNameListCategory: "Ігрові поверхні" },
          ],
        },
        {
          subNameCategory: "Мережеве обладнання",
          subNameListCategory: [
            { titleSubNameListCategory: "Патч-корди" },
            { titleSubNameListCategory: "Маршрутизатори" },
            { titleSubNameListCategory: "IP-камери" },
            { titleSubNameListCategory: "Комутатори" },
            { titleSubNameListCategory: "Бездротові точки доступу" },
          ],
        },
      ],
    },
    {
      nameCategory: "...........",
      nameListCategory: [
        {
          subNameCategory: ".........",
          subNameListCategory: [
            { titleSubNameListCategory: ".........." },
            { titleSubNameListCategory: ".........." },
            { titleSubNameListCategory: ".........." },
          ],
        },
      ],
    },
  ];
}
