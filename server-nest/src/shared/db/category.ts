import { options } from "./options.js";

export const CATEGORY: any[] = [
  {
    nameCategory: "Ноутбуки та комп'ютери",
    nameListCategory: [
      {
        subNameCategory: "Ноутбуки",
        characteristics: options.Laptop,
        navigate_link: "notebooks",
      },
      {
        subNameCategory: "Аксесуари для ноутбуків і ПК",
        navigate_link: "computers-notebooks-accessories",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Флеш пам'ять USB",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Сумки та рюкзаки для ноутбуків",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Підставки та столики для ноутбуків",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Веб-камери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Аксесуари для планшетів",
        navigate_link: "tablet-covers",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Чохли та клавіатури для планшетів",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Електронні книги",
        characteristics: options.Develop,
        navigate_link: "e-books",
      },
      {
        subNameCategory: "Комплектуючі",
        navigate_link: "computer-components",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеокарта",
            characteristics: options.Videocards,
            navigate_link: "videocards",
          },
          {
            titleSubNameListCategory: "Процесори",
            characteristics: options.CPU_PC,
            navigate_link: "cpu",
          },
          {
            titleSubNameListCategory: "SSD",
            characteristics: options.SSD,
            navigate_link: "ssd",
          },
          {
            titleSubNameListCategory: "HDD",
            characteristics: options.HDD,
            navigate_link: "hdd",
          },
          {
            titleSubNameListCategory: "ОЗП",
            characteristics: options.RAM,
            navigate_link: "ram",
          },
          {
            titleSubNameListCategory: "Материнські плати",
            characteristics: options.Motherboards,
            navigate_link: "motherboards",
          },
          {
            titleSubNameListCategory: "Блоки живлення",
            characteristics: options.PSU,
            navigate_link: "psu",
          },
          {
            titleSubNameListCategory: "Корпуси",
            characteristics: options.Cases,
            navigate_link: "cases",
          },
          {
            titleSubNameListCategory: "Системне охолодження",
            characteristics: options.Coolers,
            navigate_link: "coolers",
          },
        ],
      },
      {
        subNameCategory: "Комп'ютери",
        navigate_link: "computers",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Монітори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Миші",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Комплект клавіатура + миша",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Мереживе сховище (NAS)",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Оргтехніка",
        navigate_link: "office-equipment",
        subNameListCategory: [
          {
            titleSubNameListCategory: "БФП/Принтери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Проектори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Витратні матеріали для принтерів",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Телефонні апарати",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Програмне забезпечення",
        navigate_link: "soft",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Операційні системи",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Офісні програми",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Антивіруси",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Товари для геймерів",
        navigate_link: "game-zone",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Play Station",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Ігрові консолі та приставки",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Джойстики та аксесуари",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Ігри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Ігрові поверхні",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Мережеве обладнання",
        navigate_link: "network-equipment",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Патч-корди",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Маршрутизатори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "IP-камери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Комутатори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Бездротові точки доступу",
            characteristics: options.Develop,
            navigate_link: "link",
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
        navigate_link: "mobile-smartphones",
      },
      {
        subNameCategory: "Аксесуари для мобільних телефонів",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Універсальні мобільні батареї",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Картри пам'яті",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Чохли для мобільних телефонів",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Захисні плівки та скло",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Монопади для селфі",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Гарнітури",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "3D і VR окуляри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Тримачі",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Кабелі синхронізації",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Гарнітури Bluetooth",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Мобільний зв'язок та інтернет",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Телевізори та аксесуари",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Телевізори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Підставки кріплення для ТВ",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Кабелі та перехідники",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "ТВ-антени та ресивери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Універсальні пульти ДК",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Аксесуари для ТВ",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Фото та відео",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Фотоапарати",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Відеокамери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Об'єктиви",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Екшн-камери й аксесуари",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Акумулятори та батарейки",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Штативи",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Зарядні пристрої",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Спалахи",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Акумелятори для фото та відеокамер",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Студійне обладнання",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Сумки та чохли",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Аудіо та домашні кінотеатри",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "DVD/HD-медіаплеєри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Музичні центри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Домашні кінотеатри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Активні акустичні системи",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Акустика Hi-Fi",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "AV-ресивер",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Проекційне обладнання",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Проектори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Екрани",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Портативна електроніка",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Планшети",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Навушники",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Електронні книги",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Розумні годинники браслети",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Фітнес-браслети",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "MP3-плеєри",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Диктофони",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Спортивні годинники",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Аксесуари для пленшетів",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Велокомп'ютери",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Портативна акустика",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Зовнішні жорсткі диски",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
      {
        subNameCategory: "Автоелектроніка",
        navigate_link: "link",
        subNameListCategory: [
          {
            titleSubNameListCategory: "Відеореєстратори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "GPS-навігатори",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Автозвук",
            characteristics: options.Develop,
            navigate_link: "link",
          },
          {
            titleSubNameListCategory: "Автосигналізації",
            characteristics: options.Develop,
            navigate_link: "link",
          },
        ],
      },
    ],
  },
];
