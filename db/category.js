const options = require("./options");

module.exports.CATEGORY = [
  {
    nameCategory: "Ноутбуки та комп'ютери",
    nameListCategory: [
      {
        subNameCategory: "Ноутбуки",
        characteristics: options.Laptop,
        permissionUse: true,
      },
      {
        subNameCategory: "Аксесуари для ноутбуків і ПК",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Флеш пам'ять USB",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Підставки та столики для ноутбуків",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Веб-камери",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.Develop,
            permissionUse: false,
          },
        ],
      },
      {
        subNameCategory: "Електронні книги",
        characteristics: options.Develop,
        permissionUse: false,
      },
      {
        subNameCategory: "Комплектуючі",
        permissionUse: false,
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеокарта",
            characteristics: options.Videocards,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Процесори",
            characteristics: options.CPU_PC,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "SSD",
            characteristics: options.SSD,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "HDD",
            characteristics: options.HDD,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "ОЗП",
            characteristics: options.RAM,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Материнські плати",
            characteristics: options.Motherboards,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Блоки живлення",
            characteristics: options.PSU,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Корпуси",
            characteristics: options.Cases,
            permissionUse: true,
          },
          {
            titleSubNameListCategory: "Системне охолодження",
            characteristics: options.Coolers,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Миші",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Комплект клавіатура + миша",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Мереживе сховище (NAS)",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Проектори",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Витратні матеріали для принтерів",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Телефонні апарати",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Офісні програми",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Антивіруси",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігрові консолі та приставки",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Джойстики та аксесуари",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігри",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Ігрові поверхні",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Маршрутизатори",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "IP-камери",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Комутатори",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Бездротові точки доступу",
            characteristics: options.Develop,
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
        characteristics: options.Smartphone,
        permissionUse: false,
      },
      {
        subNameCategory: "Аксесуари для мобільних телефонів",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Картри пам'яті",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Чохли для мобільних телефонів",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Монопади для селфі",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Гарнітури",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "3D і VR окуляри",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Тримачі",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі синхронізації",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Гарнітури Bluetooth",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Мобільний зв'язок та інтернет",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Підставки кріплення для ТВ",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "ТВ-антени та ресивери",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Універсальні пульти ДК",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Аксесуари для ТВ",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Відеокамери",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Об'єктиви",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Екшн-камери й аксесуари",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акумулятори та батарейки",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Штативи",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Зарядні пристрої",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Спалахи",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акумелятори для фото та відеокамер",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Студійне обладнання",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Сумки та чохли",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Музичні центри",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Домашні кінотеатри",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Активні акустичні системи",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Акустика Hi-Fi",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "AV-ресивер",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Екрани",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Навушники",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Електронні книги",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Розумні годинники браслети",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Фітнес-браслети",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "MP3-плеєри",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Диктофони",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Спортивні годинники",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Аксесуари для пленшетів",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Велокомп'ютери",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Портативна акустика",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Зовнішні жорсткі диски",
            characteristics: options.Develop,
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
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "GPS-навігатори",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Автозвук",
            characteristics: options.Develop,
            permissionUse: false,
          },
          {
            titleSubNameListCategory: "Автосигналізації",
            characteristics: options.Develop,
            permissionUse: false,
          },
        ],
      },
    ],
  },
];
