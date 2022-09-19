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

  optionsDevelop: Options[] = [this.optionColor];
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
        {
          subNameCategory: "Оргтехніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "БФП/Принтери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Проектори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Витратні матеріали для принтерів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Телефонні апарати",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Програмне забезпечення",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Операційні системи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Офісні програми",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Антивіруси",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Товари для геймерів",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Play Station",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігрові консолі та приставки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джойстики та аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігрові поверхні",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Мережеве обладнання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Патч-корди",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Маршрутизатори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "IP-камери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комутатори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бездротові точки доступу",
              characteristics: this.optionsDevelop,
            },
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
            {
              titleSubNameListCategory: "Смартфони",
              characteristics: this.optionsSmartphone,
            },
            {
              titleSubNameListCategory: "Кнопкові телефони",
              characteristics: this.optionsSmartphone,
            },
            {
              titleSubNameListCategory: "Офісні телефони",
              characteristics: this.optionsSmartphone,
            },
          ],
        },
        {
          subNameCategory: "Аксесуари для мобільних телефонів",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Універсальні мобільні батареї",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Картри пам'яті",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Чохли для мобільних телефонів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Захисні плівки та скло",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Монопади для селфі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гарнітури",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "3D і VR окуляри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тримачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кабелі синхронізації",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гарнітури Bluetooth",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мобільний зв'язок та інтернет",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Телевізори та аксесуари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Телевізори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Підставки кріплення для ТВ",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кабелі та перехідники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "ТВ-антени та ресивери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Універсальні пульти ДК",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари для ТВ",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Фото та відео",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Фотоапарати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Відеокамери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Об'єктиви",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Екшн-камери й аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Акумулятори та батарейки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Штативи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зарядні пристрої",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спалахи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Акумелятори для фото та відеокамер",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Студійне обладнання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сумки та чохли",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аудіо та домашні кінотеатри",
          subNameListCategory: [
            {
              titleSubNameListCategory: "DVD/HD-медіаплеєри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Музичні центри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Домашні кінотеатри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Активні акустичні системи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Акустика Hi-Fi",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "AV-ресивер",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Проекційне обладнання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Проектори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Екрани",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Портативна електроніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Планшети",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Навушники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електронні книги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Розумні годинники браслети",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фітнес-браслети",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "MP3-плеєри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Диктофони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивні годинники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари для пленшетів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Велокомп'ютери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Портативна акустика",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зовнішні жорсткі диски",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Автоелектроніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Відеореєстратори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "GPS-навігатори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автозвук",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автосигналізації",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Товари для геймерів",
      nameListCategory: [
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
              titleSubNameListCategory: "Брелки",
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
    {
      nameCategory: "Побутова техніка",
      nameListCategory: [
        {
          subNameCategory: "Велика побутова техніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Пральні машини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Холодильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Морозильні камери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Плити",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Посудомийні машини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сушильні автомати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Винні шафи",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Вбудована техніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Варильні поверхні",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Духові шафи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Витяжки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вбудовані посудомийні машини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вбудовані холодильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вбудовані мікрохвильові печі",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Кліматична техніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Кондиціонери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вентилятори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Водонагрівачі (бойлери)",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зволожувачі повітря",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Очищувачі повітря",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Осушувачі повітря",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Кухня",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Мультиварки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мікрохвильві печі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кавоварки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Блендери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електрочайники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "М'ясорубки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Соковичавниці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Грилі та електрошашличниці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кухові комбайни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бутербродниці та вафульниці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Хлібопічки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Міксери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тостери",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Сантехніка та ванна кімната",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Змішувачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ванни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кухонні мийки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сифони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гідромасажні бокси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Унітази",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Душові гарнітури",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд та прибирання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Пилососи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Роботи-пилососи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Швейна техніка та аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Праски та прасувальні системи",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Побутова хімія",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Засоби для прання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для миття посуду",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для прибирання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для догляду за технікою",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Для краси та здоров'я",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Машинки для стриження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тримери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Прилади для укладання волосся",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Епілятори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фотоепілятори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електробритви для чоловіків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фени",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тонометри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зубні щітки та іригатори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ваги підлогові",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Термометри для тіла",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Товари для дому",
      nameListCategory: [
        {
          subNameCategory: "Меблі",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Крісла",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комп'ютерні столи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стільці та табурети",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Безкаркасні меблі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садові меблі",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Домашній текстиль",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Постільна білизна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Матраци",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ковдри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Подушки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Наматрацники та підматрацники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пледи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Рушники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Покривали",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Системи охорони і безпеки",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Домофони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комплекти відеоспостереження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комплекти сигналізації",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Відеодомофони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стабілізатори напруги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Інвертори",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Посуд",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Для приготування їжі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Посуд для сервірування",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кухонні аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кухонні ножі та приладдя",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зберігання та пакування",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Інветар для дому та офісу",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Прання та прасування",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Інструменти для прибирання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зберігання та організація простору",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Відра та корзини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Господарський інвентар",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Драбини",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Господарські товари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Туалетний папір",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пакети для сміття",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Серветки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Побутова хімія",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Засоби для прання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для посудомойних машин",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для чищення ванн",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Освітлення",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Лампочки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільні лампи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Люстри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вуличне освітлення",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільні світильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стельові світильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Точкові світильники",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Лічильники",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Захист від перепадів напруги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники води",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники газу",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники електроенергії",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Годинники",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Настінні годинники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільні годинники",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Товари для тварин",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Корм для тварин",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Товари для кішок",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Товари для собак",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Інструменти та автотовари",
      nameListCategory: [
        {
          subNameCategory: "Інструменти",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Шурупокрути та електровикрутки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Болгарки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Перфоратори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дрилі та міксири",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пили та плиткорізи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фарбопульт",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електролобзики",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вимірувальна техніка",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фрезери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Багатофункційні інструменти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електрорубанки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Будівельні фени",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Витратні матеріали та приладдя",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Свердла",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Диски",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Біти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бури",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пиляльні полотна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фрези",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Обладнання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Зварувальне обладнання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Генератори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стабілізатори напруги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Універсальні мийки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бетономішалки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Компресори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Теплові гармати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Точильні верстати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вантажопідйомне обладнання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Інвентори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Промислові пилососи",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Ручний інструмент",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Набори інструментів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Скрині та сумки для інструментів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ключі, знімачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Викрутки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вимірувально-розмільчаний інструмент",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шарнірно-губцевий інструмент",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Електромонтажне обладнання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Розетки та вимикачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кабельно-провідникова продукція",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Автотовари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Автозапчастини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шини",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автомобільні диски",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Відеореєстратори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мастили й оливи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "GPS-навігатори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автокомпресори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Головні пристрої",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пускозарядні пристрої",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автоприладдя",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автосигналізація",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Техдопомога",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Домкрати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автоакустика",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Паркувальні системи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автохімія",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "FM-трансмітери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автолампи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автокосметика",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Радар-детектори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Штатні головні пристрої",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дефлектори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Автофарби",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електрообладнання автомобілів",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Сантехніка та ремонт",
      nameListCategory: [
        {
          subNameCategory: "Ванни, бокси, душові",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Ванни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гідромасажні бокси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Душові гарнітури",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Душові кабіни та стінки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бойлери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Панелі для ванн",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Душові двері та перегородки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Мийки, змішувачі, сифони",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Змішувачі",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Кераміка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Унітази",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Інсталяції та комплектуючі",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Інсталяції для унітазу",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Інсталяції для біде",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кнопки для змиву",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Сушильники для рушників і радіатори",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Сушильники для рушників",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Радіатори",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Інструменти",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Болгарки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Перфоратори",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Обладнання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Генератори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зварувальне обладнання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Промислові пилососи",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Ручний інструмент",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Набори інструментів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ключі, знімачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Скрині та сумки для інструментів",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Освітлення",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Люстри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільно-стельові світильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Точкові світильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бра та настільні світильники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільні лампи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Торшери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Світильники для ванної",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі настільні лампи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вуличне освітлення",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лампочки та аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Офісно-промислове освітлення",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Лічильники",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Захист від перепадів напруги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники води",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники газу",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лічильники електроенергії",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Меблі для ванної кімнати",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Тумби",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дзеркала",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пенали",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Будівельні матеріали",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Покрівля та водостік",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Дача, сад і город",
      nameListCategory: [
        {
          subNameCategory: "Садова техніка",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Тримери та мотокоси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ланцюгові пили",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Газонокосарки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Культиватори та мотоблоки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Повітродуви",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари для садової техніки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садові подрібнювачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Двигуни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Снігоприбиральна техніка та інветар",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Сиситеми поливання",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Насоси та помпи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шланги",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Коннектори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зрошувачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Насадки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Садовий інвентар",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Обприскувачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садове приладдя",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ручний садовий інструмент",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тачки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кущорізи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Теплиці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сітки та накривні матеріали",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аератори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садові огорожі",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Насіння та добрива",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Насіння овочів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Насіння газонних трав",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Насіння квітів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Насіння пряних і зелених культур",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Субстрати і ґрунти для рослин",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Добрива",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Саджанці",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Cаджанці троянд",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Cаджанці дерев",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Садові меблі та декор",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Гойдалки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садові павільйони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Садовий декор",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шезлонги",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Корм для тварин",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Корм для собак",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корм для кішок",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корм для птахів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корм для гризунів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Корм для риб",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд за вихованцем",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Посуд для тварин",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Іграшки для тварин",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Наповнювачі туалетів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Повідці для тварин",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Інвентар для дому",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Вазони",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Драбини, підмостки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Прасувальні дошки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Для прибирання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Контейнери для зберігання",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Спорт і захоплення",
      nameListCategory: [
        {
          subNameCategory: "Тренажери та фітнес",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Бігові доріжки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Орбітреки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фітнес та аеробіка",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Велотренажери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гантелі, диски, грифи, замки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шведські стінки та турніки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Спортивне харчування",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Протеїн",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вітаміни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Амінокислоти",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Велисипеди та аксесуари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Велосипеди",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари для велосипедів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Комплектуючі для велосипедів",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Риболовля",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Човни й аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вудлища",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Котушки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Туризм і кемпінг",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Намети й аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Рюкзаки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Складані меблі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Надувні меблі й аксесуари",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аксесуари для активного відпочинку",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Термопродукція",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Рації",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ножі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мультиінструмент",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Спортивна стрільба",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Пневматика",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спорядження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тактичний одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Страйкбол (AirSoft)",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Ігрові види спорту",
          subNameListCategory: [
            {
              titleSubNameListCategory: "М'ячі для командних ігор",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ракетки для настільного тенісу",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Бідмінтон і спідмінтон",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Басейн і аквафітнес",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Ласти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аксесуари для басейну та аквафітнесу",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Радіокеровані моделі",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Квадрокоптери",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Музичні інструменти",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Гітари та обладнання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ударні",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Духові",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Оптика",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Телескопи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мікроскопи",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Електротранспорт",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Гіроскутери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гіроборди",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Одяг, взуття та прикраси",
      nameListCategory: [
        {
          subNameCategory: "Одяг для жінок",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Верхній одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивний одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Плаття",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джинси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивні костюми",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Футболки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спідня білизна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Термобілизна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Нічний і домашній одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Панчішно-шкарпеткові вироби",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Жіноче взуття",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Кросівки та кеди",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Туфлі та балетки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Черевики",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гумові чоботи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кімнатне взуття",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шльопанці і в'єтнамки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аксесуари для жінок",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Сумки і рюкзаки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Головні убори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Парасолі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гаманці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сонцезахисні окуляри",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Одяг для чоловіків",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Верхній одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Футболки та сорочки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Світшоти та худі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джинси",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивні костюми",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спідня білизна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Термобілизна",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Нічний і домашній одяг",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шкарпетки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Чоловіче взуття",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Кросівки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кеди",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Туфлі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Черевики",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кімнатне взуття",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шльопанці і в'єтнамки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аксусуари для чоловіків",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Рюкзаки та сумки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Парасолі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Головні убори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ремені",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Портмоне",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дитячий одяг",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Верхній одяг для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Футболки та водолазки для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джинси та штани для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивні костюми для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Худі та світшоти для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Піжами для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спідня білизна для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Верхній одяг для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Футболки та водолазки для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Джинси та лосини для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сукні та спідниці для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Спортивні костюми для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Піжами для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Нижня білизна для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Теплі комбінезони для малюків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Чоловічки для малюків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Боді для малюків",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дитяче взуття",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Взуття для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Взуття для хлопчиків",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аксусуари для дітей",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Шапки та шарфи",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шкарпетки і колготки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Рюкзаки та сумки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Краса та здоров'я",
      nameListCategory: [
        {
          subNameCategory: "Техніка для краси та здоров'я",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Машинки для стриження",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Триммери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електробритви",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Фени",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Епілятори",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дерматокосметика",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Антивіковий догляд",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Засоби для гоління",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Станок для гоління",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Лезо для бритви",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Косметика для гоління",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Особиста гігієна",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Туалетний папір",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Підгузки для дорослих",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Вологі серветки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд за обличчям",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Крем",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Маска для обличчя",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Міцелярна вода",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засіб для вмивання",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Патчі",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд за тілом",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Дезодоранти і антиперспіранти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Засоби для інтимної гігієни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Догляд за руками",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ефірні масла",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд за волоссям",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Шампуні",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Олія для волосся",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Кондиціонери",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Набори по догляду за волоссям",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Маски для волосся",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Парфуми",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Чоловіча парфумерія",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Жіноча парфумерія",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Аромати для дому",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Фарбування волосся",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Фарба для волосся",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тонуючі засоби",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Догляд за порожниною рта",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Зубна паста",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Зубні щітки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Електричні зубні щітки і іррігатори",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Декоративна косметика",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Лак для нігтів",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Гель-лак",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Губна помада",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Блиск для губ",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Туш для вій",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тіні для вій",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Олівці для очей",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Тональні засоби",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пудра",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Аксесуари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Для манікюру",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Для макіяжу",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Для волосся",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
    {
      nameCategory: "Дитячі товари",
      nameListCategory: [
        {
          subNameCategory: "Іграшки",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Дитячі конструктори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Інтерактивні іграшки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Настільні ігри",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Творчість",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ігрові набори",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Радіокеровані іграшки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Ляльки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Іграшки для малюків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "М'які іграшки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Іграшкові машинки та техніка",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Іграшкова зброя",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дитяче харчування",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Дитячі суміші",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Стільчики для годування",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пляшечки для годування та аксесуари",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі кухонні комбайни",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі каші",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитяче пюре",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячий посуд",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пустушки",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Прогулянки й активний відпочинок",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Електротранспорт",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі коляски",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі автокрісла",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі велосипеди",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі самокати",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дивомобілі, ходунки, гойдалки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Роликові ковзани",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Гігієна та догляд за дитиною",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Підгузки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі серветки, хусточки та рушники",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пелюшки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Косметика для догляду для дітей",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі ванночки та аксесуари",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дитячий одяг, взуття та аксесуари",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Одяг для хлопчиків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Одяг для дівчаток",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Одяг для малюків",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитяче взуття",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Шкільне приладдя",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Шкільні набори та ранці",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Шкільні пенали",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Сумки для взуття",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Дитяча кімната",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Радіоняньки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Парти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Манежі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Мобілі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі ліжечка",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Розвиток і творчість",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Творчість",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory:
                "Розвивальні центри, килимки, крісла-качалки",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Пазли",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячi музичні інструменти",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Набори для наукових досліджень",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Дитячі комп'ютери",
              characteristics: this.optionsDevelop,
            },
          ],
        },
        {
          subNameCategory: "Товари для мам",
          subNameListCategory: [
            {
              titleSubNameListCategory: "Молоковідсмоктувачі",
              characteristics: this.optionsDevelop,
            },
            {
              titleSubNameListCategory: "Косметика для мам",
              characteristics: this.optionsDevelop,
            },
          ],
        },
      ],
    },
  ];
}
