import { Injectable } from "@angular/core";
import { CategoryProduct, Options } from "../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class CategoryProductService {
  constructor() {}

  optionOperatingSystem_PC: Options = {
    name: "Операційна система",
    htmlElement: "select",
    select: [
      "Без ОС",
      "Mac OS",
      "Linux",
      "Windows 7",
      "Windows 8.x",
      "Windows 10 Home",
      "Windows 11 Home",
      "Chrome OS",
      "Endles OS",
    ],
  };
  optionOperatingSystem_MP: Options = {
    name: "Операційна система",
    htmlElement: "select",
    select: [
      "Android",
      "iOS",
      "Windows Phone 8.1",
      "BlackBerry OS",
      "Harmony OS",
      "Інша",
    ],
  };
  optionCPU_PC: Options = {
    name: "Процесор",
    htmlElement: "select",
    select: [
      "Apple M",
      "Intel Celeron",
      "Intel Xeon",
      "Intel Atom",
      "Intel Pentium",
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9",
      "AMD A",
      "AMD E",
      "AMD FX",
      "AMD Athlon",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
  };
  optionCPU_MP: Options = {
    name: "Процесор",
    htmlElement: "select",
    select: [
      "Apple A15",
      "Apple A14",
      "Apple A13",
      "Apple A12",
      "Qualcomm Snapdragon",
      "Exynos",
      "Kryo",
    ],
  };
  optionGraphics: Options = {
    name: "Відеокарта",
    htmlElement: "select",
    select: [
      "GeForce GTX 1050",
      "GeForce GTX 1050 Ti",
      "GeForce GTX 1650",
      "GeForce GTX 1650 Ti",
      "GeForce GTX 1660 Ti",
      "GeForce RTX 2060",
      "GeForce RTX 3050 Ti",
      "GeForce RTX 3050 Ti",
      "GeForce RTX 3060 Ti",
      "GeForce RTX 3070 Ti",
      "GeForce RTX 3080 Ti",
    ],
  };
  optionScreenDiagonal: Options = {
    name: "Діагональ екрана",
    htmlElement: "select",
    select: ["9", "12.5", "13", "14", "15", "15.6", "16", "17", "18", "20"],
  };
  optionTypeMemory: Options = {
    name: "Тип накопичувача",
    htmlElement: "select",
    select: ["HDD", "SSD", "SSD + HDD", "eMMC"],
  };
  optionRAM: Options = {
    name: "Обсяг оперативної пам'яті",
    htmlElement: "select",
    select: [
      "Без оперативної пам'яті",
      "До 3 ГБ",
      "4 ГБ",
      "6 ГБ",
      "8 ГБ",
      "10 ГБ",
      "12 ГБ",
      "16 ГБ",
      "24 ГБ",
      "32 ГБ",
      "48 ГБ",
      "64 ГБ",
    ],
  };
  optionColor: Options = {
    name: "Колір",
    htmlElement: "select",
    select: [
      "Інші",
      "Білий",
      "Жовтий",
      "Зелений",
      "Золотий",
      "Рожевий",
      "Синій",
      "Сріблястий",
      "Сірий",
      "Фіолетовий",
      "Червоний",
      "Чорний",
    ],
  };
  optionNewUsed: Options = {
    name: "Новий - б/в",
    htmlElement: "select",
    select: ["Новий", "Б/в"],
  };
  optionGuarantee: Options = {
    name: "Гарантія",
    htmlElement: "select",
    select: ["Немає", "1 рік", "2 роки"],
  };
  optionSizeSSD: Options = {
    name: "Обсяг SSD",
    htmlElement: "select",
    select: [
      "128 ГБ",
      "160 ГБ",
      "180 ГБ",
      "200 ГБ",
      "240 ГБ",
      "250 ГБ",
      "256 ГБ",
      "320 ГБ",
      "400 ГБ",
      "480 ГБ",
      "500 ГБ",
      "512 ГБ",
      "1 Т",
      "2 Т",
      "4 Т",
      "8 Т",
    ],
  };
  optionSizeHDD: Options = {
    name: "Обсяг HDD",
    htmlElement: "select",
    select: [
      "128 ГБ",
      "160 ГБ",
      "180 ГБ",
      "200 ГБ",
      "240 ГБ",
      "250 ГБ",
      "256 ГБ",
      "320 ГБ",
      "400 ГБ",
      "480 ГБ",
      "500 ГБ",
      "512 ГБ",
      "1 Т",
      "2 Т",
      "4 Т",
      "8 Т",
    ],
  };
  optionTypeMatrix: Options = {
    name: "Тип матриці",
    htmlElement: "select",
    select: [
      "AMOLED",
      "Dynamic AMOLED",
      "Super AMOLED",
      "Super AMOLED Plus",
      "Super AMOLED + Dynamic AMOLED 2X",
      "Fluid AMOLED",
      "Fluid AMOLED with LTPO",
      "IGZO",
      "IPS",
      "Super IPS+",
      "LCD",
      "LTPS",
      "OGS",
      "OLED",
      "TFN",
      "TN",
      "sAMOLED",
    ],
  };
  optionScreenRefreshRate: Options = {
    name: "Частота оновлення екрану",
    htmlElement: "select",
    select: ["30 ГЦ", "60 ГЦ", "90 ГЦ", "120 ГЦ", "144 ГЦ", "165 ГЦ"],
  };
  optionGuard: Options = {
    name: "Безпека",
    htmlElement: "select",
    select: [
      "Розблокування за обличчям",
      "Сканер відбитків пальця збоку",
      "Сканер відбитків пальця ззаду",
      "Сканер відбитків пальця на екрані",
    ],
  };
  optionBodyMaterial: Options = {
    name: "Матеріал корпусу",
    htmlElement: "select",
    select: ["Метал", "Пластик", "Скло", "Інший"],
  };
  optionMadeIn: Options = {
    name: "Країна-виробник",
    htmlElement: "select",
    select: [
      "Індія",
      "В'єтнам",
      "Китай",
      "Тайвань",
      "Мексика",
      "Німеччина",
      "Польща",
      "Румунія",
      "США",
      "Словаччина",
      "Таїланд",
      "Туреччина",
      "Угорщина",
      "Україна",
      "Японія",
    ],
  };
  optionCommunication: Options = {
    name: "Стандарт зв'язку",
    htmlElement: "select",
    select: [
      "2G (GPRS/EDGE/GSM)",
      "3G (UMTS/HSUPA/HSPA/WSDMA/CDM)",
      "4G (LTE)",
      "5G",
    ],
  };
  // Example
  // option__: Options = {
  //   name: "Тип матриці",
  //   htmlElement: "select",
  //   select: [
  //     "AMOLED",
  //   ],
  // };

  optionsLaptop: Options[] = [
    this.optionOperatingSystem_PC,
    this.optionCPU_PC,
    this.optionGraphics,
    this.optionScreenDiagonal,
    this.optionTypeMemory,
    this.optionRAM,
    this.optionColor,
    this.optionNewUsed,
    this.optionGuarantee,
    this.optionSizeSSD,
    this.optionSizeHDD,
    this.optionMadeIn,
  ];
  optionsSmartphone: Options[] = [
    this.optionCPU_MP,
    this.optionRAM,
    this.optionTypeMatrix,
    this.optionColor,
    this.optionGuard,
    this.optionGuarantee,
    this.optionScreenRefreshRate,
    this.optionCommunication,
    this.optionMadeIn,
  ];
  optionsDevelop: Options[] = [this.optionColor];

  categoryList: CategoryProduct[] = [
    {
      nameCategory: "Ноутбуки та комп'ютери",
      nameListCategory: [
        {
          subNameCategory: "Ноутбуки",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Asus",
              characteristics: this.optionsLaptop,
            },
            {
              titleSubNameListCategory: "Acer",
              characteristics: this.optionsLaptop,
            },
            {
              titleSubNameListCategory: "HP (Hewlett Packard)",
              characteristics: this.optionsLaptop,
            },
            {
              titleSubNameListCategory: "Lenove",
              characteristics: this.optionsLaptop,
            },
            {
              titleSubNameListCategory: "Dell",
              characteristics: this.optionsLaptop,
            },
            {
              titleSubNameListCategory: "Apple",
              characteristics: this.optionsLaptop,
            },
          ],
        },
        {
          subNameCategory: "Аксесуари для ноутбуків і ПК",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Флеш пам'ять USB",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Підставки та столики для ноутбуків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Веб-камери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Універсальні мобільні батареї",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кабелі та перехідники",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        // {
        //   subNameCategory: "Планшети",
        //   // options: {},
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        {
          subNameCategory: "Аксесуари для планшетів",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Чохли та клавіатури для планшетів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Захисні плівки та скло",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Електронні книги",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Аксесуари для електронних книг",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Комплектуючі",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Відеокарта",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Жорсткі диски",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Процесори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "SSD",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "HDD",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "ОЗП",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Материнські плати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Блоки живлення",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корпуси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джерела безперебійного живлення",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Системне охолодження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стабілізатори напруги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Оптичні приводи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Звукові карти",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Комп'ютери",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Монітори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Миші",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комплект клавіатура + миша",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мереживе сховище (NAS)",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        // {
        //   subNameCategory: "Серверне обладнання",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        // {
        //   subNameCategory: "Оргтехніка",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "БФП/Принтери" },
        //     { titleSubNameListCategory: "Проектори" },
        //     { titleSubNameListCategory: "Витратні матеріали для принтерів" },
        //     { titleSubNameListCategory: "Телефонні апарати" },
        //   ],
        // },
        // {
        //   subNameCategory: "Інтерактивне обладнання",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        // {
        //   subNameCategory: "Програмне забезпечення",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Операційні системи" },
        //     { titleSubNameListCategory: "Офісні програми" },
        //     { titleSubNameListCategory: "Антивіруси" },
        //   ],
        // },
        // {
        //   subNameCategory: "Товари для геймерів",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Play Station" },
        //     { titleSubNameListCategory: "Ігрові консолі та приставки" },
        //     { titleSubNameListCategory: "Джойстики та аксесуари" },
        //     { titleSubNameListCategory: "Ігри" },
        //     { titleSubNameListCategory: "Ігрові поверхні" },
        //   ],
        // },
        // {
        //   subNameCategory: "Мережеве обладнання",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Патч-корди" },
        //     { titleSubNameListCategory: "Маршрутизатори" },
        //     { titleSubNameListCategory: "IP-камери" },
        //     { titleSubNameListCategory: "Комутатори" },
        //     { titleSubNameListCategory: "Бездротові точки доступу" },
        //   ],
        // },
      ],
    },
    {
      nameCategory: "Смартфони, ТВ і електроніка",
      nameListCategory: [
        {
          subNameCategory: "Телефони",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Смартфони",
              characteristics: this.optionsSmartphone,
            },
            // { titleSubNameListCategory: "Кнопкові телефони" },
            // { titleSubNameListCategory: "Офісні телефони" },
          ],
        },
        // {
        //   subNameCategory: "Аксесуари для мобільних телефонів",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Універсальні мобільні батареї" },
        //     { titleSubNameListCategory: "Картри пам'яті" },
        //     { titleSubNameListCategory: "Чохли для мобільних телефонів" },
        //     { titleSubNameListCategory: "Захисні плівки та скло" },
        //     { titleSubNameListCategory: "Монопади для селфі" },
        //     { titleSubNameListCategory: "Гарнітури" },
        //     { titleSubNameListCategory: "3D і VR окуляри" },
        //     { titleSubNameListCategory: "Тримачі" },
        //     { titleSubNameListCategory: "Кабелі синхронізації" },
        //     { titleSubNameListCategory: "Гарнітури Bluetooth" },
        //     { titleSubNameListCategory: "Мобільний зв'язок та інтернет" },
        //   ],
        // },
        // {
        //   subNameCategory: "Аксесуари для мобільних телефонів",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Універсальні мобільні батареї" },
        //     { titleSubNameListCategory: "Картри пам'яті" },
        //     { titleSubNameListCategory: "Чохли для мобільних телефонів" },
        //     { titleSubNameListCategory: "Захисні плівки та скло" },
        //     { titleSubNameListCategory: "Монопади для селфі" },
        //     { titleSubNameListCategory: "Гарнітури" },
        //     { titleSubNameListCategory: "3D і VR окуляри" },
        //     { titleSubNameListCategory: "Тримачі" },
        //     { titleSubNameListCategory: "Кабелі синхронізації" },
        //     { titleSubNameListCategory: "Гарнітури Bluetooth" },
        //     { titleSubNameListCategory: "Мобільний зв'язок та інтернет" },
        //   ],
        // },
        // {
        //   subNameCategory: "Телевізори та аксесуари",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Телевізори" },
        //     { titleSubNameListCategory: "Підставки кріплення для ТВ" },
        //     { titleSubNameListCategory: "Кабелі та перехідники" },
        //     { titleSubNameListCategory: "ТВ-антени та ресивери" },
        //     { titleSubNameListCategory: "Універсальні пульти ДК" },
        //     { titleSubNameListCategory: "Аксесуари для ТВ" },
        //   ],
        // },
        // {
        //   subNameCategory: "Фото та відео",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Фотоапарати" },
        //     { titleSubNameListCategory: "Відеокамери" },
        //     { titleSubNameListCategory: "Об'єктиви" },
        //     { titleSubNameListCategory: "Екшн-камери й аксесуари" },
        //     { titleSubNameListCategory: "Акумулятори та батарейки" },
        //     { titleSubNameListCategory: "Штативи" },
        //     { titleSubNameListCategory: "Зарядні пристрої" },
        //     { titleSubNameListCategory: "Спалахи" },
        //     { titleSubNameListCategory: "Акумелятори для фото та відеокамер" },
        //     { titleSubNameListCategory: "Студійне обладнання" },
        //     { titleSubNameListCategory: "Сумки та чохли" },
        //   ],
        // },
        // {
        //   subNameCategory: "Аудіо та домашні кінотеатри",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "DVD/HD-медіаплеєри" },
        //     { titleSubNameListCategory: "Музичні центри" },
        //     { titleSubNameListCategory: "Домашні кінотеатри" },
        //     { titleSubNameListCategory: "Активні акустичні системи" },
        //     { titleSubNameListCategory: "Акустика Hi-Fi" },
        //     { titleSubNameListCategory: "AV-ресивер" },
        //   ],
        // },
        // {
        //   subNameCategory: "Проекційне обладнання",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Проектори" },
        //     { titleSubNameListCategory: "Екрани" },
        //   ],
        // },
        // {
        //   subNameCategory: "Портативна електроніка",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Планшети" },
        //     { titleSubNameListCategory: "Навушники" },
        //     { titleSubNameListCategory: "Електронні книги" },
        //     { titleSubNameListCategory: "Розумні годинники браслети" },
        //     { titleSubNameListCategory: "Фітнес-браслети" },
        //     { titleSubNameListCategory: "MP3-плеєри" },
        //     { titleSubNameListCategory: "Диктофони" },
        //     { titleSubNameListCategory: "Спортивні годинники" },
        //     { titleSubNameListCategory: "Аксесуари для пленшетів" },
        //     { titleSubNameListCategory: "Велокомп'ютери" },
        //     { titleSubNameListCategory: "Портативна акустика" },
        //     { titleSubNameListCategory: "Зовнішні жорсткі диски" },
        //   ],
        // },
        // {
        //   subNameCategory: "Автоелектроніка",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: "Відеореєстратори" },
        //     { titleSubNameListCategory: "GPS-навігатори" },
        //     { titleSubNameListCategory: "Автозвук" },
        //     { titleSubNameListCategory: "Автосигналізації" },
        //   ],
        // },
        // {
        //   subNameCategory: "Play Station",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
      ],
    },
    {
      nameCategory: "Товари для геймерів",
      nameListCategory: [
        // {
        //   subNameCategory: "Ігрові приставки",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        // {
        //   subNameCategory: "Ігри",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        {
          subNameCategory: "Play Station",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Ігрові приставки PlayStation 5",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігрові приставки PlayStation 4",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігрові приставки PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Геймпади PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шоломи VR PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гарнітури PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігри для PlayStation",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Підписки PS Plus",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Поповнення гаманця PS Store",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        // {
        //   subNameCategory: "Ігрові приставки Nintendo",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        // {
        //   subNameCategory: "Ігрові приставки Xbox",
        //   subNameListCategory: [{ titleSubNameListCategory: undefined }],
        // },
        // {
        //   subNameCategory: "Ігрові ноутбуки",
        //   subNameListCategory: [
        //     { titleSubNameListCategory: undefined },
        //     // { titleSubNameListCategory: "Asus" },
        //     // { titleSubNameListCategory: "HP" },
        //     // { titleSubNameListCategory: "Acer" },
        //     // { titleSubNameListCategory: "MSI" },
        //     // { titleSubNameListCategory: "Dell" },
        //     // { titleSubNameListCategory: "Lenovo" },
        //   ],
        // },
        {
          subNameCategory: "Ігрові комп'ютери",
          subNameListCategory: [
            {
              titleSubNameListCategory: "ARTLINE",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "QUBE",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Cobra",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Комплектуючі для геймерів",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Відеокарти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Процесори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Оперативна пам'ять",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Материнські плати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Жорсткі диски",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Блоки живлення",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Система охолодження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корпуси",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Ігрова перефирія",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Навушники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Миші",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Клавіатури",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Маніпулятори, джойстики",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Геймерські крісла",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комп'ютерні столи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Геймерські рюкзаки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Атрибутика й сувеніри",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Браслети",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Брелоки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гаманці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Подушки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Чашки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фігурки і статуетки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Одяг для геймерів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кепки і головні убори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Рюкзаки та сумки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "М'які іграшки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Падарункові набори для геймерів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Картинки і постери",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    // {
    //   nameCategory: "...........",
    //   nameListCategory: [
    //     {
    //       subNameCategory: ".........",
    //       subNameListCategory: [
    //         { titleSubNameListCategory: ".........." },
    //         { titleSubNameListCategory: ".........." },
    //         { titleSubNameListCategory: ".........." },
    //       ],
    //     },
    //   ],
    // },
  ];
}
