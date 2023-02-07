const options = require("../db/options");

module.exports.categoryList_characteristics = [
  {
    nameCategory: "Ноутбуки та комп'ютери",
    nameListCategory: [
      {
        subNameCategory: "Ноутбуки",
        characteristics: options.optionsLaptop,
        permissionUse: true,
      },
      {
        subNameCategory: "Аксесуари для ноутбуків і ПК",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Флеш пам'ять USB",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Підставки та столики для ноутбуків",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Веб-камери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для планшетів",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Чохли та клавіатури для планшетів",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Електронні книги",
        characteristics: options.optionsDevelop,
        permissionUse: false,
      },
      {
        subNameCategory: "Комплектуючі",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеокарта",
            characteristics: options.optionsVideocards,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Процесори",
            characteristics: options.optionsCPU_PC,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "SSD",
            characteristics: options.optionsSSD,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "HDD",
            characteristics: options.optionsHDD,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "ОЗП",
            characteristics: options.optionsRAM,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Материнські плати",
            characteristics: options.optionsMotherboards,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Блоки живлення",
            characteristics: options.optionsPSU,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Корпуси",
            characteristics: options.optionsCases,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Системне охолодження",
            characteristics: options.optionsCoolers,
            permissionUse: true,
          },
        ],
      },
      {
        subNameCategory: "Комп'ютери",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Монітори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Миші",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Комплект клавіатура + миша",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Мереживе сховище (NAS)",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Оргтехніка",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "БФП/Принтери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Проектори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Витратні матеріали для принтерів",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Телефонні апарати",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Програмне забезпечення",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Операційні системи",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Офісні програми",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Антивіруси",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Товари для геймерів",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Play Station",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігрові консолі та приставки",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Джойстики та аксесуари",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігрові поверхні",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Мережеве обладнання",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Патч-корди",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Маршрутизатори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "IP-камери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Комутатори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Бездротові точки доступу",
            characteristics: options.optionsDevelop,
            permissionUse: false,
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
        characteristics: options.optionsSmartphone,
        permissionUse: false,
      },
      {
        subNameCategory: "Аксесуари для мобільних телефонів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Картри пам'яті",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Чохли для мобільних телефонів",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Монопади для селфі",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Гарнітури",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "3D і VR окуляри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Тримачі",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі синхронізації",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Гарнітури Bluetooth",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Мобільний зв'язок та інтернет",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Телевізори та аксесуари",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Телевізори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Підставки кріплення для ТВ",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "ТВ-антени та ресивери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Універсальні пульти ДК",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Аксесуари для ТВ",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Фото та відео",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Фотоапарати",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Відеокамери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Об'єктиви",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Екшн-камери й аксесуари",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акумулятори та батарейки",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Штативи",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Зарядні пристрої",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Спалахи",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акумелятори для фото та відеокамер",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Студійне обладнання",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Сумки та чохли",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Аудіо та домашні кінотеатри",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "DVD/HD-медіаплеєри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Музичні центри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Домашні кінотеатри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Активні акустичні системи",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акустика Hi-Fi",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "AV-ресивер",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Проекційне обладнання",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Проектори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Екрани",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Портативна електроніка",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Планшети",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Навушники",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Електронні книги",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Розумні годинники браслети",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Фітнес-браслети",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "MP3-плеєри",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Диктофони",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Спортивні годинники",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Аксесуари для пленшетів",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Велокомп'ютери",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Портативна акустика",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Зовнішні жорсткі диски",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Автоелектроніка",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеореєстратори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "GPS-навігатори",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Автозвук",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Автосигналізації",
            characteristics: options.optionsDevelop,
            permissionUse: false,
          },
        ],
      },
    ],
  },
];
