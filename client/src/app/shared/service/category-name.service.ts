import { Injectable } from '@angular/core';
import { Category } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoryNameService {
  constructor() {}

  test = [
    {
      nameCategory: 'String Name',
      nameListCategory: [
        {
          subNameCategory: 'String Name',
          subNameListCategory: [{ titleSubNameListCategory: 'String Name' }],
        },
        {
          subNameCategory: 'String Name',
          subNameListCategory: [{ titleSubNameListCategory: 'String Name' }],
        },
      ],
    },
  ];

  categoryList: Category[] = [
    {
      nameCategory: 'Допомога',
      nameListCategory: [
        {
          subNameCategory: 'Пропоную допомогу',
          subNameListCategory: [
            { titleSubNameListCategory: 'Ліки та Гігієнічні засоби' },
            { titleSubNameListCategory: 'Житло' },
            { titleSubNameListCategory: 'Транспорт' },
            { titleSubNameListCategory: 'Для дітей' },
            { titleSubNameListCategory: 'Одяг та взуття' },
            { titleSubNameListCategory: 'Для тварин' },
            { titleSubNameListCategory: 'Медична допомога' },
            { titleSubNameListCategory: 'Їжа / Продукти' },
            { titleSubNameListCategory: 'Інше' },
          ],
        },
        {
          subNameCategory: 'Потрібна допомога',
          subNameListCategory: [
            { titleSubNameListCategory: 'Ліки та Гігієнічні засоби' },
            { titleSubNameListCategory: 'Житло' },
            { titleSubNameListCategory: 'Транспорт' },
            { titleSubNameListCategory: 'Для дітей' },
            { titleSubNameListCategory: 'Одяг та взуття' },
            { titleSubNameListCategory: 'Для тварин' },
            { titleSubNameListCategory: 'Медична допомога' },
            { titleSubNameListCategory: 'Їжа / Продукти' },
            { titleSubNameListCategory: 'Інше' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Дитячий світ',
      nameListCategory: [
        {
          subNameCategory: 'Дитячий одяг',
          subNameListCategory: [
            { titleSubNameListCategory: 'Одяг для хлопчиків' },
            { titleSubNameListCategory: 'Одяг для дівчаток' },
            { titleSubNameListCategory: 'Одяг для новонароджених' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Нерухомість',
      nameListCategory: [
        {
          subNameCategory: 'Квартира',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж квартик' },
            { titleSubNameListCategory: 'Довгострокова оренда квартик' },
          ],
        },
        {
          subNameCategory: 'Кімнати',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж кімнат' },
            { titleSubNameListCategory: 'Довгострокова оренда кімнат' },
          ],
        },
        {
          subNameCategory: 'Будинки',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж будинків' },
            { titleSubNameListCategory: 'Довгострокова оренда будинків' },
          ],
        },
        {
          subNameCategory: 'Земля',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж землі' },
            { titleSubNameListCategory: 'Оренда землі' },
          ],
        },
        {
          subNameCategory: 'Комерційна нерухомість',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж комерційної нерухомості' },
            { titleSubNameListCategory: 'Оренда комерційної нерухомості' },
          ],
        },
        {
          subNameCategory: 'Гаражі, парковки',
          subNameListCategory: [
            { titleSubNameListCategory: 'Продаж гаражів, парковок' },
            { titleSubNameListCategory: 'Оренда гаражів, парковок' },
          ],
        },
        {
          subNameCategory: 'Подобова оренда житла',
          subNameListCategory: [
            { titleSubNameListCategory: 'Будинки подобово, погодинно' },
            { titleSubNameListCategory: 'Квартири подобово, погодинно' },
            { titleSubNameListCategory: 'Кімнати подобово, погодинно' },
            { titleSubNameListCategory: 'Голоті подобово, погодинно' },
            { titleSubNameListCategory: 'Хостели подобово, погодинно' },
            { titleSubNameListCategory: 'Пропозиції Туроператорів' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Авто',
      nameListCategory: [
        {
          subNameCategory: 'Легкові автомобілі',
          subNameListCategory: [
            { titleSubNameListCategory: 'Acura' },
            { titleSubNameListCategory: 'Alfa Romeo' },
            { titleSubNameListCategory: 'Aston Martin' },
            { titleSubNameListCategory: 'Audi' },
            { titleSubNameListCategory: 'Bentley' },
            { titleSubNameListCategory: 'BMW' },
            { titleSubNameListCategory: 'BMW-Alpina' },
            { titleSubNameListCategory: 'Brilliance' },
            { titleSubNameListCategory: 'Buick' },
            { titleSubNameListCategory: 'BYD' },
            { titleSubNameListCategory: 'Cadillac' },
            { titleSubNameListCategory: 'Chana' },
            { titleSubNameListCategory: 'Chery' },
            { titleSubNameListCategory: 'Chevrolet' },
            { titleSubNameListCategory: 'Chrysler' },
            { titleSubNameListCategory: 'Citroen' },
            { titleSubNameListCategory: 'Dacia' },
            { titleSubNameListCategory: 'Daewo' },
            { titleSubNameListCategory: 'Daihatsu' },
            { titleSubNameListCategory: 'Dodge' },
            { titleSubNameListCategory: 'FAW' },
            { titleSubNameListCategory: 'Ferrari' },
            { titleSubNameListCategory: 'Fiat' },
            { titleSubNameListCategory: 'Ford' },
            { titleSubNameListCategory: 'Geely' },
            { titleSubNameListCategory: 'GMC' },
            { titleSubNameListCategory: 'Great Wall' },
            { titleSubNameListCategory: 'Groz' },
            { titleSubNameListCategory: 'Honda' },
            { titleSubNameListCategory: 'Hummer' },
            { titleSubNameListCategory: 'Hyudnai' },
            { titleSubNameListCategory: 'Infiniti' },
            { titleSubNameListCategory: 'Isuzu' },
            { titleSubNameListCategory: 'Iveco' },
            { titleSubNameListCategory: 'JAC' },
            { titleSubNameListCategory: 'Jaguar' },
            { titleSubNameListCategory: 'Jeep' },
            { titleSubNameListCategory: 'Kia' },
            { titleSubNameListCategory: 'Lamborghini' },
            { titleSubNameListCategory: 'Lancia' },
            { titleSubNameListCategory: 'Land Rover' },
            { titleSubNameListCategory: 'Lexus' },
            { titleSubNameListCategory: 'Lifan' },
            { titleSubNameListCategory: 'Lincoln' },
            { titleSubNameListCategory: 'Lotus' },
            { titleSubNameListCategory: 'Maserati' },
            { titleSubNameListCategory: 'Maybach' },
            { titleSubNameListCategory: 'McLaren' },
            { titleSubNameListCategory: 'Mercedes-Benz' },
            { titleSubNameListCategory: 'Mercury' },
            { titleSubNameListCategory: 'MG' },
            { titleSubNameListCategory: 'MINI' },
            { titleSubNameListCategory: 'Mitubishi' },
            { titleSubNameListCategory: 'Nissan' },
            { titleSubNameListCategory: 'Opel' },
            { titleSubNameListCategory: 'Peugeot' },
            { titleSubNameListCategory: 'Pontiac' },
            { titleSubNameListCategory: 'Porsche' },
            { titleSubNameListCategory: 'Proton' },
            { titleSubNameListCategory: 'Ram' },
            { titleSubNameListCategory: 'Ravon' },
            { titleSubNameListCategory: 'Renault' },
            { titleSubNameListCategory: 'Rolls-Royce' },
            { titleSubNameListCategory: 'Roewe' },
            { titleSubNameListCategory: 'Rover' },
            { titleSubNameListCategory: 'Saab' },
            { titleSubNameListCategory: 'Samand' },
            { titleSubNameListCategory: 'Samsung' },
            { titleSubNameListCategory: 'Seat' },
            { titleSubNameListCategory: 'Shelby' },
            { titleSubNameListCategory: 'Skoda' },
            { titleSubNameListCategory: 'SsangYong' },
            { titleSubNameListCategory: 'Subaru' },
            { titleSubNameListCategory: 'Suzuki' },
            { titleSubNameListCategory: 'TATA' },
            { titleSubNameListCategory: 'Tesla' },
            { titleSubNameListCategory: 'Toyota' },
            { titleSubNameListCategory: 'Volkswagen' },
            { titleSubNameListCategory: 'Volvo' },
            { titleSubNameListCategory: 'Wartburg' },
            { titleSubNameListCategory: 'ZX' },
            { titleSubNameListCategory: 'Інші' },
          ],
        },
        {
          subNameCategory: 'Вантажівки та спецтехніка з Польщі',
          subNameListCategory: [
            { titleSubNameListCategory: 'Вантажні автомобілі з Польщі' },
            { titleSubNameListCategory: 'Причепи з Польщі' },
            { titleSubNameListCategory: 'Сільгостехніка з Польщі' },
            { titleSubNameListCategory: 'Будівельна техніка з Польщі' },
          ],
        },
        {
          subNameCategory: 'Мото',
          subNameListCategory: [
            { titleSubNameListCategory: 'Мотоцикли' },
            { titleSubNameListCategory: 'Мопеди / скутери' },
            { titleSubNameListCategory: 'Квадроцикли' },
            { titleSubNameListCategory: 'Електросамокати' },
            { titleSubNameListCategory: 'Електроквадроцикли' },
            { titleSubNameListCategory: 'Баггі' },
            { titleSubNameListCategory: 'Картинг' },
            { titleSubNameListCategory: 'Мото - інше' },
          ],
        },
        {
          subNameCategory: 'Спецтехніка',
          subNameListCategory: [
            { titleSubNameListCategory: 'Бульдозери / трактори' },
            { titleSubNameListCategory: 'Комунальна техніка' },
            { titleSubNameListCategory: 'Навантажувачі' },
            { titleSubNameListCategory: 'Самоскиди' },
            { titleSubNameListCategory: 'Будівальна техніка' },
            { titleSubNameListCategory: 'Екскаватори' },
            { titleSubNameListCategory: 'Автовишки' },
            { titleSubNameListCategory: 'Мінінавантажувач' },
            { titleSubNameListCategory: 'Бітонозмішувачі' },
            { titleSubNameListCategory: 'Бітононасоси' },
            { titleSubNameListCategory: 'Бурова установка' },
            { titleSubNameListCategory: 'Сміттєвоз' },
            { titleSubNameListCategory: 'Лісозаготівельна техніка' },
            { titleSubNameListCategory: 'Автогрейдер' },
            { titleSubNameListCategory: 'Асвальтоукладчик' },
            { titleSubNameListCategory: 'Дорожній каток' },
            { titleSubNameListCategory: 'Всюдоходи' },
            { titleSubNameListCategory: 'Обладнання для спецтехніки' },
            { titleSubNameListCategory: 'Інша спецтехніка' },
          ],
        },
        {
          subNameCategory: 'Сільгосптехніка',
          subNameListCategory: [
            { titleSubNameListCategory: 'Трактор сільськогосподарський' },
            { titleSubNameListCategory: 'Мотоблок' },
            { titleSubNameListCategory: 'Мотокультиватор' },
            { titleSubNameListCategory: 'Міні-трактор' },
            { titleSubNameListCategory: 'Комбайн' },
            { titleSubNameListCategory: 'Навісне та додаткове обладнання' },
            { titleSubNameListCategory: 'Інша сільгосптехніка' },
          ],
        },
        {
          subNameCategory: 'Водний транспорт',
          subNameListCategory: [
            { titleSubNameListCategory: 'Яхта' },
            { titleSubNameListCategory: 'Катер' },
            { titleSubNameListCategory: 'Моторний човен' },
            { titleSubNameListCategory: 'Катамаран' },
            { titleSubNameListCategory: 'Гребний човен' },
            { titleSubNameListCategory: 'Каяк' },
            { titleSubNameListCategory: 'Інший водний транспорт' },
          ],
        },
        {
          subNameCategory: 'Причепи / будинки на колесах',
          subNameListCategory: [
            { titleSubNameListCategory: 'Легковий причіп' },
            { titleSubNameListCategory: 'Лафет' },
            { titleSubNameListCategory: 'Напівпричіп' },
            { titleSubNameListCategory: 'Бортовий напівпричіп' },
            { titleSubNameListCategory: 'Вантажний причіп' },
            { titleSubNameListCategory: 'Причіп зерновоз' },
            { titleSubNameListCategory: 'Самоскид напівпричіп' },
            { titleSubNameListCategory: 'Трал' },
            { titleSubNameListCategory: 'Торговий причіп' },
            { titleSubNameListCategory: 'Тракторний причіп' },
            { titleSubNameListCategory: 'Причіп фургон' },
            { titleSubNameListCategory: 'Причепи цистерни' },
            { titleSubNameListCategory: 'Автодім' },
            { titleSubNameListCategory: 'Кемпінг' },
            { titleSubNameListCategory: 'Причіп дача' },
            { titleSubNameListCategory: 'Інші причепи' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Запчастини для транспорту',
      nameListCategory: [
        {
          subNameCategory: 'Автозапчастини та аксесуари',
          subNameListCategory: [
            { titleSubNameListCategory: 'Автозапчастини' },
            { titleSubNameListCategory: 'Аксесуари для авто' },
            { titleSubNameListCategory: 'Автозвук' },
            { titleSubNameListCategory: 'GPS-навігатори / автореєстратори' },
            {
              titleSubNameListCategory:
                'Транспорт на запчастини / авторозбірки',
            },
          ],
        },
        {
          subNameCategory: 'Шини, диски і колеса',
          subNameListCategory: [
            { titleSubNameListCategory: 'Автошини' },
            { titleSubNameListCategory: 'Мотошини' },
            { titleSubNameListCategory: 'Диски' },
            { titleSubNameListCategory: 'Колеса в зборі' },
            { titleSubNameListCategory: 'Ковпаки' },
          ],
        },
        {
          subNameCategory: 'Мотозапчастини та аксесуари',
          subNameListCategory: [
            { titleSubNameListCategory: 'Мотозапчастини' },
            { titleSubNameListCategory: 'Мотоекіпірування' },
            { titleSubNameListCategory: 'Мото аксесуари' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Робота',
      nameListCategory: [
        {
          subNameCategory: 'Роздрібна торгівля / продажі / закупки',
          subNameListCategory: [
            { titleSubNameListCategory: 'Мерчендайзер' },
            { titleSubNameListCategory: 'Менеджер з продажу' },
            { titleSubNameListCategory: 'Продавець' },
            { titleSubNameListCategory: 'Супервайзер' },
            { titleSubNameListCategory: 'Флорист' },
            { titleSubNameListCategory: 'Продавець-консультант' },
            { titleSubNameListCategory: 'Торговий представник' },
            { titleSubNameListCategory: 'Менеджер інтернет магазину' },
            { titleSubNameListCategory: 'Касир' },
            { titleSubNameListCategory: 'Менеджер по роботі з клієнтом' },
            { titleSubNameListCategory: 'Товарознавець' },
            { titleSubNameListCategory: 'Керівник відділу продажів' },
            { titleSubNameListCategory: 'Менеджер по закупці' },
            { titleSubNameListCategory: 'Адміністратор' },
            { titleSubNameListCategory: 'Пекар' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Тварини',
      nameListCategory: [
        {
          subNameCategory: 'Собаки',
          subNameListCategory: [{ titleSubNameListCategory: '........' }],
        },
      ],
    },
    {
      nameCategory: 'Дім і сад',
      nameListCategory: [
        {
          subNameCategory: 'Меблі',
          subNameListCategory: [
            { titleSubNameListCategory: 'Меблі для вітальні' },
            { titleSubNameListCategory: 'Меблі для спальні' },
            { titleSubNameListCategory: 'Меблі для кухні' },
            { titleSubNameListCategory: 'Меблі для ванної кімнати' },
            { titleSubNameListCategory: 'Меблі для офісу' },
            { titleSubNameListCategory: 'Меблі для передпокою' },
            { titleSubNameListCategory: 'Меблі на замовлення' },
            { titleSubNameListCategory: 'Інші меблі' },
          ],
        },
        {
          subNameCategory: "Предмети інтер'єру",
          subNameListCategory: [
            { titleSubNameListCategory: 'Світильники' },
            { titleSubNameListCategory: 'Текстиль' },
            { titleSubNameListCategory: 'Декор вікон' },
          ],
        },
        {
          subNameCategory: 'Будівництво / ремонт',
          subNameListCategory: [
            { titleSubNameListCategory: '' },
            { titleSubNameListCategory: 'Вентиляція' },
            { titleSubNameListCategory: 'Сантехніка' },
            { titleSubNameListCategory: 'Опалення' },
            { titleSubNameListCategory: 'Електрика' },
            { titleSubNameListCategory: 'Пиломатеріали' },
            {
              titleSubNameListCategory:
                'Оздоблювальні та облицювальні матеріали',
            },
            { titleSubNameListCategory: 'Вікна / двері / скла / дзеркала' },
            { titleSubNameListCategory: 'Лакофарбовані матеріали' },
            { titleSubNameListCategory: 'Мателопрокат / арматура' },
            { titleSubNameListCategory: 'Елементи кріплення' },
            { titleSubNameListCategory: 'Цегла / бетон / піноблоки' },
            { titleSubNameListCategory: 'Інші будматеріали' },
          ],
        },
        {
          subNameCategory: 'Інструменти',
          subNameListCategory: [
            { titleSubNameListCategory: 'Бензоінструмент' },
            { titleSubNameListCategory: 'Ручний інструмент' },
            { titleSubNameListCategory: 'Електроінструмент' },
            { titleSubNameListCategory: 'Пневмоінструмент' },
            { titleSubNameListCategory: 'Інші інструменти' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Електроніка',
      nameListCategory: [
        {
          subNameCategory: 'Телефони та аксесуари',
          subNameListCategory: [
            { titleSubNameListCategory: 'Запчастини для телефонів' },
            { titleSubNameListCategory: 'Аксесуари для телефонів' },
            { titleSubNameListCategory: 'Мобільні телефони / смартфони' },
            { titleSubNameListCategory: 'Сім-карти / тарифи / номери' },
            { titleSubNameListCategory: 'Стаціонарні телефони' },
            { titleSubNameListCategory: 'Рації та інші телефони' },
          ],
        },
        {
          subNameCategory: "Комп'ютери та комплектуючі",
          subNameListCategory: [
            { titleSubNameListCategory: "Настільні ком'ютери" },
            { titleSubNameListCategory: 'Сервери' },
            { titleSubNameListCategory: 'Комплектуючі та аксесуари' },
            { titleSubNameListCategory: 'Периферійні пристрої' },
            { titleSubNameListCategory: 'Монітори' },
            { titleSubNameListCategory: 'Зовнішні накопичувачі' },
            { titleSubNameListCategory: 'Витратні матеріали' },
            { titleSubNameListCategory: 'Інше' },
          ],
        },
        {
          subNameCategory: 'Фото / відео',
          subNameListCategory: [
            { titleSubNameListCategory: 'Цифрові фотоапарати' },
            { titleSubNameListCategory: 'Відеокамери' },
            { titleSubNameListCategory: 'Екшн-камери' },
            { titleSubNameListCategory: "Об'єктиви" },
            { titleSubNameListCategory: 'Штативи / моноподи' },
            { titleSubNameListCategory: 'Фотоспалахи' },
            { titleSubNameListCategory: 'Аксесуари для фото / відеокамер' },
            { titleSubNameListCategory: 'Телескопи / біноклі' },
            { titleSubNameListCategory: 'Плівкові фотоапарати' },
          ],
        },
        {
          subNameCategory: 'Тв / відеотехніка',
          subNameListCategory: [
            { titleSubNameListCategory: 'Медіа програвачі' },
            { titleSubNameListCategory: 'Телевізори' },
            { titleSubNameListCategory: 'Проектори' },
            { titleSubNameListCategory: 'Аксесуари' },
            { titleSubNameListCategory: 'Аксесуари для ТВ/Відео техніки' },
            { titleSubNameListCategory: 'Супутникове ТВ' },
            { titleSubNameListCategory: 'Інше ТВ / відеотехніка' },
          ],
        },
        {
          subNameCategory: 'Аудіотехніка',
          subNameListCategory: [
            { titleSubNameListCategory: 'Mp3 плеєри' },
            { titleSubNameListCategory: 'Магнітоли' },
            { titleSubNameListCategory: 'Музичні центри' },
            { titleSubNameListCategory: 'Акустичні системи' },
            { titleSubNameListCategory: 'Навушники' },
            { titleSubNameListCategory: 'Радіоприймачі' },
            { titleSubNameListCategory: 'Портативна акустика' },
            { titleSubNameListCategory: 'Підсилювачі / ресивери' },
            { titleSubNameListCategory: 'Cd / md / вінілові програвачі' },
            { titleSubNameListCategory: 'Інша аудіотехніка' },
          ],
        },
        {
          subNameCategory: 'Ігри та ігрові приставки',
          subNameListCategory: [
            { titleSubNameListCategory: 'Ігри для приставок' },
            { titleSubNameListCategory: 'Приставки' },
            { titleSubNameListCategory: 'Ігри для PC' },
            { titleSubNameListCategory: 'Аксесуари' },
            { titleSubNameListCategory: 'Герої ігор' },
          ],
        },
        {
          subNameCategory: 'Планшети / ел.книги та аксесуари',
          subNameListCategory: [
            { titleSubNameListCategory: "Планшетні комп'ютери" },
            { titleSubNameListCategory: 'Електронні книги' },
            { titleSubNameListCategory: 'Графічні планшети' },
            { titleSubNameListCategory: 'Запчастини для планшетів / ел.книг' },
            { titleSubNameListCategory: 'Аксесуари для планшетів / ел.книг' },
          ],
        },
        {
          subNameCategory: 'Техніка для дому',
          subNameListCategory: [
            { titleSubNameListCategory: 'Пилососи' },
            { titleSubNameListCategory: 'Праски' },
            { titleSubNameListCategory: 'Пральні машини' },
            { titleSubNameListCategory: 'Швейні машини' },
            { titleSubNameListCategory: 'Фільтри для води' },
            { titleSubNameListCategory: 'Інша техніка для дому' },
          ],
        },
        {
          subNameCategory: 'Техніка для кухні',
          subNameListCategory: [
            { titleSubNameListCategory: 'Мікрохвильові печі' },
            { titleSubNameListCategory: 'Холодильники' },
            { titleSubNameListCategory: 'Плити / печі' },
            { titleSubNameListCategory: 'Кавоварики / кавомолки' },
            { titleSubNameListCategory: 'Кухонні комбайни та подрібнювачі' },
            { titleSubNameListCategory: 'Пароварки, мультиварки' },
            { titleSubNameListCategory: 'Хлібопічки' },
            { titleSubNameListCategory: 'Посудомийні машини' },
            { titleSubNameListCategory: 'Витяжки' },
            { titleSubNameListCategory: 'Інша техніка для кухні' },
          ],
        },
        {
          subNameCategory: 'Індивідуальний догляд',
          subNameListCategory: [
            {
              titleSubNameListCategory:
                'Бритви, епілятори, машинки для стрижки',
            },
            { titleSubNameListCategory: 'Фени, укладка волосся' },
            { titleSubNameListCategory: 'Ваги' },
            {
              titleSubNameListCategory:
                'Електронні сигарети, вапорайзери і аксесуари',
            },
            {
              titleSubNameListCategory:
                'Інша техніка для індивідуального догляду',
            },
          ],
        },
      ],
    },
    {
      nameCategory: 'Бізнес та послуги',
      nameListCategory: [
        {
          subNameCategory: 'Будівництво / ремонт / прибирання',
          subNameListCategory: [
            { titleSubNameListCategory: 'Будівельні послуги' },
            { titleSubNameListCategory: 'Дизайн / архітектура' },
            { titleSubNameListCategory: 'Оздоблення / ремонт' },
            { titleSubNameListCategory: 'Вікна / двері / балкони' },
            { titleSubNameListCategory: 'Сантехніка / комунікації' },
            { titleSubNameListCategory: 'Побутовий ремонт / прибирання' },
            { titleSubNameListCategory: 'Вентиляція / кондиціонери' },
            { titleSubNameListCategory: 'Електрика' },
            { titleSubNameListCategory: 'Готові конструкції' },
          ],
        },
        {
          subNameCategory: "Краса / здоров'я",
          subNameListCategory: [
            { titleSubNameListCategory: 'Стрижки / нарощування волосся' },
            { titleSubNameListCategory: 'Манікюр / нарощування нігтів' },
            {
              titleSubNameListCategory:
                'Манікюр / косметологія / нарощування вій',
            },
            { titleSubNameListCategory: 'Медицина' },
            { titleSubNameListCategory: 'Масаж' },
            { titleSubNameListCategory: "Краса здоров'я - інше" },
            { titleSubNameListCategory: 'Послуги психолога' },
          ],
        },
        {
          subNameCategory: 'Ремонт та обслуговування техніки',
          subNameListCategory: [
            { titleSubNameListCategory: 'Телефони і смартфони' },
            { titleSubNameListCategory: "Комп'ютери" },
            { titleSubNameListCategory: 'Побутова техніка' },
            { titleSubNameListCategory: 'Фото і відеоапаратура' },
            { titleSubNameListCategory: 'Тв і відеотехніка' },
            { titleSubNameListCategory: 'Аудіотехніка' },
            { titleSubNameListCategory: 'Інша техніка' },
            { titleSubNameListCategory: 'Ігрові приставки' },
          ],
        },
      ],
    },
    {
      nameCategory: 'Мода і стиль',
      nameListCategory: [
        {
          subNameCategory: 'Одяг / взуття',
          subNameListCategory: [
            { titleSubNameListCategory: 'Жіночий одяг' },
            { titleSubNameListCategory: 'Жіноча білизна, купальники' },
            { titleSubNameListCategory: 'Жіноче взуття' },
            { titleSubNameListCategory: 'Одяг для вагітних' },
            { titleSubNameListCategory: 'Чоловічий одяг' },
            { titleSubNameListCategory: 'Чоловіча білизна' },
            { titleSubNameListCategory: 'Чоловіче взуття' },
            { titleSubNameListCategory: 'Головні убори' },
          ],
        },
        {
          subNameCategory: 'Для весілля',
          subNameListCategory: [
            { titleSubNameListCategory: 'Вусільні аксесуари' },
            { titleSubNameListCategory: 'Вусільні сукні' },
          ],
        },
        {
          subNameCategory: 'Аксесуари',
          subNameListCategory: [
            { titleSubNameListCategory: 'Ювелірні вироби' },
            { titleSubNameListCategory: 'Сумки' },
            { titleSubNameListCategory: 'Біжутерія' },
            { titleSubNameListCategory: 'Інші аксесуари' },
          ],
        },
        {
          subNameCategory: "Краса / здоров'я",
          subNameListCategory: [
            { titleSubNameListCategory: 'Косметика' },
            { titleSubNameListCategory: 'Парфумерія' },
            { titleSubNameListCategory: 'Засоби з догляду' },
            {
              titleSubNameListCategory: 'Обладнання перукарень / салонів краси',
            },
            { titleSubNameListCategory: 'Товари для інвалідів' },
            { titleSubNameListCategory: "Інші товари для краси і здоров'я" },
          ],
        },
      ],
    },
    {
      nameCategory: 'Хобі, відпочинок і спорт',
      nameListCategory: [
        {
          subNameCategory: 'Антикваріант / колекції',
          subNameListCategory: [
            { titleSubNameListCategory: 'Антикварні меблі' },
            { titleSubNameListCategory: 'Букіністика' },
            { titleSubNameListCategory: 'Живопик' },
            { titleSubNameListCategory: 'Предмети мистецтва' },
            { titleSubNameListCategory: 'Колекціонування' },
            { titleSubNameListCategory: 'Витвори майстрів / рукоділля' },
          ],
        },
        {
          subNameCategory: 'Музичні інструменти',
          subNameListCategory: [
            { titleSubNameListCategory: 'Акустичні гітари' },
            { titleSubNameListCategory: 'Бас-гітари' },
            { titleSubNameListCategory: 'Інше' },
            { titleSubNameListCategory: 'Піаніно / фортепіано / роялі' },
            { titleSubNameListCategory: 'Електрогітари' },
            { titleSubNameListCategory: 'Духовні інструменти' },
            { titleSubNameListCategory: 'Комбопідсилювачі' },
            { titleSubNameListCategory: 'Синтезатори' },
            { titleSubNameListCategory: 'Ударні інструменти' },
            { titleSubNameListCategory: 'Студійне обладнання' },
            { titleSubNameListCategory: 'Аксесуари для музичних інструментів' },
          ],
        },
        {
          subNameCategory: 'Спорт / відпочинок',
          subNameListCategory: [
            { titleSubNameListCategory: 'Вело' },
            { titleSubNameListCategory: 'Лижі / сноуборди' },
            { titleSubNameListCategory: 'Ковзани' },
            { titleSubNameListCategory: 'Роликові ковзани' },
            { titleSubNameListCategory: 'Атлетика / фітнес' },
            { titleSubNameListCategory: 'Туризм' },
            { titleSubNameListCategory: 'Полювання / риболовля' },
            { titleSubNameListCategory: 'Ігри з ракеткою' },
            { titleSubNameListCategory: 'Водні види спорту' },
            { titleSubNameListCategory: 'Футбол' },
            { titleSubNameListCategory: 'Хокей' },
            { titleSubNameListCategory: 'Єдиноборства / бокс' },
            { titleSubNameListCategory: 'Настільні ігри' },
            { titleSubNameListCategory: 'Інші види спорту' },
          ],
        },
      ],
    },
  ];
}
