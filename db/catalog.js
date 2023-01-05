const optionOperatingSystem_PC = {
  name: "Операційна система",
  query_name: "operating_system_pc",
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
  multiple: false,
};
const optionOperatingSystem_MP = {
  name: "Операційна система",
  query_name: "operating_system_mp",
  htmlElement: "select",
  select: [
    "Android",
    "iOS",
    "Windows Phone 8.1",
    "BlackBerry OS",
    "Harmony OS",
    "Інша",
  ],
  multiple: false,
};
const optionCPU_PC = {
  name: "Процесор",
  query_name: "cpu_pc",
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
  multiple: false,
};
const optionCPU_MP = {
  name: "Процесор",
  query_name: "cpu_mp",
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
  multiple: false,
};
const optionGraphics = {
  name: "Відеокарта",
  query_name: "graphics",
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
  multiple: false,
};
const optionScreenDiagonal = {
  name: "Діагональ екрана",
  query_name: "screen_diagonal",
  htmlElement: "select",
  select: ["9", "12.5", "13", "14", "15", "15.6", "16", "17", "18", "20"],
  multiple: false,
};
const optionTypeMemory = {
  name: "Тип накопичувача",
  query_name: "type_memory",
  htmlElement: "select",
  select: ["HDD", "SSD", "SSD + HDD", "eMMC"],
  multiple: false,
};
const optionRAM = {
  name: "Обсяг оперативної пам'яті",
  query_name: "ram",
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
  multiple: false,
};
const optionColor = {
  name: "Колір",
  query_name: "color",
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
  multiple: false,
};
const optionNewUsed = {
  name: "Новий - Вживаний",
  query_name: "new_used",
  htmlElement: "select",
  select: ["Новий", "Вживаний"],
  multiple: false,
};
const optionGuarantee = {
  name: "Гарантія",
  query_name: "guarantee",
  htmlElement: "select",
  select: ["Немає", "1 рік", "2 роки"],
  multiple: false,
};
const optionSizeSSD = {
  name: "Обсяг SSD",
  query_name: "size_ssd",
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
  multiple: false,
};
const optionSizeHDD = {
  name: "Обсяг HDD",
  query_name: "size_hdd",
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
  multiple: false,
};
const optionTypeMatrix = {
  name: "Тип матриці",
  query_name: "type_matrix",
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
  multiple: false,
};
const optionScreenRefreshRate = {
  name: "Частота оновлення екрану",
  query_name: "screen_refresh_rate",
  htmlElement: "select",
  select: ["30 ГЦ", "60 ГЦ", "90 ГЦ", "120 ГЦ", "144 ГЦ", "165 ГЦ"],
  multiple: false,
};
const optionGuard = {
  name: "Безпека",
  query_name: "guard",
  htmlElement: "select",
  select: [
    "Розблокування за обличчям",
    "Сканер відбитків пальця збоку",
    "Сканер відбитків пальця ззаду",
    "Сканер відбитків пальця на екрані",
  ],
  multiple: true,
};
const optionBodyMaterial = {
  name: "Матеріал корпусу",
  query_name: "body_material",
  htmlElement: "select",
  select: ["Метал", "Пластик", "Скло", "Інший"],
  multiple: true,
};
const optionMadeIn = {
  name: "Країна-виробник",
  query_name: "made_in",
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
  multiple: false,
};
const optionCommunication = {
  name: "Стандарт зв'язку",
  query_name: "communication",
  htmlElement: "select",
  select: [
    "2G (GPRS/EDGE/GSM)",
    "3G (UMTS/HSUPA/HSPA/WSDMA/CDM)",
    "4G (LTE)",
    "5G",
  ],
  multiple: true,
};

const optionsDevelop = [optionColor, optionMadeIn];
const optionsLaptop = [
  optionOperatingSystem_PC,
  optionCPU_PC,
  optionGraphics,
  optionScreenDiagonal,
  optionTypeMemory,
  optionRAM,
  optionColor,
  optionNewUsed,
  optionGuarantee,
  optionSizeSSD,
  optionSizeHDD,
  optionMadeIn,
];
const optionsSmartphone = [
  optionCPU_MP,
  optionOperatingSystem_MP,
  optionRAM,
  optionTypeMatrix,
  optionColor,
  optionGuard,
  optionGuarantee,
  optionScreenRefreshRate,
  optionCommunication,
  optionMadeIn,
  optionBodyMaterial,
];

const categoryList = [
  {
    nameCategory: "Ноутбуки та комп'ютери",
    nameCategoryImg: "uploads/catalog/laptop.png",
    nameListCategory: [
      {
        subNameCategory: "Ноутбуки",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Asus",
            characteristics: optionsLaptop,
          },
          {
            titleSubNameListCategory: "Acer",
            characteristics: optionsLaptop,
          },
          {
            titleSubNameListCategory: "HP (Hewlett Packard)",
            characteristics: optionsLaptop,
          },
          {
            titleSubNameListCategory: "Lenove",
            characteristics: optionsLaptop,
          },
          {
            titleSubNameListCategory: "Dell",
            characteristics: optionsLaptop,
          },
          {
            titleSubNameListCategory: "Apple",
            characteristics: optionsLaptop,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для ноутбуків і ПК",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Флеш пам'ять USB",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Підставки та столики для ноутбуків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Веб-камери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для планшетів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Чохли та клавіатури для планшетів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Електронні книги",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Аксесуари для електронних книг",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Комплектуючі",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеокарта",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Жорсткі диски",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Процесори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "SSD",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "HDD",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "ОЗП",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Материнські плати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Блоки живлення",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корпуси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джерела безперебійного живлення",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Системне охолодження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стабілізатори напруги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Оптичні приводи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Звукові карти",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Комп'ютери",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Монітори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Миші",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комплект клавіатура + миша",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мереживе сховище (NAS)",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Оргтехніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "БФП/Принтери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Проектори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Витратні матеріали для принтерів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Телефонні апарати",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Програмне забезпечення",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Операційні системи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Офісні програми",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Антивіруси",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Товари для геймерів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Play Station",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігрові консолі та приставки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джойстики та аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігрові поверхні",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Мережеве обладнання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Патч-корди",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Маршрутизатори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "IP-камери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комутатори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бездротові точки доступу",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Смартфони, ТВ і електроніка",
    nameCategoryImg: "uploads/catalog/smartphone.png",
    nameListCategory: [
      {
        subNameCategory: "Телефони",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Смартфони",
            characteristics: optionsSmartphone,
          },
          {
            titleSubNameListCategory: "Кнопкові телефони",
            characteristics: optionsSmartphone,
          },
          {
            titleSubNameListCategory: "Офісні телефони",
            characteristics: optionsSmartphone,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для мобільних телефонів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Картри пам'яті",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Чохли для мобільних телефонів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Монопади для селфі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гарнітури",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "3D і VR окуляри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тримачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кабелі синхронізації",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гарнітури Bluetooth",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мобільний зв'язок та інтернет",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Телевізори та аксесуари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Телевізори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Підставки кріплення для ТВ",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "ТВ-антени та ресивери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Універсальні пульти ДК",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари для ТВ",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Фото та відео",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Фотоапарати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Відеокамери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Об'єктиви",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Екшн-камери й аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Акумулятори та батарейки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Штативи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зарядні пристрої",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спалахи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Акумелятори для фото та відеокамер",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Студійне обладнання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сумки та чохли",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аудіо та домашні кінотеатри",
        subNameListCategory: [
          {
            titleSubNameListCategory: "DVD/HD-медіаплеєри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Музичні центри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Домашні кінотеатри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Активні акустичні системи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Акустика Hi-Fi",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "AV-ресивер",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Проекційне обладнання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Проектори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Екрани",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Портативна електроніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Планшети",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Навушники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електронні книги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Розумні годинники браслети",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фітнес-браслети",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "MP3-плеєри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Диктофони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивні годинники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари для пленшетів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Велокомп'ютери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Портативна акустика",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зовнішні жорсткі диски",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Автоелектроніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеореєстратори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "GPS-навігатори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автозвук",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автосигналізації",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Товари для геймерів",
    nameCategoryImg: "uploads/catalog/gamepad.png",
    nameListCategory: [
      {
        subNameCategory: "Play Station",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Ігрові приставки PlayStation 5",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігрові приставки PlayStation 4",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігрові приставки PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Геймпади PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шоломи VR PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гарнітури PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігри для PlayStation",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Підписки PS Plus",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Поповнення гаманця PS Store",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Ігрові комп'ютери",
        subNameListCategory: [
          {
            titleSubNameListCategory: "ARTLINE",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "QUBE",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Cobra",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Комплектуючі для геймерів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеокарти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Процесори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Оперативна пам'ять",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Материнські плати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Жорсткі диски",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Блоки живлення",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Система охолодження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корпуси",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Ігрова перефирія",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Навушники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Миші",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Клавіатури",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Маніпулятори, джойстики",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Геймерські крісла",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комп'ютерні столи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Геймерські рюкзаки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Атрибутика й сувеніри",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Браслети",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Брелки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гаманці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Подушки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Чашки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фігурки і статуетки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Одяг для геймерів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кепки і головні убори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Рюкзаки та сумки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "М'які іграшки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Падарункові набори для геймерів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Картинки і постери",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Побутова техніка",
    nameCategoryImg: "uploads/catalog/electric-appliance.png",
    nameListCategory: [
      {
        subNameCategory: "Велика побутова техніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Пральні машини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Холодильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Морозильні камери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Плити",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Посудомийні машини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сушильні автомати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Винні шафи",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Вбудована техніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Варильні поверхні",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Духові шафи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Витяжки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вбудовані посудомийні машини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вбудовані холодильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вбудовані мікрохвильові печі",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Кліматична техніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Кондиціонери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вентилятори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Водонагрівачі (бойлери)",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зволожувачі повітря",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Очищувачі повітря",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Осушувачі повітря",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Кухня",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Мультиварки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мікрохвильві печі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кавоварки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Блендери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електрочайники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "М'ясорубки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Соковичавниці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Грилі та електрошашличниці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кухові комбайни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бутербродниці та вафульниці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Хлібопічки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Міксери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тостери",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Сантехніка та ванна кімната",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Змішувачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ванни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кухонні мийки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сифони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гідромасажні бокси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Унітази",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Душові гарнітури",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд та прибирання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Пилососи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Роботи-пилососи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Швейна техніка та аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Праски та прасувальні системи",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Побутова хімія",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Засоби для прання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для миття посуду",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для прибирання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для догляду за технікою",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Для краси та здоров'я",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Машинки для стриження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тримери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Прилади для укладання волосся",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Епілятори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фотоепілятори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електробритви для чоловіків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фени",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тонометри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зубні щітки та іригатори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ваги підлогові",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Термометри для тіла",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Товари для дому",
    nameCategoryImg: "uploads/catalog/shelf.png",
    nameListCategory: [
      {
        subNameCategory: "Меблі",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Крісла",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комп'ютерні столи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стільці та табурети",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Безкаркасні меблі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садові меблі",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Домашній текстиль",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Постільна білизна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Матраци",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ковдри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Подушки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Наматрацники та підматрацники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пледи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Рушники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Покривали",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Системи охорони і безпеки",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Домофони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комплекти відеоспостереження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комплекти сигналізації",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Відеодомофони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стабілізатори напруги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Інвертори",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Посуд",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Для приготування їжі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Посуд для сервірування",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кухонні аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кухонні ножі та приладдя",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зберігання та пакування",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Інветар для дому та офісу",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Прання та прасування",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Інструменти для прибирання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зберігання та організація простору",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Відра та корзини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Господарський інвентар",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Драбини",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Господарські товари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Туалетний папір",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пакети для сміття",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Серветки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Побутова хімія",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Засоби для прання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для посудомойних машин",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для чищення ванн",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Освітлення",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Лампочки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільні лампи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Люстри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вуличне освітлення",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільні світильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стельові світильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Точкові світильники",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Лічильники",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Захист від перепадів напруги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники води",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники газу",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники електроенергії",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Годинники",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Настінні годинники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільні годинники",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Товари для тварин",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Корм для тварин",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Товари для кішок",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Товари для собак",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Інструменти та автотовари",
    nameCategoryImg: "uploads/catalog/machine-drill.png",
    nameListCategory: [
      {
        subNameCategory: "Інструменти",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Шурупокрути та електровикрутки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Болгарки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Перфоратори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дрилі та міксири",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пили та плиткорізи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фарбопульт",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електролобзики",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вимірувальна техніка",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фрезери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Багатофункційні інструменти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електрорубанки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Будівельні фени",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Витратні матеріали та приладдя",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Свердла",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Диски",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Біти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бури",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пиляльні полотна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фрези",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Обладнання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Зварувальне обладнання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Генератори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стабілізатори напруги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Універсальні мийки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бетономішалки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Компресори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Теплові гармати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Точильні верстати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вантажопідйомне обладнання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Інвентори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Промислові пилососи",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Ручний інструмент",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Набори інструментів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Скрині та сумки для інструментів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ключі, знімачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Викрутки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вимірувально-розмільчаний інструмент",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шарнірно-губцевий інструмент",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Електромонтажне обладнання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Розетки та вимикачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кабельно-провідникова продукція",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Автотовари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Автозапчастини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шини",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автомобільні диски",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Відеореєстратори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мастили й оливи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "GPS-навігатори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автокомпресори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Головні пристрої",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пускозарядні пристрої",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автоприладдя",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автосигналізація",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Техдопомога",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Домкрати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автоакустика",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Паркувальні системи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автохімія",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "FM-трансмітери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автолампи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автокосметика",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Радар-детектори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Штатні головні пристрої",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дефлектори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Автофарби",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електрообладнання автомобілів",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Сантехніка та ремонт",
    nameCategoryImg: "uploads/catalog/bathtub.png",
    nameListCategory: [
      {
        subNameCategory: "Ванни, бокси, душові",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Ванни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гідромасажні бокси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Душові гарнітури",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Душові кабіни та стінки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бойлери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Панелі для ванн",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Душові двері та перегородки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Мийки, змішувачі, сифони",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Змішувачі",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Кераміка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Унітази",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Інсталяції та комплектуючі",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Інсталяції для унітазу",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Інсталяції для біде",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кнопки для змиву",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Сушильники для рушників і радіатори",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Сушильники для рушників",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Радіатори",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Інструменти",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Болгарки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Перфоратори",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Обладнання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Генератори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зварувальне обладнання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Промислові пилососи",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Ручний інструмент",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Набори інструментів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ключі, знімачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Скрині та сумки для інструментів",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Освітлення",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Люстри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільно-стельові світильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Точкові світильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бра та настільні світильники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільні лампи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Торшери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Світильники для ванної",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі настільні лампи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вуличне освітлення",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лампочки та аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Офісно-промислове освітлення",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Лічильники",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Захист від перепадів напруги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники води",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники газу",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лічильники електроенергії",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Меблі для ванної кімнати",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Тумби",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дзеркала",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пенали",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Будівельні матеріали",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Покрівля та водостік",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Дача, сад і город",
    nameCategoryImg: "uploads/catalog/gardening-tools.png",
    nameListCategory: [
      {
        subNameCategory: "Садова техніка",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Тримери та мотокоси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ланцюгові пили",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Газонокосарки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Культиватори та мотоблоки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Повітродуви",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари для садової техніки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садові подрібнювачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Двигуни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Снігоприбиральна техніка та інветар",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Сиситеми поливання",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Насоси та помпи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шланги",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Коннектори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зрошувачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Насадки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Садовий інвентар",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Обприскувачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садове приладдя",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ручний садовий інструмент",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тачки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кущорізи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Теплиці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сітки та накривні матеріали",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аератори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садові огорожі",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Насіння та добрива",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Насіння овочів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Насіння газонних трав",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Насіння квітів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Насіння пряних і зелених культур",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Субстрати і ґрунти для рослин",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Добрива",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Саджанці",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Cаджанці троянд",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Cаджанці дерев",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Садові меблі та декор",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Гойдалки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садові павільйони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Садовий декор",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шезлонги",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Корм для тварин",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Корм для собак",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корм для кішок",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корм для птахів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корм для гризунів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Корм для риб",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд за вихованцем",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Посуд для тварин",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Іграшки для тварин",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Наповнювачі туалетів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Повідці для тварин",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Інвентар для дому",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Вазони",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Драбини, підмостки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Прасувальні дошки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Для прибирання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Контейнери для зберігання",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Спорт і захоплення",
    nameCategoryImg: "uploads/catalog/sport.png",
    nameListCategory: [
      {
        subNameCategory: "Тренажери та фітнес",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Бігові доріжки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Орбітреки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фітнес та аеробіка",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Велотренажери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гантелі, диски, грифи, замки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шведські стінки та турніки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Спортивне харчування",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Протеїн",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вітаміни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Амінокислоти",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Велисипеди та аксесуари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Велосипеди",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари для велосипедів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Комплектуючі для велосипедів",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Риболовля",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Човни й аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вудлища",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Котушки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Туризм і кемпінг",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Намети й аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Рюкзаки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Складані меблі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Надувні меблі й аксесуари",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для активного відпочинку",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Термопродукція",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Рації",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ножі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мультиінструмент",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Спортивна стрільба",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Пневматика",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спорядження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тактичний одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Страйкбол (AirSoft)",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Ігрові види спорту",
        subNameListCategory: [
          {
            titleSubNameListCategory: "М'ячі для командних ігор",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ракетки для настільного тенісу",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Бідмінтон і спідмінтон",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Басейн і аквафітнес",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Ласти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аксесуари для басейну та аквафітнесу",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Радіокеровані моделі",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Квадрокоптери",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Музичні інструменти",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Гітари та обладнання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ударні",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Духові",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Оптика",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Телескопи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мікроскопи",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Електротранспорт",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Гіроскутери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гіроборди",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Одяг, взуття та прикраси",
    nameCategoryImg: "uploads/catalog/fashion.png",
    nameListCategory: [
      {
        subNameCategory: "Одяг для жінок",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Верхній одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивний одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Плаття",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джинси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивні костюми",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Футболки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спідня білизна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Термобілизна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Нічний і домашній одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Панчішно-шкарпеткові вироби",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Жіноче взуття",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Кросівки та кеди",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Туфлі та балетки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Черевики",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гумові чоботи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кімнатне взуття",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шльопанці і в'єтнамки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для жінок",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Сумки і рюкзаки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Головні убори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Парасолі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гаманці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сонцезахисні окуляри",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Одяг для чоловіків",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Верхній одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Футболки та сорочки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Світшоти та худі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джинси",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивні костюми",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спідня білизна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Термобілизна",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Нічний і домашній одяг",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шкарпетки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Чоловіче взуття",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Кросівки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кеди",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Туфлі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Черевики",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кімнатне взуття",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шльопанці і в'єтнамки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксусуари для чоловіків",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Рюкзаки та сумки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Парасолі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Головні убори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ремені",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Портмоне",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дитячий одяг",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Верхній одяг для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Футболки та водолазки для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джинси та штани для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивні костюми для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Худі та світшоти для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Піжами для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спідня білизна для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Верхній одяг для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Футболки та водолазки для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Джинси та лосини для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сукні та спідниці для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Спортивні костюми для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Піжами для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Нижня білизна для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Теплі комбінезони для малюків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Чоловічки для малюків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Боді для малюків",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дитяче взуття",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Взуття для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Взуття для хлопчиків",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксусуари для дітей",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Шапки та шарфи",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шкарпетки і колготки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Рюкзаки та сумки",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Краса та здоров'я",
    nameCategoryImg: "uploads/catalog/skin-care.png",
    nameListCategory: [
      {
        subNameCategory: "Техніка для краси та здоров'я",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Машинки для стриження",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Триммери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електробритви",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Фени",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Епілятори",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дерматокосметика",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Антивіковий догляд",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Засоби для гоління",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Станок для гоління",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Лезо для бритви",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Косметика для гоління",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Особиста гігієна",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Туалетний папір",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Підгузки для дорослих",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Вологі серветки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд за обличчям",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Крем",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Маска для обличчя",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Міцелярна вода",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засіб для вмивання",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Патчі",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд за тілом",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Дезодоранти і антиперспіранти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Засоби для інтимної гігієни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Догляд за руками",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ефірні масла",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд за волоссям",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Шампуні",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Олія для волосся",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Кондиціонери",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Набори по догляду за волоссям",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Маски для волосся",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Парфуми",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Чоловіча парфумерія",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Жіноча парфумерія",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Аромати для дому",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Фарбування волосся",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Фарба для волосся",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тонуючі засоби",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Догляд за порожниною рта",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Зубна паста",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Зубні щітки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Електричні зубні щітки і іррігатори",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Декоративна косметика",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Лак для нігтів",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Гель-лак",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Губна помада",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Блиск для губ",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Туш для вій",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тіні для вій",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Олівці для очей",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Тональні засоби",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пудра",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Для манікюру",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Для макіяжу",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Для волосся",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
  {
    nameCategory: "Дитячі товари",
    nameCategoryImg: "uploads/catalog/children.png",
    nameListCategory: [
      {
        subNameCategory: "Іграшки",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Дитячі конструктори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Інтерактивні іграшки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Настільні ігри",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Творчість",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ігрові набори",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Радіокеровані іграшки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Ляльки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Іграшки для малюків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "М'які іграшки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Іграшкові машинки та техніка",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Іграшкова зброя",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дитяче харчування",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Дитячі суміші",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Стільчики для годування",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пляшечки для годування та аксесуари",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі кухонні комбайни",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі каші",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитяче пюре",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячий посуд",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пустушки",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Прогулянки й активний відпочинок",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Електротранспорт",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі коляски",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі автокрісла",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі велосипеди",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі самокати",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дивомобілі, ходунки, гойдалки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Роликові ковзани",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Гігієна та догляд за дитиною",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Підгузки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі серветки, хусточки та рушники",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пелюшки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Косметика для догляду для дітей",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі ванночки та аксесуари",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дитячий одяг, взуття та аксесуари",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Одяг для хлопчиків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Одяг для дівчаток",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Одяг для малюків",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитяче взуття",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Шкільне приладдя",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Шкільні набори та ранці",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Шкільні пенали",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Сумки для взуття",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Дитяча кімната",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Радіоняньки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Парти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Манежі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Мобілі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі ліжечка",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Розвиток і творчість",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Творчість",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory:
              "Розвивальні центри, килимки, крісла-качалки",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Пазли",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячi музичні інструменти",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Набори для наукових досліджень",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Дитячі комп'ютери",
            characteristics: optionsDevelop,
          },
        ],
      },
      {
        subNameCategory: "Товари для мам",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Молоковідсмоктувачі",
            characteristics: optionsDevelop,
          },
          {
            titleSubNameListCategory: "Косметика для мам",
            characteristics: optionsDevelop,
          },
        ],
      },
    ],
  },
];

module.exports.categoryList = categoryList;
