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
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
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
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
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
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
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
      nameCategory: "Смартфони, ТВ і електроніка",
      nameListCategory: [
        {
          subNameCategory: "Телефони",
          subNameListCategory: [
            { titleSubNameListCategory: "Смартфони" },
            { titleSubNameListCategory: "Кнопкові телефони" },
            { titleSubNameListCategory: "Офісні телефони" },
          ],
        },
        {
          subNameCategory: "Аксесуари для мобільних телефонів",
          subNameListCategory: [
            { titleSubNameListCategory: "Універсальні мобільні батареї" },
            { titleSubNameListCategory: "Картри пам'яті" },
            { titleSubNameListCategory: "Чохли для мобільних телефонів" },
            { titleSubNameListCategory: "Захисні плівки та скло" },
            { titleSubNameListCategory: "Монопади для селфі" },
            { titleSubNameListCategory: "Гарнітури" },
            { titleSubNameListCategory: "3D і VR окуляри" },
            { titleSubNameListCategory: "Тримачі" },
            { titleSubNameListCategory: "Кабелі синхронізації" },
            { titleSubNameListCategory: "Гарнітури Bluetooth" },
            { titleSubNameListCategory: "Мобільний зв'язок та інтернет" },
          ],
        },
        {
          subNameCategory: "Аксесуари для мобільних телефонів",
          subNameListCategory: [
            { titleSubNameListCategory: "Універсальні мобільні батареї" },
            { titleSubNameListCategory: "Картри пам'яті" },
            { titleSubNameListCategory: "Чохли для мобільних телефонів" },
            { titleSubNameListCategory: "Захисні плівки та скло" },
            { titleSubNameListCategory: "Монопади для селфі" },
            { titleSubNameListCategory: "Гарнітури" },
            { titleSubNameListCategory: "3D і VR окуляри" },
            { titleSubNameListCategory: "Тримачі" },
            { titleSubNameListCategory: "Кабелі синхронізації" },
            { titleSubNameListCategory: "Гарнітури Bluetooth" },
            { titleSubNameListCategory: "Мобільний зв'язок та інтернет" },
          ],
        },
        {
          subNameCategory: "Телевізори та аксесуари",
          subNameListCategory: [
            { titleSubNameListCategory: "Телевізори" },
            { titleSubNameListCategory: "Підставки кріплення для ТВ" },
            { titleSubNameListCategory: "Кабелі та перехідники" },
            { titleSubNameListCategory: "ТВ-антени та ресивери" },
            { titleSubNameListCategory: "Універсальні пульти ДК" },
            { titleSubNameListCategory: "Аксесуари для ТВ" },
          ],
        },
        {
          subNameCategory: "Фото та відео",
          subNameListCategory: [
            { titleSubNameListCategory: "Фотоапарати" },
            { titleSubNameListCategory: "Відеокамери" },
            { titleSubNameListCategory: "Об'єктиви" },
            { titleSubNameListCategory: "Екшн-камери й аксесуари" },
            { titleSubNameListCategory: "Акумулятори та батарейки" },
            { titleSubNameListCategory: "Штативи" },
            { titleSubNameListCategory: "Зарядні пристрої" },
            { titleSubNameListCategory: "Спалахи" },
            { titleSubNameListCategory: "Акумелятори для фото та відеокамер" },
            { titleSubNameListCategory: "Студійне обладнання" },
            { titleSubNameListCategory: "Сумки та чохли" },
          ],
        },
        {
          subNameCategory: "Аудіо та домашні кінотеатри",
          subNameListCategory: [
            { titleSubNameListCategory: "DVD/HD-медіаплеєри" },
            { titleSubNameListCategory: "Музичні центри" },
            { titleSubNameListCategory: "Домашні кінотеатри" },
            { titleSubNameListCategory: "Активні акустичні системи" },
            { titleSubNameListCategory: "Акустика Hi-Fi" },
            { titleSubNameListCategory: "AV-ресивер" },
          ],
        },
        {
          subNameCategory: "Проекційне обладнання",
          subNameListCategory: [
            { titleSubNameListCategory: "Проектори" },
            { titleSubNameListCategory: "Екрани" },
          ],
        },
        {
          subNameCategory: "Портативна електроніка",
          subNameListCategory: [
            { titleSubNameListCategory: "Планшети" },
            { titleSubNameListCategory: "Навушники" },
            { titleSubNameListCategory: "Електронні книги" },
            { titleSubNameListCategory: "Розумні годинники браслети" },
            { titleSubNameListCategory: "Фітнес-браслети" },
            { titleSubNameListCategory: "MP3-плеєри" },
            { titleSubNameListCategory: "Диктофони" },
            { titleSubNameListCategory: "Спортивні годинники" },
            { titleSubNameListCategory: "Аксесуари для пленшетів" },
            { titleSubNameListCategory: "Велокомп'ютери" },
            { titleSubNameListCategory: "Портативна акустика" },
            { titleSubNameListCategory: "Зовнішні жорсткі диски" },
          ],
        },
        {
          subNameCategory: "Автоелектроніка",
          subNameListCategory: [
            { titleSubNameListCategory: "Відеореєстратори" },
            { titleSubNameListCategory: "GPS-навігатори" },
            { titleSubNameListCategory: "Автозвук" },
            { titleSubNameListCategory: "Автосигналізації" },
          ],
        },
        {
          subNameCategory: "Play Station",
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
        },
      ],
    },
    {
      nameCategory: "Товари для геймерів",
      nameListCategory: [
        {
          subNameCategory: "Ігрові приставки",
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
        },
        {
          subNameCategory: "Ігри",
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
        },
        {
          subNameCategory: "Play Station",
          subNameListCategory: [
            { titleSubNameListCategory: "Ігрові приставки PlayStation 5" },
            { titleSubNameListCategory: "Ігрові приставки PlayStation 4" },
            { titleSubNameListCategory: "Ігрові приставки PlayStation" },
            { titleSubNameListCategory: "Геймпади PlayStation" },
            { titleSubNameListCategory: "Шоломи VR PlayStation" },
            { titleSubNameListCategory: "Гарнітури PlayStation" },
            { titleSubNameListCategory: "Аксесуари PlayStation" },
            { titleSubNameListCategory: "Ігри для PlayStation" },
            { titleSubNameListCategory: "Підписки PS Plus" },
            { titleSubNameListCategory: "Поповнення гаманця PS Store" },
          ],
        },
        {
          subNameCategory: "Ігрові приставки Nintendo",
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
        },
        {
          subNameCategory: "Ігрові приставки Xbox",
          subNameListCategory: [{ titleSubNameListCategory: undefined }],
        },
        {
          subNameCategory: "Ігрові ноутбуки",
          subNameListCategory: [
            { titleSubNameListCategory: undefined },
            //     { titleSubNameListCategory: "Asus" },
            //     { titleSubNameListCategory: "HP" },
            //     { titleSubNameListCategory: "Acer" },
            //     { titleSubNameListCategory: "MSI" },
            //     { titleSubNameListCategory: "Dell" },
            //     { titleSubNameListCategory: "Lenovo" },
          ],
        },
        {
          subNameCategory: "Ігрові комп'ютери",
          subNameListCategory: [
            { titleSubNameListCategory: "ARTLINE" },
            { titleSubNameListCategory: "QUBE" },
            { titleSubNameListCategory: "Cobra" },
          ],
        },
        {
          subNameCategory: "Комплектуючі для геймерів",
          subNameListCategory: [
            { titleSubNameListCategory: "Відеокарти" },
            { titleSubNameListCategory: "Процесори" },
            { titleSubNameListCategory: "Оперативна пам'ять" },
            { titleSubNameListCategory: "Материнські плати" },
            { titleSubNameListCategory: "Жорсткі диски" },
            { titleSubNameListCategory: "Блоки живлення" },
            { titleSubNameListCategory: "Система охолодження" },
            { titleSubNameListCategory: "Корпуси" },
          ],
        },
        {
          subNameCategory: "Ігрова перефирія",
          subNameListCategory: [
            { titleSubNameListCategory: "Навушники" },
            { titleSubNameListCategory: "Миші" },
            { titleSubNameListCategory: "Клавіатури" },
            { titleSubNameListCategory: "Маніпулятори, джойстики" },
            { titleSubNameListCategory: "Геймерські крісла" },
            { titleSubNameListCategory: "Комп'ютерні столи" },
            { titleSubNameListCategory: "Геймерські рюкзаки" },
          ],
        },
        {
          subNameCategory: "Атрибутика й сувеніри",
          subNameListCategory: [
            { titleSubNameListCategory: "Браслети" },
            { titleSubNameListCategory: "Брелоки" },
            { titleSubNameListCategory: "Гаманці" },
            { titleSubNameListCategory: "Подушки" },
            { titleSubNameListCategory: "Чашки" },
            { titleSubNameListCategory: "Фігурки і статуетки" },
            { titleSubNameListCategory: "Одяг для геймерів" },
            { titleSubNameListCategory: "Кепки і головні убори" },
            { titleSubNameListCategory: "Рюкзаки та сумки" },
            { titleSubNameListCategory: "М'які іграшки" },
            { titleSubNameListCategory: "Падарункові набори для геймерів" },
            { titleSubNameListCategory: "Картинки і постери" },
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
