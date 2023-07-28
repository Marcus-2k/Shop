/**
 * RULES
 * 1. The first letter of the word is capitalized
 * 2. Separator of each word "_"
 * 3. Write the words "of", "in" with a lowercase letter
 * 4. The letters of the abbreviation are all uppercase
 *
 * EXAMPLES
 * 1. Producer
 * 2. Operating_System_PC
 * 3. Made_in, Type_of_Packaging
 * 4. Component_CBA, CPU_PC, Number_of_SATA_Connectors
 */

import { OptionObject } from "../interfaces/option";

export const option: OptionObject = {
  Producer: {
    name: { ua: "Бренд", en: "Бренд" },
    query_title: "producer",
    html_element: "select",
    select: [
      { name: { ua: "ASUS", en: "ASUS" }, query_value: "asus" },
      { name: { ua: "Acer", en: "Acer" }, query_value: "acer" },
      { name: { ua: "Apple", en: "Apple" }, query_value: "apple" },
      { name: { ua: "Dell", en: "Dell" }, query_value: "dell" },
      {
        name: { ua: "HP (Hewlett Packard)", en: "HP (Hewlett Packard)" },
        query_value: "hp_hewlett_packard",
      },
      { name: { ua: "Honor", en: "Honor" }, query_value: "honor" },
      { name: { ua: "Huawei", en: "Huawei" }, query_value: "huawei" },
      { name: { ua: "Lenovo", en: "Lenovo" }, query_value: "lenovo" },
      { name: { ua: "MSI", en: "MSI" }, query_value: "msi" },
      { name: { ua: "Microsoft", en: "Microsoft" }, query_value: "microsoft" },
      { name: { ua: "Samsung", en: "Samsung" }, query_value: "samsung" },
      { name: { ua: "Xiaomi", en: "Xiaomi" }, query_value: "xiaomi" },
    ],
    multiple: false,
  },
  Operating_System_PC: {
    name: { ua: "Операційна система", en: "Операційна система" },
    query_title: "operating_system_pc",
    html_element: "select",
    select: [
      { name: { ua: "Без ОС", en: "Без ОС" }, query_value: "bez_os" },
      { name: { ua: "Mac OS", en: "Mac OS" }, query_value: "mac_os" },
      { name: { ua: "Linux", en: "Linux" }, query_value: "linux" },
      { name: { ua: "Windows 7", en: "Windows 7" }, query_value: "windows_7" },
      {
        name: { ua: "Windows 8.x", en: "Windows 8.x" },
        query_value: "windows_8.x",
      },
      {
        name: { ua: "Windows 10 Home", en: "Windows 10 Home" },
        query_value: "windows_10_home",
      },
      {
        name: { ua: "Windows 11 Home", en: "Windows 11 Home" },
        query_value: "windows_11_home",
      },
      { name: { ua: "Chrome OS", en: "Chrome OS" }, query_value: "chrome_os" },
      { name: { ua: "Endles OS", en: "Endles OS" }, query_value: "endles_os" },
    ],
    multiple: false,
  },
  Operating_System_MP: {
    name: { ua: "Операційна система", en: "Операційна система" },
    query_title: "operating_system_mp",
    html_element: "select",
    select: [
      { name: { ua: "Android", en: "Android" }, query_value: "android" },
      { name: { ua: "iOS", en: "iOS" }, query_value: "ios" },
      {
        name: { ua: "Windows Phone 8.1", en: "Windows Phone 8.1" },
        query_value: "windows_phone_8.1",
      },
      {
        name: { ua: "BlackBerry OS", en: "BlackBerry OS" },
        query_value: "blackberry_os",
      },
      {
        name: { ua: "Harmony OS", en: "Harmony OS" },
        query_value: "harmony_os",
      },
      { name: { ua: "Інша", en: "Інша" }, query_value: "insha" },
    ],
    multiple: false,
  },
  CPU_PC: {
    name: { ua: "Процесор", en: "Процесор" },
    query_title: "cpu_pc",
    html_element: "select",
    select: [
      { name: { ua: "Apple M", en: "Apple M" }, query_value: "apple_m" },
      {
        name: { ua: "Intel Celeron", en: "Intel Celeron" },
        query_value: "intel_celeron",
      },
      {
        name: { ua: "Intel Xeon", en: "Intel Xeon" },
        query_value: "intel_xeon",
      },
      {
        name: { ua: "Intel Atom", en: "Intel Atom" },
        query_value: "intel_atom",
      },
      {
        name: { ua: "Intel Pentium", en: "Intel Pentium" },
        query_value: "intel_pentium",
      },
      {
        name: { ua: "Intel Core i3", en: "Intel Core i3" },
        query_value: "intel_core_i3",
      },
      {
        name: { ua: "Intel Core i5", en: "Intel Core i5" },
        query_value: "intel_core_i5",
      },
      {
        name: { ua: "Intel Core i7", en: "Intel Core i7" },
        query_value: "intel_core_i7",
      },
      {
        name: { ua: "Intel Core i9", en: "Intel Core i9" },
        query_value: "intel_core_i9",
      },
      { name: { ua: "AMD A", en: "AMD A" }, query_value: "amd_a" },
      { name: { ua: "AMD E", en: "AMD E" }, query_value: "amd_e" },
      { name: { ua: "AMD FX", en: "AMD FX" }, query_value: "amd_fx" },
      {
        name: { ua: "AMD Athlon", en: "AMD Athlon" },
        query_value: "amd_athlon",
      },
      {
        name: { ua: "AMD Ryzen 3", en: "AMD Ryzen 3" },
        query_value: "amd_ryzen_3",
      },
      {
        name: { ua: "AMD Ryzen 5", en: "AMD Ryzen 5" },
        query_value: "amd_ryzen_5",
      },
      {
        name: { ua: "AMD Ryzen 7", en: "AMD Ryzen 7" },
        query_value: "amd_ryzen_7",
      },
      {
        name: { ua: "AMD Ryzen 9", en: "AMD Ryzen 9" },
        query_value: "amd_ryzen_9",
      },
    ],
    multiple: false,
  },
  CPU_MP: {
    name: { ua: "Процесор", en: "Процесор" },
    query_title: "cpu_mp",
    html_element: "select",
    select: [
      { name: { ua: "Apple A15", en: "Apple A15" }, query_value: "apple_a15" },
      { name: { ua: "Apple A14", en: "Apple A14" }, query_value: "apple_a14" },
      { name: { ua: "Apple A13", en: "Apple A13" }, query_value: "apple_a13" },
      { name: { ua: "Apple A12", en: "Apple A12" }, query_value: "apple_a12" },
      {
        name: { ua: "Qualcomm Snapdragon", en: "Qualcomm Snapdragon" },
        query_value: "qualcomm_snapdragon",
      },
      { name: { ua: "Exynos", en: "Exynos" }, query_value: "exynos" },
      { name: { ua: "Kryo", en: "Kryo" }, query_value: "kryo" },
    ],
    multiple: false,
  },
  Graphics: {
    name: { ua: "Відеокарта", en: "Відеокарта" },
    query_title: "graphics",
    html_element: "select",
    select: [
      {
        name: { ua: "GeForce GTX 1050", en: "GeForce GTX 1050" },
        query_value: "geforce_gtx_1050",
      },
      {
        name: { ua: "GeForce GTX 1050 Ti", en: "GeForce GTX 1050 Ti" },
        query_value: "geforce_gtx_1050_ti",
      },
      {
        name: { ua: "GeForce GTX 1650", en: "GeForce GTX 1650" },
        query_value: "geforce_gtx_1650",
      },
      {
        name: { ua: "GeForce GTX 1650 Ti", en: "GeForce GTX 1650 Ti" },
        query_value: "geforce_gtx_1650_ti",
      },
      {
        name: { ua: "GeForce GTX 1660 Ti", en: "GeForce GTX 1660 Ti" },
        query_value: "geforce_gtx_1660_ti",
      },
      {
        name: { ua: "GeForce RTX 2060", en: "GeForce RTX 2060" },
        query_value: "geforce_rtx_2060",
      },
      {
        name: { ua: "GeForce RTX 3050 Ti", en: "GeForce RTX 3050 Ti" },
        query_value: "geforce_rtx_3050_ti",
      },
      {
        name: { ua: "GeForce RTX 3060 Ti", en: "GeForce RTX 3060 Ti" },
        query_value: "geforce_rtx_3060_ti",
      },
      {
        name: { ua: "GeForce RTX 3070 Ti", en: "GeForce RTX 3070 Ti" },
        query_value: "geforce_rtx_3070_ti",
      },
      {
        name: { ua: "GeForce RTX 3080 Ti", en: "GeForce RTX 3080 Ti" },
        query_value: "geforce_rtx_3080_ti",
      },
    ],
    multiple: false,
  },
  Screen_Diagonal: {
    name: { ua: "Діагональ екрана", en: "Діагональ екрана" },
    query_title: "screen_diagonal",
    html_element: "select",
    select: [
      { name: { ua: "9", en: "9" }, query_value: "9" },
      { name: { ua: "12.5", en: "12.5" }, query_value: "12.5" },
      { name: { ua: "13", en: "13" }, query_value: "13" },
      { name: { ua: "14", en: "14" }, query_value: "14" },
      { name: { ua: "15", en: "15" }, query_value: "15" },
      { name: { ua: "15.6", en: "15.6" }, query_value: "15.6" },
      { name: { ua: "16", en: "16" }, query_value: "16" },
      { name: { ua: "17", en: "17" }, query_value: "17" },
      { name: { ua: "18", en: "18" }, query_value: "18" },
      { name: { ua: "20", en: "20" }, query_value: "20" },
    ],
    multiple: false,
  },
  Type_Memory: {
    name: { ua: "Тип накопичувача", en: "Тип накопичувача" },
    query_title: "type_memory",
    html_element: "select",
    select: [
      { name: { ua: "HDD", en: "HDD" }, query_value: "hdd" },
      { name: { ua: "SSD", en: "SSD" }, query_value: "ssd" },
      { name: { ua: "SSD + HDD", en: "SSD + HDD" }, query_value: "ssd_hdd" },
      { name: { ua: "eMMC", en: "eMMC" }, query_value: "emmc" },
    ],
    multiple: false,
  },
  RAM: {
    name: { ua: "Обсяг оперативної пам'яті", en: "Обсяг оперативної пам'яті" },
    query_title: "ram",
    html_element: "select",
    select: [
      {
        name: { ua: "Без оперативної пам'яті", en: "Без оперативної пам'яті" },
        query_value: "bez_operatyvnoyi_pam_yati",
      },
      { name: { ua: "До 3 ГБ", en: "До 3 ГБ" }, query_value: "do_3_hb" },
      { name: { ua: "4 ГБ", en: "4 ГБ" }, query_value: "4_hb" },
      { name: { ua: "6 ГБ", en: "6 ГБ" }, query_value: "6_hb" },
      { name: { ua: "8 ГБ", en: "8 ГБ" }, query_value: "8_hb" },
      { name: { ua: "10 ГБ", en: "10 ГБ" }, query_value: "10_hb" },
      { name: { ua: "12 ГБ", en: "12 ГБ" }, query_value: "12_hb" },
      { name: { ua: "16 ГБ", en: "16 ГБ" }, query_value: "16_hb" },
      { name: { ua: "24 ГБ", en: "24 ГБ" }, query_value: "24_hb" },
      { name: { ua: "32 ГБ", en: "32 ГБ" }, query_value: "32_hb" },
      { name: { ua: "48 ГБ", en: "48 ГБ" }, query_value: "48_hb" },
      { name: { ua: "64 ГБ", en: "64 ГБ" }, query_value: "64_hb" },
    ],
    multiple: false,
  },
  Color: {
    name: { ua: "Колір", en: "Колір" },
    query_title: "color",
    html_element: "select",
    select: [
      { name: { ua: "Інші", en: "Інші" }, query_value: "inshi" },
      { name: { ua: "Білий", en: "Білий" }, query_value: "bilyy" },
      { name: { ua: "Жовтий", en: "Жовтий" }, query_value: "zhovtyy" },
      { name: { ua: "Зелений", en: "Зелений" }, query_value: "zelenyy" },
      { name: { ua: "Золотий", en: "Золотий" }, query_value: "zolotyy" },
      { name: { ua: "Рожевий", en: "Рожевий" }, query_value: "rozhevyy" },
      { name: { ua: "Синій", en: "Синій" }, query_value: "syniy" },
      {
        name: { ua: "Сріблястий", en: "Сріблястий" },
        query_value: "sriblyastyy",
      },
      { name: { ua: "Сірий", en: "Сірий" }, query_value: "siryy" },
      {
        name: { ua: "Фіолетовий", en: "Фіолетовий" },
        query_value: "fioletovyy",
      },
      { name: { ua: "Червоний", en: "Червоний" }, query_value: "chervonyy" },
      { name: { ua: "Чорний", en: "Чорний" }, query_value: "chornyy" },
      { name: { ua: "Бежевий", en: "Бежевий" }, query_value: "bezhevyy" },
      { name: { ua: "Блакитний", en: "Блакитний" }, query_value: "blakytnyy" },
      {
        name: { ua: "Біло-золотистий", en: "Біло-золотистий" },
        query_value: "bilo_zolotystyy",
      },
      {
        name: { ua: "Жовтогарячий", en: "Жовтогарячий" },
        query_value: "zhovtoharyachyy",
      },
      {
        name: { ua: "Золотистий", en: "Золотистий" },
        query_value: "zolotystyy",
      },
      { name: { ua: "Камуфляж", en: "Камуфляж" }, query_value: "kamuflyazh" },
      {
        name: { ua: "Сріблясто-жовтогарячий", en: "Сріблясто-жовтогарячий" },
        query_value: "sriblyasto_zhovtoharyachyy",
      },
      {
        name: { ua: "Сріблясто-чорний", en: "Сріблясто-чорний" },
        query_value: "sriblyasto_chornyy",
      },
      {
        name: { ua: "Сіро-зелений", en: "Сіро-зелений" },
        query_value: "siro_zelenyy",
      },
      {
        name: { ua: "Темно-зелений", en: "Темно-зелений" },
        query_value: "temno_zelenyy",
      },
      {
        name: { ua: "Темно-сірий", en: "Темно-сірий" },
        query_value: "temno_siryy",
      },
      {
        name: { ua: "Червоно-чорний", en: "Червоно-чорний" },
        query_value: "chervono_chornyy",
      },
      {
        name: { ua: "Чорний-зелений", en: "Чорний-зелений" },
        query_value: "chornyy_zelenyy",
      },
      {
        name: { ua: "Чорно-жовтий", en: "Чорно-жовтий" },
        query_value: "chorno_zhovtyy",
      },
      {
        name: { ua: "Чорно-жовтогарячий", en: "Чорно-жовтогарячий" },
        query_value: "chorno_zhovtoharyachyy",
      },
      {
        name: { ua: "Чорно-синій", en: "Чорно-синій" },
        query_value: "chorno_syniy",
      },
      {
        name: { ua: "Чорно-сірий", en: "Чорно-сірий" },
        query_value: "chorno_siryy",
      },
      {
        name: { ua: "Чорно-фіолетовий", en: "Чорно-фіолетовий" },
        query_value: "chorno_fioletovyy",
      },
      {
        name: { ua: "Чорно-червоний", en: "Чорно-червоний" },
        query_value: "chorno_chervonyy",
      },
    ],
    multiple: false,
  },
  New_Used: {
    name: { ua: "Новий - Вживаний", en: "Новий - Вживаний" },
    query_title: "new_used",
    html_element: "select",
    select: [
      { name: { ua: "Новий", en: "Новий" }, query_value: "novyy" },
      { name: { ua: "Вживаний", en: "Вживаний" }, query_value: "vzhyvanyy" },
    ],
    multiple: false,
  },
  Guarantee: {
    name: { ua: "Гарантія", en: "Гарантія" },
    query_title: "guarantee",
    html_element: "select",
    select: [
      { name: { ua: "Немає", en: "Немає" }, query_value: "nemaye" },
      { name: { ua: "1 рік", en: "1 рік" }, query_value: "1_rik" },
      { name: { ua: "2 роки", en: "2 роки" }, query_value: "2_roky" },
    ],
    multiple: false,
  },
  Size_SSD: {
    name: { ua: "Обсяг SSD", en: "Обсяг SSD" },
    query_title: "size_ssd",
    html_element: "select",
    select: [
      { name: { ua: "128 ГБ", en: "128 ГБ" }, query_value: "128_hb" },
      { name: { ua: "160 ГБ", en: "160 ГБ" }, query_value: "160_hb" },
      { name: { ua: "180 ГБ", en: "180 ГБ" }, query_value: "180_hb" },
      { name: { ua: "200 ГБ", en: "200 ГБ" }, query_value: "200_hb" },
      { name: { ua: "240 ГБ", en: "240 ГБ" }, query_value: "240_hb" },
      { name: { ua: "250 ГБ", en: "250 ГБ" }, query_value: "250_hb" },
      { name: { ua: "256 ГБ", en: "256 ГБ" }, query_value: "256_hb" },
      { name: { ua: "320 ГБ", en: "320 ГБ" }, query_value: "320_hb" },
      { name: { ua: "400 ГБ", en: "400 ГБ" }, query_value: "400_hb" },
      { name: { ua: "480 ГБ", en: "480 ГБ" }, query_value: "480_hb" },
      { name: { ua: "500 ГБ", en: "500 ГБ" }, query_value: "500_hb" },
      { name: { ua: "512 ГБ", en: "512 ГБ" }, query_value: "512_hb" },
      { name: { ua: "1 Т", en: "1 Т" }, query_value: "1_t" },
      { name: { ua: "2 Т", en: "2 Т" }, query_value: "2_t" },
      { name: { ua: "4 Т", en: "4 Т" }, query_value: "4_t" },
      { name: { ua: "8 Т", en: "8 Т" }, query_value: "8_t" },
    ],
    multiple: false,
  },
  Size_HDD: {
    name: { ua: "Обсяг HDD", en: "Обсяг HDD" },
    query_title: "size_hdd",
    html_element: "select",
    select: [
      { name: { ua: "128 ГБ", en: "128 ГБ" }, query_value: "128_hb" },
      { name: { ua: "160 ГБ", en: "160 ГБ" }, query_value: "160_hb" },
      { name: { ua: "180 ГБ", en: "180 ГБ" }, query_value: "180_hb" },
      { name: { ua: "200 ГБ", en: "200 ГБ" }, query_value: "200_hb" },
      { name: { ua: "240 ГБ", en: "240 ГБ" }, query_value: "240_hb" },
      { name: { ua: "250 ГБ", en: "250 ГБ" }, query_value: "250_hb" },
      { name: { ua: "256 ГБ", en: "256 ГБ" }, query_value: "256_hb" },
      { name: { ua: "320 ГБ", en: "320 ГБ" }, query_value: "320_hb" },
      { name: { ua: "400 ГБ", en: "400 ГБ" }, query_value: "400_hb" },
      { name: { ua: "480 ГБ", en: "480 ГБ" }, query_value: "480_hb" },
      { name: { ua: "500 ГБ", en: "500 ГБ" }, query_value: "500_hb" },
      { name: { ua: "512 ГБ", en: "512 ГБ" }, query_value: "512_hb" },
      { name: { ua: "1 Т", en: "1 Т" }, query_value: "1_t" },
      { name: { ua: "2 Т", en: "2 Т" }, query_value: "2_t" },
      { name: { ua: "4 Т", en: "4 Т" }, query_value: "4_t" },
      { name: { ua: "8 Т", en: "8 Т" }, query_value: "8_t" },
    ],
    multiple: false,
  },
  Type_Matrix: {
    name: { ua: "Тип матриці", en: "Тип матриці" },
    query_title: "type_matrix",
    html_element: "select",
    select: [
      { name: { ua: "AMOLED", en: "AMOLED" }, query_value: "amoled" },
      {
        name: { ua: "Dynamic AMOLED", en: "Dynamic AMOLED" },
        query_value: "dynamic_amoled",
      },
      {
        name: { ua: "Super AMOLED", en: "Super AMOLED" },
        query_value: "super_amoled",
      },
      {
        name: { ua: "Super AMOLED Plus", en: "Super AMOLED Plus" },
        query_value: "super_amoled_plus",
      },
      {
        name: {
          ua: "Super AMOLED + Dynamic AMOLED 2X",
          en: "Super AMOLED + Dynamic AMOLED 2X",
        },
        query_value: "super_amoled_dynamic_amoled_2x",
      },
      {
        name: { ua: "Fluid AMOLED", en: "Fluid AMOLED" },
        query_value: "fluid_amoled",
      },
      {
        name: { ua: "Fluid AMOLED with LTPO", en: "Fluid AMOLED with LTPO" },
        query_value: "fluid_amoled_with_ltpo",
      },
      { name: { ua: "IGZO", en: "IGZO" }, query_value: "igzo" },
      { name: { ua: "IPS", en: "IPS" }, query_value: "ips" },
      {
        name: { ua: "Super IPS+", en: "Super IPS+" },
        query_value: "super_ips",
      },
      { name: { ua: "LCD", en: "LCD" }, query_value: "lcd" },
      { name: { ua: "LTPS", en: "LTPS" }, query_value: "ltps" },
      { name: { ua: "OGS", en: "OGS" }, query_value: "ogs" },
      { name: { ua: "OLED", en: "OLED" }, query_value: "oled" },
      { name: { ua: "TFN", en: "TFN" }, query_value: "tfn" },
      { name: { ua: "TN", en: "TN" }, query_value: "tn" },
      { name: { ua: "sAMOLED", en: "sAMOLED" }, query_value: "samoled" },
    ],
    multiple: false,
  },
  Screen_Refresh_Rate: {
    name: { ua: "Частота оновлення екрану", en: "Частота оновлення екрану" },
    query_title: "screen_refresh_rate",
    html_element: "select",
    select: [
      { name: { ua: "30 ГЦ", en: "30 ГЦ" }, query_value: "30_hts" },
      { name: { ua: "60 ГЦ", en: "60 ГЦ" }, query_value: "60_hts" },
      { name: { ua: "90 ГЦ", en: "90 ГЦ" }, query_value: "90_hts" },
      { name: { ua: "120 ГЦ", en: "120 ГЦ" }, query_value: "120_hts" },
      { name: { ua: "144 ГЦ", en: "144 ГЦ" }, query_value: "144_hts" },
      { name: { ua: "165 ГЦ", en: "165 ГЦ" }, query_value: "165_hts" },
    ],
    multiple: false,
  },
  Guard: {
    name: { ua: "Безпека", en: "Безпека" },
    query_title: "guard",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Розблокування за обличчям",
          en: "Розблокування за обличчям",
        },
        query_value: "rozblokuvannya_za_oblychchyam",
      },
      {
        name: {
          ua: "Сканер відбитків пальця збоку",
          en: "Сканер відбитків пальця збоку",
        },
        query_value: "skaner_vidbytkiv_pal'tsya_zboku",
      },
      {
        name: {
          ua: "Сканер відбитків пальця ззаду",
          en: "Сканер відбитків пальця ззаду",
        },
        query_value: "skaner_vidbytkiv_pal'tsya_zzadu",
      },
      {
        name: {
          ua: "Сканер відбитків пальця на екрані",
          en: "Сканер відбитків пальця на екрані",
        },
        query_value: "skaner_vidbytkiv_pal'tsya_na_ekrani",
      },
    ],
    multiple: true,
  },
  Body_Material: {
    name: { ua: "Матеріал корпусу", en: "Матеріал корпусу" },
    query_title: "body_material",
    html_element: "select",
    select: [
      { name: { ua: "Метал", en: "Метал" }, query_value: "metal" },
      { name: { ua: "Пластик", en: "Пластик" }, query_value: "plastyk" },
      { name: { ua: "Скло", en: "Скло" }, query_value: "sklo" },
      { name: { ua: "Інший", en: "Інший" }, query_value: "inshyy" },
    ],
    multiple: true,
  },
  Made_in: {
    name: { ua: "Країна-виробник", en: "Країна-виробник" },
    query_title: "made_in",
    html_element: "select",
    select: [
      { name: { ua: "Індія", en: "Індія" }, query_value: "indiya" },
      { name: { ua: "В'єтнам", en: "В'єтнам" }, query_value: "v_yetnam" },
      { name: { ua: "Китай", en: "Китай" }, query_value: "kytay" },
      { name: { ua: "Тайвань", en: "Тайвань" }, query_value: "tayvan'" },
      { name: { ua: "Мексика", en: "Мексика" }, query_value: "meksyka" },
      {
        name: { ua: "Німеччина", en: "Німеччина" },
        query_value: "nimechchyna",
      },
      { name: { ua: "Польща", en: "Польща" }, query_value: "pol'shcha" },
      { name: { ua: "Румунія", en: "Румунія" }, query_value: "rumuniya" },
      { name: { ua: "США", en: "США" }, query_value: "ssha" },
      {
        name: { ua: "Словаччина", en: "Словаччина" },
        query_value: "slovachchyna",
      },
      { name: { ua: "Таїланд", en: "Таїланд" }, query_value: "tayiland" },
      {
        name: { ua: "Туреччина", en: "Туреччина" },
        query_value: "turechchyna",
      },
      { name: { ua: "Угорщина", en: "Угорщина" }, query_value: "uhorshchyna" },
      { name: { ua: "Україна", en: "Україна" }, query_value: "ukrayina" },
      { name: { ua: "Японія", en: "Японія" }, query_value: "yaponiya" },
    ],
    multiple: false,
  },
  Communication: {
    name: { ua: "Стандарт зв'язку", en: "Стандарт зв'язку" },
    query_title: "communication",
    html_element: "select",
    select: [
      {
        name: { ua: "2G (GPRS/EDGE/GSM)", en: "2G (GPRS/EDGE/GSM)" },
        query_value: "2g_gprs/edge/gsm",
      },
      {
        name: {
          ua: "3G (UMTS/HSUPA/HSPA/WSDMA/CDM)",
          en: "3G (UMTS/HSUPA/HSPA/WSDMA/CDM)",
        },
        query_value: "3g_umts/hsupa/hspa/wsdma/cdm",
      },
      { name: { ua: "4G (LTE)", en: "4G (LTE)" }, query_value: "4g_lte_" },
      { name: { ua: "5G", en: "5G" }, query_value: "5g" },
    ],
    multiple: true,
  },
  Memory_Capacity: {
    name: { ua: "Обсяг пам'яті", en: "Обсяг пам'яті" },
    query_title: "memory_capacity",
    html_element: "select",
    select: [
      {
        name: { ua: "1 ГБ і менше", en: "1 ГБ і менше" },
        query_value: "1_hb_i_menshe",
      },
      { name: { ua: "2 ГБ", en: "2 ГБ" }, query_value: "2_hb" },
      { name: { ua: "3 ГБ", en: "3 ГБ" }, query_value: "3_hb" },
      { name: { ua: "4 ГБ", en: "4 ГБ" }, query_value: "4_hb" },
      { name: { ua: "5 ГБ", en: "5 ГБ" }, query_value: "5_hb" },
      { name: { ua: "6 ГБ", en: "6 ГБ" }, query_value: "6_hb" },
      { name: { ua: "8 ГБ", en: "8 ГБ" }, query_value: "8_hb" },
      { name: { ua: "10 ГБ", en: "10 ГБ" }, query_value: "10_hb" },
      { name: { ua: "11 ГБ", en: "11 ГБ" }, query_value: "11_hb" },
      { name: { ua: "12 ГБ", en: "12 ГБ" }, query_value: "12_hb" },
      { name: { ua: "16 ГБ", en: "16 ГБ" }, query_value: "16_hb" },
      { name: { ua: "20 ГБ", en: "20 ГБ" }, query_value: "20_hb" },
      { name: { ua: "24 ГБ", en: "24 ГБ" }, query_value: "24_hb" },
      { name: { ua: "36 ГБ", en: "36 ГБ" }, query_value: "36_hb" },
      { name: { ua: "48 ГБ", en: "48 ГБ" }, query_value: "48_hb" },
      { name: { ua: "64 ГБ", en: "64 ГБ" }, query_value: "64_hb" },
    ],
    multiple: false,
  },
  Memory_Bus_Bit_Size: {
    name: { ua: "Розрядність шини пам'яті", en: "Розрядність шини пам'яті" },
    query_title: "memory_bus_bit_size",
    html_element: "select",
    select: [
      { name: { ua: "32 біт", en: "32 біт" }, query_value: "32_bit" },
      { name: { ua: "64 біт", en: "64 біт" }, query_value: "64_bit" },
      { name: { ua: "96 бітів", en: "96 бітів" }, query_value: "96_bitiv" },
      { name: { ua: "128 біт", en: "128 біт" }, query_value: "128_bit" },
      { name: { ua: "160 біт", en: "160 біт" }, query_value: "160_bit" },
      { name: { ua: "192 біт", en: "192 біт" }, query_value: "192_bit" },
      { name: { ua: "256 біт", en: "256 біт" }, query_value: "256_bit" },
      { name: { ua: "320 біт", en: "320 біт" }, query_value: "320_bit" },
      { name: { ua: "352 біт", en: "352 біт" }, query_value: "352_bit" },
      { name: { ua: "384 біт", en: "384 біт" }, query_value: "384_bit" },
      { name: { ua: "512 біт", en: "512 біт" }, query_value: "512_bit" },
      { name: { ua: "589 біт", en: "589 біт" }, query_value: "589_bit" },
      { name: { ua: "1024 біт", en: "1024 біт" }, query_value: "1024_bit" },
      { name: { ua: "2048 біт", en: "2048 біт" }, query_value: "2048_bit" },
      { name: { ua: "4096 біт", en: "4096 біт" }, query_value: "4096_bit" },
    ],
    multiple: false,
  },
  Type_Memory_Videocards: {
    name: { ua: "Тип пам'яті ", en: "Тип пам'яті " },
    query_title: "type_memory_videocards",
    html_element: "select",
    select: [
      { name: { ua: "DDR2", en: "DDR2" }, query_value: "ddr2" },
      { name: { ua: "DDR3", en: "DDR3" }, query_value: "ddr3" },
      { name: { ua: "DDR4", en: "DDR4" }, query_value: "ddr4" },
      { name: { ua: "DDR5", en: "DDR5" }, query_value: "ddr5" },
      { name: { ua: "GDDR1", en: "GDDR1" }, query_value: "gddr1" },
      { name: { ua: "GDDR2", en: "GDDR2" }, query_value: "gddr2" },
      { name: { ua: "GDDR3", en: "GDDR3" }, query_value: "gddr3" },
      { name: { ua: "GDDR4", en: "GDDR4" }, query_value: "gddr4" },
      { name: { ua: "GDDR5", en: "GDDR5" }, query_value: "gddr5" },
      { name: { ua: "GDDR5X", en: "GDDR5X" }, query_value: "gddr5x" },
      { name: { ua: "GDDR6", en: "GDDR6" }, query_value: "gddr6" },
      { name: { ua: "GDDR6X", en: "GDDR6X" }, query_value: "gddr6x" },
      { name: { ua: "HBM2", en: "HBM2" }, query_value: "hbm2" },
      { name: { ua: "LPDDR4X", en: "LPDDR4X" }, query_value: "lpddr4x" },
      { name: { ua: "SDDR3", en: "SDDR3" }, query_value: "sddr3" },
    ],
    multiple: false,
  },
  Graphics_Processor: {
    name: {
      ua: "Виробник графічного процесора ",
      en: "Виробник графічного процесора ",
    },
    query_title: "graphics_processor",
    html_element: "select",
    select: [
      { name: { ua: "AMD", en: "AMD" }, query_value: "amd" },
      { name: { ua: "nVidia", en: "nVidia" }, query_value: "nvidia" },
    ],
    multiple: false,
  },
  Appointment: {
    name: { ua: "Призначення", en: "Призначення" },
    query_title: "appointment",
    html_element: "select",
    select: [
      { name: { ua: "Ігрові", en: "Ігрові" }, query_value: "ihrovi" },
      {
        name: { ua: "Для майнінгу", en: "Для майнінгу" },
        query_value: "dlya_mayninhu",
      },
      { name: { ua: "Звичайні", en: "Звичайні" }, query_value: "zvychayni" },
      {
        name: { ua: "Професійні", en: "Професійні" },
        query_value: "profesiyni",
      },
    ],
    multiple: true,
  },
  Interface_Videocards: {
    name: { ua: "Інтерфейс", en: "Інтерфейс" },
    query_title: "interface_videocards",
    html_element: "select",
    select: [
      { name: { ua: "PCI", en: "PCI" }, query_value: "pci" },
      {
        name: { ua: "PCI Express", en: "PCI Express" },
        query_value: "pci_express",
      },
      {
        name: { ua: "PCI Express 1.0", en: "PCI Express 1.0" },
        query_value: "pci_express_1.0",
      },
      {
        name: { ua: "PCI Express 2.0", en: "PCI Express 2.0" },
        query_value: "pci_express_2.0",
      },
      {
        name: { ua: "PCI Express 2.1", en: "PCI Express 2.1" },
        query_value: "pci_express_2.1",
      },
      {
        name: { ua: "PCI Express 3.0", en: "PCI Express 3.0" },
        query_value: "pci_express_3.0",
      },
      {
        name: { ua: "PCI Express 4.0", en: "PCI Express 4.0" },
        query_value: "pci_express_4.0",
      },
      {
        name: { ua: "PCI Express 4.0 x4", en: "PCI Express 4.0 x4" },
        query_value: "pci_express_4.0_x4",
      },
      {
        name: { ua: "PCI Express x1", en: "PCI Express x1" },
        query_value: "pci_express_x1",
      },
      {
        name: { ua: "PCI Express x4 1.x", en: "PCI Express x4 1.x" },
        query_value: "pci_express_x4_1.x",
      },
      {
        name: { ua: "PCI Express x4 3.0", en: "PCI Express x4 3.0" },
        query_value: "pci_express_x4_3.0",
      },
      {
        name: { ua: "PCI Express x8", en: "PCI Express x8" },
        query_value: "pci_express_x8",
      },
      {
        name: { ua: "PCI Express x8 2.0", en: "PCI Express x8 2.0" },
        query_value: "pci_express_x8_2.0",
      },
      {
        name: { ua: "PCI Express x8 3.0", en: "PCI Express x8 3.0" },
        query_value: "pci_express_x8_3.0",
      },
      {
        name: { ua: "PCI Express x8 4.0", en: "PCI Express x8 4.0" },
        query_value: "pci_express_x8_4.0",
      },
      {
        name: { ua: "PCI Express x16", en: "PCI Express x16" },
        query_value: "pci_express_x16",
      },
      {
        name: { ua: "PCI Express x16 2.x", en: "PCI Express x16 2.x" },
        query_value: "pci_express_x16_2.x",
      },
      {
        name: { ua: "PCI Express x16 3.0", en: "PCI Express x16 3.0" },
        query_value: "pci_express_x16_3.0",
      },
      {
        name: { ua: "PCI Express x16 4.0", en: "PCI Express x16 4.0" },
        query_value: "pci_express_x16_4.0",
      },
    ],
    multiple: false,
  },
  Graphics_Processor_Family: {
    name: {
      ua: "Сімейство графічного процесора",
      en: "Сімейство графічного процесора",
    },
    query_title: "graphics_processor_family",
    html_element: "select",
    select: [
      {
        name: { ua: "AMD FirePro", en: "AMD FirePro" },
        query_value: "amd_firepro",
      },
      {
        name: { ua: "AMD/ATI Radeon", en: "AMD/ATI Radeon" },
        query_value: "amd/ati_radeon",
      },
      {
        name: { ua: "NVidia GeForce", en: "NVidia GeForce" },
        query_value: "nvidia_geforce",
      },
      {
        name: { ua: "NVidia NVS", en: "NVidia NVS" },
        query_value: "nvidia_nvs",
      },
      {
        name: { ua: "NVidia Quadro", en: "NVidia Quadro" },
        query_value: "nvidia_quadro",
      },
      {
        name: { ua: "NVidia RTX", en: "NVidia RTX" },
        query_value: "nvidia_rtx",
      },
      { name: { ua: "NVidia T", en: "NVidia T" }, query_value: "nvidia_t" },
    ],
    multiple: false,
  },
  Connector: {
    name: { ua: "Роз'єми", en: "Connectors" },
    query_title: "connector",
    html_element: "select",
    select: [
      { name: { ua: "DMS-59", en: "DMS-59" }, query_value: "dms_59" },
      { name: { ua: "DVI", en: "DVI" }, query_value: "dvi" },
      { name: { ua: "DVI-D", en: "DVI-D" }, query_value: "dvi_d" },
      {
        name: { ua: "DVI-D Dual Link", en: "DVI-D Dual Link" },
        query_value: "dvi_d_dual_link",
      },
      { name: { ua: "DVI-I", en: "DVI-I" }, query_value: "dvi_i" },
      {
        name: { ua: "DisplayPort", en: "DisplayPort" },
        query_value: "displayport",
      },
      { name: { ua: "HDMI", en: "HDMI" }, query_value: "hdmi" },
      { name: { ua: "S-Video", en: "S-Video" }, query_value: "s_video" },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
      { name: { ua: "VGA", en: "VGA" }, query_value: "vga" },
      {
        name: { ua: "miniDisplayPort", en: "miniDisplayPort" },
        query_value: "minidisplayport",
      },
      { name: { ua: "miniHDMI", en: "miniHDMI" }, query_value: "minihdmi" },
    ],
    multiple: true,
  },
  Form_Factor_Videocards: {
    name: { ua: "Форм-фактор Відеокарти", en: "Video card form factor" },
    query_title: "form_factor_videocards",
    html_element: "select",
    select: [
      {
        name: { ua: "Дискретна (Стандартна)", en: "Дискретна (Стандартна)" },
        query_value: "dyskretna_standartna",
      },
      { name: { ua: "Зовнішня", en: "Зовнішня" }, query_value: "zovnishnya" },
      { name: { ua: "Міні", en: "Міні" }, query_value: "mini" },
      {
        name: { ua: "Низькопрофільна", en: "Низькопрофільна" },
        query_value: "nyz'koprofil'na",
      },
    ],
    multiple: false,
  },
  Additional_Power_Supply: {
    name: { ua: "Додаткове живлення", en: "Additional power supply" },
    query_title: "additional_power_supply",
    html_element: "select",
    select: [
      { name: { ua: "Немає", en: "Немає" }, query_value: "nemaye" },
      { name: { ua: "6 pin", en: "6 pin" }, query_value: "6_pin" },
      { name: { ua: "8 pin", en: "8 pin" }, query_value: "8_pin" },
      { name: { ua: "12 pin", en: "12 pin" }, query_value: "12_pin" },
      { name: { ua: "16 pin", en: "16 pin" }, query_value: "16_pin" },
      { name: { ua: "6 + 6 pin", en: "6 + 6 pin" }, query_value: "6_6_pin" },
      { name: { ua: "6 + 8 pin", en: "6 + 8 pin" }, query_value: "6_8_pin" },
      { name: { ua: "8 + 8 pin", en: "8 + 8 pin" }, query_value: "8_8_pin" },
      {
        name: { ua: "8 + 8 + 6 pin", en: "8 + 8 + 6 pin" },
        query_value: "8_8_6_pin",
      },
      {
        name: { ua: "8 + 8 + 8 pin", en: "8 + 8 + 8 pin" },
        query_value: "8_8_8_pin",
      },
    ],
    multiple: false,
  },
  Cooling_System_Type: {
    name: { ua: "Тип системи охолодження", en: "Type of cooling system" },
    query_title: "cooling_system_type",
    html_element: "select",
    select: [
      { name: { ua: "Активна", en: "Активна" }, query_value: "aktyvna" },
      {
        name: { ua: "Водяне охолодження", en: "Водяне охолодження" },
        query_value: "vodyane_okholodzhennya",
      },
      { name: { ua: "Пасивна", en: "Пасивна" }, query_value: "pasyvna" },
    ],
    multiple: false,
  },
  Graphic_Chip: {
    name: { ua: "Графічний чип", en: "Graphic chip" },
    query_title: "graphic_chip",
    html_element: "select",
    select: [
      { name: { ua: "FirePro", en: "FirePro" }, query_value: "firepro" },
      {
        name: { ua: "GeForce 210", en: "GeForce 210" },
        query_value: "geforce_210",
      },
      {
        name: { ua: "GeForce GT", en: "GeForce GT" },
        query_value: "geforce_gt",
      },
      {
        name: { ua: "GeForce GT 1030", en: "GeForce GT 1030" },
        query_value: "geforce_gt_1030",
      },
      {
        name: { ua: "GeForce GTX 1050", en: "GeForce GTX 1050" },
        query_value: "geforce_gtx_1050",
      },
      {
        name: { ua: "GeForce GTX 1050 Ti", en: "GeForce GTX 1050 Ti" },
        query_value: "geforce_gtx_1050_ti",
      },
      {
        name: { ua: "GeForce GTX 1060", en: "GeForce GTX 1060" },
        query_value: "geforce_gtx_1060",
      },
      {
        name: { ua: "GeForce GTX 1070", en: "GeForce GTX 1070" },
        query_value: "geforce_gtx_1070",
      },
      {
        name: { ua: "GeForce GTX 1070 Ti", en: "GeForce GTX 1070 Ti" },
        query_value: "geforce_gtx_1070_ti",
      },
      {
        name: { ua: "GeForce GTX 1080", en: "GeForce GTX 1080" },
        query_value: "geforce_gtx_1080",
      },
      {
        name: { ua: "GeForce GTX 1080 Ti", en: "GeForce GTX 1080 Ti" },
        query_value: "geforce_gtx_1080_ti",
      },
      {
        name: { ua: "GeForce GTX 1630", en: "GeForce GTX 1630" },
        query_value: "geforce_gtx_1630",
      },
      {
        name: { ua: "GeForce GTX 1650", en: "GeForce GTX 1650" },
        query_value: "geforce_gtx_1650",
      },
      {
        name: { ua: "GeForce GTX 1650 Super", en: "GeForce GTX 1650 Super" },
        query_value: "geforce_gtx_1650_super",
      },
      {
        name: { ua: "GeForce GTX 1660", en: "GeForce GTX 1660" },
        query_value: "geforce_gtx_1660",
      },
      {
        name: { ua: "GeForce GTX 1660 Super", en: "GeForce GTX 1660 Super" },
        query_value: "geforce_gtx_1660_super",
      },
      {
        name: { ua: "GeForce GTX 1660 Ti", en: "GeForce GTX 1660 Ti" },
        query_value: "geforce_gtx_1660_ti",
      },
      {
        name: { ua: "GeForce GTX 560", en: "GeForce GTX 560" },
        query_value: "geforce_gtx_560",
      },
      {
        name: { ua: "GeForce GTX 580", en: "GeForce GTX 580" },
        query_value: "geforce_gtx_580",
      },
      {
        name: { ua: "GeForce GTX 590", en: "GeForce GTX 590" },
        query_value: "geforce_gtx_590",
      },
      {
        name: { ua: "GeForce GTX 650", en: "GeForce GTX 650" },
        query_value: "geforce_gtx_650",
      },
      {
        name: { ua: "GeForce GTX 660", en: "GeForce GTX 660" },
        query_value: "geforce_gtx_660",
      },
      {
        name: { ua: "GeForce GTX 745", en: "GeForce GTX 745" },
        query_value: "geforce_gtx_745",
      },
      {
        name: { ua: "GeForce GTX 750", en: "GeForce GTX 750" },
        query_value: "geforce_gtx_750",
      },
      {
        name: { ua: "GeForce GTX 760", en: "GeForce GTX 760" },
        query_value: "geforce_gtx_760",
      },
      {
        name: { ua: "GeForce GTX 770", en: "GeForce GTX 770" },
        query_value: "geforce_gtx_770",
      },
      {
        name: { ua: "GeForce GTX 780", en: "GeForce GTX 780" },
        query_value: "geforce_gtx_780",
      },
      {
        name: { ua: "GeForce GTX 950", en: "GeForce GTX 950" },
        query_value: "geforce_gtx_950",
      },
      {
        name: { ua: "GeForce GTX 960", en: "GeForce GTX 960" },
        query_value: "geforce_gtx_960",
      },
      {
        name: { ua: "GeForce GTX 970", en: "GeForce GTX 970" },
        query_value: "geforce_gtx_970",
      },
      {
        name: { ua: "GeForce RTX 2060", en: "GeForce RTX 2060" },
        query_value: "geforce_rtx_2060",
      },
      {
        name: { ua: "GeForce RTX 2060 Super", en: "GeForce RTX 2060 Super" },
        query_value: "geforce_rtx_2060_super",
      },
      {
        name: { ua: "GeForce RTX 2070", en: "GeForce RTX 2070" },
        query_value: "geforce_rtx_2070",
      },
      {
        name: { ua: "GeForce RTX 2070 Super", en: "GeForce RTX 2070 Super" },
        query_value: "geforce_rtx_2070_super",
      },
      {
        name: { ua: "GeForce RTX 2080", en: "GeForce RTX 2080" },
        query_value: "geforce_rtx_2080",
      },
      {
        name: { ua: "GeForce RTX 2080 Super", en: "GeForce RTX 2080 Super" },
        query_value: "geforce_rtx_2080_super",
      },
      {
        name: { ua: "GeForce RTX 2080 Ti", en: "GeForce RTX 2080 Ti" },
        query_value: "geforce_rtx_2080_ti",
      },
      {
        name: { ua: "GeForce RTX 3050", en: "GeForce RTX 3050" },
        query_value: "geforce_rtx_3050",
      },
      {
        name: { ua: "GeForce RTX 3060", en: "GeForce RTX 3060" },
        query_value: "geforce_rtx_3060",
      },
      {
        name: { ua: "GeForce RTX 3060 Ti", en: "GeForce RTX 3060 Ti" },
        query_value: "geforce_rtx_3060_ti",
      },
      {
        name: { ua: "GeForce RTX 3070", en: "GeForce RTX 3070" },
        query_value: "geforce_rtx_3070",
      },
      {
        name: { ua: "GeForce RTX 3070 Ti", en: "GeForce RTX 3070 Ti" },
        query_value: "geforce_rtx_3070_ti",
      },
      {
        name: { ua: "GeForce RTX 3080", en: "GeForce RTX 3080" },
        query_value: "geforce_rtx_3080",
      },
      {
        name: { ua: "GeForce RTX 3080 Ti", en: "GeForce RTX 3080 Ti" },
        query_value: "geforce_rtx_3080_ti",
      },
      {
        name: { ua: "GeForce RTX 3090", en: "GeForce RTX 3090" },
        query_value: "geforce_rtx_3090",
      },
      {
        name: { ua: "GeForce RTX 3090 Ti", en: "GeForce RTX 3090 Ti" },
        query_value: "geforce_rtx_3090_ti",
      },
      {
        name: { ua: "GeForce RTX 4070 Ti", en: "GeForce RTX 4070 Ti" },
        query_value: "geforce_rtx_4070_ti",
      },
      {
        name: { ua: "GeForce RTX 4080", en: "GeForce RTX 4080" },
        query_value: "geforce_rtx_4080",
      },
      {
        name: { ua: "GeForce RTX 4090", en: "GeForce RTX 4090" },
        query_value: "geforce_rtx_4090",
      },
      {
        name: {
          ua: "NVidia CMP 90-HX (Mining)",
          en: "NVidia CMP 90-HX (Mining)",
        },
        query_value: "nvidia_cmp_90_hx_mining",
      },
      {
        name: {
          ua: "NVidia P102-100 (Mining)",
          en: "NVidia P102-100 (Mining)",
        },
        query_value: "nvidia_p102_100_mining",
      },
      {
        name: {
          ua: "NVidia P104-100 (Mining)",
          en: "NVidia P104-100 (Mining)",
        },
        query_value: "nvidia_p104_100_mining",
      },
      {
        name: { ua: "QUADRO NVS", en: "QUADRO NVS" },
        query_value: "quadro_nvs",
      },
      { name: { ua: "R5 220", en: "R5 220" }, query_value: "r5_220" },
      { name: { ua: "R5 230", en: "R5 230" }, query_value: "r5_230" },
      { name: { ua: "R5 430", en: "R5 430" }, query_value: "r5_430" },
      { name: { ua: "R7 240", en: "R7 240" }, query_value: "r7_240" },
      { name: { ua: "R7 250", en: "R7 250" }, query_value: "r7_250" },
      { name: { ua: "R7 360", en: "R7 360" }, query_value: "r7_360" },
      { name: { ua: "R7 370", en: "R7 370" }, query_value: "r7_370" },
      { name: { ua: "R9 270", en: "R9 270" }, query_value: "r9_270" },
      { name: { ua: "R9 270X", en: "R9 270X" }, query_value: "r9_270x" },
      { name: { ua: "R9 295X2", en: "R9 295X2" }, query_value: "r9_295x2" },
      { name: { ua: "R9 370", en: "R9 370" }, query_value: "r9_370" },
      { name: { ua: "R9 380", en: "R9 380" }, query_value: "r9_380" },
      { name: { ua: "RX 460", en: "RX 460" }, query_value: "rx_460" },
      { name: { ua: "RX 470", en: "RX 470" }, query_value: "rx_470" },
      { name: { ua: "RX 480", en: "RX 480" }, query_value: "rx_480" },
      { name: { ua: "RX 550", en: "RX 550" }, query_value: "rx_550" },
      {
        name: { ua: "RX 5500 XT", en: "RX 5500 XT" },
        query_value: "rx_5500_xt",
      },
      { name: { ua: "RX 560", en: "RX 560" }, query_value: "rx_560" },
      {
        name: { ua: "RX 5600 XT", en: "RX 5600 XT" },
        query_value: "rx_5600_xt",
      },
      { name: { ua: "RX 570", en: "RX 570" }, query_value: "rx_570" },
      { name: { ua: "RX 5700", en: "RX 5700" }, query_value: "rx_5700" },
      {
        name: { ua: "RX 5700 XT", en: "RX 5700 XT" },
        query_value: "rx_5700_xt",
      },
      { name: { ua: "RX 580", en: "RX 580" }, query_value: "rx_580" },
      { name: { ua: "RX 590", en: "RX 590" }, query_value: "rx_590" },
      {
        name: { ua: "RX 6500 XT", en: "RX 6500 XT" },
        query_value: "rx_6500_xt",
      },
      { name: { ua: "RX 6600", en: "RX 6600" }, query_value: "rx_6600" },
      {
        name: { ua: "RX 6600 XT", en: "RX 6600 XT" },
        query_value: "rx_6600_xt",
      },
      {
        name: { ua: "RX 6650 XT", en: "RX 6650 XT" },
        query_value: "rx_6650_xt",
      },
      {
        name: { ua: "RX 6700 XT", en: "RX 6700 XT" },
        query_value: "rx_6700_xt",
      },
      {
        name: { ua: "RX 6750 XT", en: "RX 6750 XT" },
        query_value: "rx_6750_xt",
      },
      { name: { ua: "RX 6800", en: "RX 6800" }, query_value: "rx_6800" },
      {
        name: { ua: "RX 6800 XT", en: "RX 6800 XT" },
        query_value: "rx_6800_xt",
      },
      {
        name: { ua: "RX 6850M XT", en: "RX 6850M XT" },
        query_value: "rx_6850m_xt",
      },
      {
        name: { ua: "RX 6900 XT", en: "RX 6900 XT" },
        query_value: "rx_6900_xt",
      },
      {
        name: { ua: "RX 6950 XT", en: "RX 6950 XT" },
        query_value: "rx_6950_xt",
      },
      {
        name: { ua: "RX 7900 XT", en: "RX 7900 XT" },
        query_value: "rx_7900_xt",
      },
      {
        name: { ua: "RX Vega 56", en: "RX Vega 56" },
        query_value: "rx_vega_56",
      },
      {
        name: { ua: "RX Vega 64", en: "RX Vega 64" },
        query_value: "rx_vega_64",
      },
      {
        name: { ua: "Rx​ 7900 XTX", en: "Rx​ 7900 XTX" },
        query_value: "rx​_7900_xtx",
      },
      {
        name: { ua: "Radeon 550", en: "Radeon 550" },
        query_value: "radeon_550",
      },
      {
        name: { ua: "Radeon HD5xxx", en: "Radeon HD5xxx" },
        query_value: "radeon_hd5xxx",
      },
      {
        name: { ua: "Radeon HD6xxx", en: "Radeon HD6xxx" },
        query_value: "radeon_hd6xxx",
      },
      {
        name: { ua: "Radeon HD7xxx", en: "Radeon HD7xxx" },
        query_value: "radeon_hd7xxx",
      },
      {
        name: { ua: "Radeon HD8xxx", en: "Radeon HD8xxx" },
        query_value: "radeon_hd8xxx",
      },
      {
        name: { ua: "Radeon Pro W5500", en: "Radeon Pro W5500" },
        query_value: "radeon_pro_w5500",
      },
      {
        name: { ua: "Radeon Pro W5700", en: "Radeon Pro W5700" },
        query_value: "radeon_pro_w5700",
      },
      {
        name: { ua: "Radeon Pro W6600", en: "Radeon Pro W6600" },
        query_value: "radeon_pro_w6600",
      },
      {
        name: { ua: "Radeon Pro W6800", en: "Radeon Pro W6800" },
        query_value: "radeon_pro_w6800",
      },
      {
        name: { ua: "Radeon Pro WX 3200", en: "Radeon Pro WX 3200" },
        query_value: "radeon_pro_wx_3200",
      },
      {
        name: { ua: "Radeon Pro WX 7100", en: "Radeon Pro WX 7100" },
        query_value: "radeon_pro_wx_7100",
      },
      { name: { ua: "Radeon R5", en: "Radeon R5" }, query_value: "radeon_r5" },
      {
        name: { ua: "Radeon RX 5500 XT", en: "Radeon RX 5500 XT" },
        query_value: "radeon_rx_5500_xt",
      },
      {
        name: { ua: "Radeon RX 5600 XT", en: "Radeon RX 5600 XT" },
        query_value: "radeon_rx_5600_xt",
      },
      {
        name: { ua: "Radeon RX 6400", en: "Radeon RX 6400" },
        query_value: "radeon_rx_6400",
      },
      {
        name: { ua: "Radeon RX 6600 XT", en: "Radeon RX 6600 XT" },
        query_value: "radeon_rx_6600_xt",
      },
      {
        name: { ua: "Radeon VII", en: "Radeon VII" },
        query_value: "radeon_vii",
      },
      { name: { ua: "Titan RTX", en: "Titan RTX" }, query_value: "titan_rtx" },
      {
        name: { ua: "nVidia RTX A series", en: "nVidia RTX A series" },
        query_value: "nvidia_rtx_a_series",
      },
      {
        name: { ua: "nVidia T series", en: "nVidia T series" },
        query_value: "nvidia_t_series",
      },
    ],
    multiple: false,
  },
  Form_Factor_Storage: {
    name: { ua: "Форм-фактор Накопичувача", en: "Форм-фактор Накопичувача" },
    query_title: "form_factor_storage",
    html_element: "select",
    select: [
      { name: { ua: '1.8"', en: '1.8"' }, query_value: "1.8_" },
      { name: { ua: '2.5"', en: '2.5"' }, query_value: "2.5_" },
      { name: { ua: '3.5"', en: '3.5"' }, query_value: "3.5_" },
      {
        name: { ua: "Apple proprietary", en: "Apple proprietary" },
        query_value: "apple_proprietary",
      },
      { name: { ua: "Half-Slim", en: "Half-Slim" }, query_value: "half_slim" },
      { name: { ua: "M.2", en: "M.2" }, query_value: "m.2" },
      {
        name: { ua: "PCI Express", en: "PCI Express" },
        query_value: "pci_express",
      },
      { name: { ua: "U.2", en: "U.2" }, query_value: "u.2" },
      { name: { ua: "mSATA", en: "mSATA" }, query_value: "msata" },
    ],
    multiple: false,
  },
  Connection_Interface: {
    name: { ua: "Інтерфейс підключення", en: "Інтерфейс підключення" },
    query_title: "connection_interface",
    html_element: "select",
    select: [
      {
        name: { ua: "PCI Express", en: "PCI Express" },
        query_value: "pci_express",
      },
      { name: { ua: "SAS", en: "SAS" }, query_value: "sas" },
      { name: { ua: "SATA 3.2", en: "SATA 3.2" }, query_value: "sata_3.2" },
      { name: { ua: "SATAI", en: "SATAI" }, query_value: "satai" },
      { name: { ua: "SATAII", en: "SATAII" }, query_value: "sataii" },
      { name: { ua: "SATAIII", en: "SATAIII" }, query_value: "sataiii" },
      {
        name: { ua: "Thunderbolt", en: "Thunderbolt" },
        query_value: "thunderbolt",
      },
      {
        name: { ua: "Thunderbolt 2", en: "Thunderbolt 2" },
        query_value: "thunderbolt_2",
      },
      {
        name: { ua: "Thunderbolt 3", en: "Thunderbolt 3" },
        query_value: "thunderbolt_3",
      },
      {
        name: { ua: "USB Type-A", en: "USB Type-A" },
        query_value: "usb_type_a",
      },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
      { name: { ua: "mSATA", en: "mSATA" }, query_value: "msata" },
      {
        name: { ua: "Fibre Channel", en: "Fibre Channel" },
        query_value: "fibre_channel",
      },
      { name: { ua: "IDE", en: "IDE" }, query_value: "ide" },
      {
        name: { ua: "NL-SAS (Near Line)", en: "NL-SAS (Near Line)" },
        query_value: "nl_sas_near_line",
      },
      { name: { ua: "SCSI", en: "SCSI" }, query_value: "scsi" },
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_2.0" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_3.0" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_3.1" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_3.2" },
      { name: { ua: "Wi-Fi", en: "Wi-Fi" }, query_value: "wi_fi" },
      { name: { ua: "eSATA", en: "eSATA" }, query_value: "esata" },
    ],
    multiple: false,
  },
  Storage_Type: {
    name: { ua: "Тип накопичувача", en: "Тип накопичувача" },
    query_title: "storage_type",
    html_element: "select",
    select: [
      {
        name: { ua: "Внутрішній", en: "Внутрішній" },
        query_value: "vnutrishniy",
      },
      { name: { ua: "Зовнішній", en: "Зовнішній" }, query_value: "zovnishniy" },
    ],
    multiple: false,
  },
  Appointment_Storage: {
    name: { ua: "Призначення", en: "Призначення" },
    query_title: "appointment_storage",
    html_element: "select",
    select: [
      {
        name: { ua: "Для комп'ютера", en: "Для комп'ютера" },
        query_value: "dlya_komp_yutera",
      },
      {
        name: { ua: "Для ноутбука", en: "Для ноутбука" },
        query_value: "dlya_noutbuka",
      },
      {
        name: { ua: "Для серверів", en: "Для серверів" },
        query_value: "dlya_serveriv",
      },
    ],
    multiple: false,
  },
  Memory_Element_Type: {
    name: { ua: "Тип елементів пам'яті", en: "Тип елементів пам'яті" },
    query_title: "memory_element_type",
    html_element: "select",
    select: [
      { name: { ua: "3D NAND", en: "3D NAND" }, query_value: "3d_nand" },
      { name: { ua: "MLC", en: "MLC" }, query_value: "mlc" },
      {
        name: { ua: "MLC 3D NAND", en: "MLC 3D NAND" },
        query_value: "mlc_3d_nand",
      },
      { name: { ua: "QLC", en: "QLC" }, query_value: "qlc" },
      {
        name: { ua: "QLC 3D NAND", en: "QLC 3D NAND" },
        query_value: "qlc_3d_nand",
      },
      { name: { ua: "SLC", en: "SLC" }, query_value: "slc" },
      { name: { ua: "TLC", en: "TLC" }, query_value: "tlc" },
      {
        name: { ua: "TLC 3D NAND", en: "TLC 3D NAND" },
        query_value: "tlc_3d_nand",
      },
      { name: { ua: "V-NAND", en: "V-NAND" }, query_value: "v_nand" },
    ],
    multiple: false,
  },
  CPU_Family: {
    name: { ua: "Сімейство процесора", en: "Сімейство процесора" },
    query_title: "cpu_family",
    html_element: "select",
    select: [
      {
        name: { ua: "AMD A-Series", en: "AMD A-Series" },
        query_value: "amd_a_series",
      },
      {
        name: { ua: "AMD Athlon", en: "AMD Athlon" },
        query_value: "amd_athlon",
      },
      { name: { ua: "AMD EPYC", en: "AMD EPYC" }, query_value: "amd_epyc" },
      {
        name: { ua: "AMD FX-Series", en: "AMD FX-Series" },
        query_value: "amd_fx_series",
      },
      {
        name: { ua: "AMD Opteron", en: "AMD Opteron" },
        query_value: "amd_opteron",
      },
      {
        name: { ua: "AMD Ryzen 3", en: "AMD Ryzen 3" },
        query_value: "amd_ryzen_3",
      },
      {
        name: { ua: "AMD Ryzen 5", en: "AMD Ryzen 5" },
        query_value: "amd_ryzen_5",
      },
      {
        name: { ua: "AMD Ryzen 7", en: "AMD Ryzen 7" },
        query_value: "amd_ryzen_7",
      },
      {
        name: { ua: "AMD Ryzen 9", en: "AMD Ryzen 9" },
        query_value: "amd_ryzen_9",
      },
      {
        name: { ua: "AMD Ryzen Threadripper", en: "AMD Ryzen Threadripper" },
        query_value: "amd_ryzen_threadripper",
      },
      {
        name: { ua: "Intel Celeron", en: "Intel Celeron" },
        query_value: "intel_celeron",
      },
      {
        name: { ua: "Intel Core 2", en: "Intel Core 2" },
        query_value: "intel_core_2",
      },
      {
        name: { ua: "Intel Core i3", en: "Intel Core i3" },
        query_value: "intel_core_i3",
      },
      {
        name: { ua: "Intel Core i5", en: "Intel Core i5" },
        query_value: "intel_core_i5",
      },
      {
        name: { ua: "Intel Core i7", en: "Intel Core i7" },
        query_value: "intel_core_i7",
      },
      {
        name: { ua: "Intel Core i9", en: "Intel Core i9" },
        query_value: "intel_core_i9",
      },
      {
        name: { ua: "Intel Pentium", en: "Intel Pentium" },
        query_value: "intel_pentium",
      },
      {
        name: { ua: "Intel Xeon Bronze", en: "Intel Xeon Bronze" },
        query_value: "intel_xeon_bronze",
      },
      {
        name: { ua: "Intel Xeon E", en: "Intel Xeon E" },
        query_value: "intel_xeon_e",
      },
      {
        name: { ua: "Intel Xeon E3", en: "Intel Xeon E3" },
        query_value: "intel_xeon_e3",
      },
      {
        name: { ua: "Intel Xeon E5", en: "Intel Xeon E5" },
        query_value: "intel_xeon_e5",
      },
      {
        name: { ua: "Intel Xeon E7", en: "Intel Xeon E7" },
        query_value: "intel_xeon_e7",
      },
      {
        name: { ua: "Intel Xeon Gold", en: "Intel Xeon Gold" },
        query_value: "intel_xeon_gold",
      },
      {
        name: { ua: "Intel Xeon Silver", en: "Intel Xeon Silver" },
        query_value: "intel_xeon_silver",
      },
      {
        name: { ua: "Intel Xeon W", en: "Intel Xeon W" },
        query_value: "intel_xeon_w",
      },
      {
        name: { ua: "Intel Xeon X", en: "Intel Xeon X" },
        query_value: "intel_xeon_x",
      },
      { name: { ua: "Phenom", en: "Phenom" }, query_value: "phenom" },
      { name: { ua: "Sempron", en: "Sempron" }, query_value: "sempron" },
    ],
    multiple: false,
  },
  CPU_Connector_Type: {
    name: { ua: "Тип роз'єму", en: "Тип роз'єму" },
    query_title: "connector_type",
    html_element: "select",
    select: [
      {
        name: { ua: "Socket 478", en: "Socket 478" },
        query_value: "socket_478",
      },
      {
        name: { ua: "Socket 604", en: "Socket 604" },
        query_value: "socket_604",
      },
      {
        name: { ua: "Socket 754", en: "Socket 754" },
        query_value: "socket_754",
      },
      {
        name: { ua: "Socket 771", en: "Socket 771" },
        query_value: "socket_771",
      },
      {
        name: { ua: "Socket 775", en: "Socket 775" },
        query_value: "socket_775",
      },
      {
        name: { ua: "Socket 1150", en: "Socket 1150" },
        query_value: "socket_1150",
      },
      {
        name: { ua: "Socket 1151", en: "Socket 1151" },
        query_value: "socket_1151",
      },
      {
        name: { ua: "Socket 1151-V2", en: "Socket 1151-V2" },
        query_value: "socket_1151_v2",
      },
      {
        name: { ua: "Socket 1155", en: "Socket 1155" },
        query_value: "socket_1155",
      },
      {
        name: { ua: "Socket 1156", en: "Socket 1156" },
        query_value: "socket_1156",
      },
      {
        name: { ua: "Socket 1200", en: "Socket 1200" },
        query_value: "socket_1200",
      },
      {
        name: { ua: "Socket 1356", en: "Socket 1356" },
        query_value: "socket_1356",
      },
      {
        name: { ua: "Socket 1366", en: "Socket 1366" },
        query_value: "socket_1366",
      },
      {
        name: { ua: "Socket 1700", en: "Socket 1700" },
        query_value: "socket_1700",
      },
      {
        name: { ua: "Socket 2011", en: "Socket 2011" },
        query_value: "socket_2011",
      },
      {
        name: { ua: "Socket 2011-3", en: "Socket 2011-3" },
        query_value: "socket_2011_3",
      },
      {
        name: { ua: "Socket 2066", en: "Socket 2066" },
        query_value: "socket_2066",
      },
      {
        name: { ua: "Socket 3647", en: "Socket 3647" },
        query_value: "socket_3647",
      },
      {
        name: { ua: "Socket AM1", en: "Socket AM1" },
        query_value: "socket_am1",
      },
      {
        name: { ua: "Socket AM2", en: "Socket AM2" },
        query_value: "socket_am2",
      },
      {
        name: { ua: "Socket AM2+", en: "Socket AM2+" },
        query_value: "socket_am2",
      },
      {
        name: { ua: "Socket AM2+/Socket AM3", en: "Socket AM2+/Socket AM3" },
        query_value: "socket_am2_/socket_am3",
      },
      {
        name: { ua: "Socket AM3", en: "Socket AM3" },
        query_value: "socket_am3",
      },
      {
        name: { ua: "Socket AM3+", en: "Socket AM3+" },
        query_value: "socket_am3",
      },
      {
        name: { ua: "Socket AM4", en: "Socket AM4" },
        query_value: "socket_am4",
      },
      {
        name: { ua: "Socket FM1", en: "Socket FM1" },
        query_value: "socket_fm1",
      },
      {
        name: { ua: "Socket FM2", en: "Socket FM2" },
        query_value: "socket_fm2",
      },
      {
        name: { ua: "Socket FM2+", en: "Socket FM2+" },
        query_value: "socket_fm2",
      },
      { name: { ua: "Socket H5", en: "Socket H5" }, query_value: "socket_h5" },
      { name: { ua: "Socket V", en: "Socket V" }, query_value: "socket_v" },
      {
        name: { ua: "Socket sTR4", en: "Socket sTR4" },
        query_value: "socket_str4",
      },
      {
        name: { ua: "Socket sTRX4", en: "Socket sTRX4" },
        query_value: "socket_strx4",
      },
      {
        name: { ua: "Socket sWRX8", en: "Socket sWRX8" },
        query_value: "socket_swrx8",
      },
      {
        name: { ua: "Розетка AM5", en: "Розетка AM5" },
        query_value: "rozetka_am5",
      },
    ],
    multiple: false,
  },
  Integrated_Graphics: {
    name: { ua: "Інтегрована графіка", en: "Інтегрована графіка" },
    query_title: "integrated_graphics",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без інтегрованої графіки",
          en: "Без інтегрованої графіки",
        },
        query_value: "bez_intehrovanoyi_hrafiky",
      },
      {
        name: { ua: "З інтегрованою графікою", en: "З інтегрованою графікою" },
        query_value: "z_intehrovanoyu_hrafikoyu",
      },
    ],
    multiple: false,
  },
  Number_of_Cores: {
    name: { ua: "Кількість ядер", en: "Кількість ядер" },
    query_title: "number_cores",
    html_element: "select",
    select: [
      { name: { ua: "1", en: "1" }, query_value: "1" },
      { name: { ua: "2", en: "2" }, query_value: "2" },
      { name: { ua: "3", en: "3" }, query_value: "3" },
      { name: { ua: "4", en: "4" }, query_value: "4" },
      { name: { ua: "6", en: "6" }, query_value: "6" },
      { name: { ua: "8", en: "8" }, query_value: "8" },
      { name: { ua: "10", en: "10" }, query_value: "10" },
      { name: { ua: "12", en: "12" }, query_value: "12" },
      { name: { ua: "14", en: "14" }, query_value: "14" },
      { name: { ua: "15", en: "15" }, query_value: "15" },
      { name: { ua: "16", en: "16" }, query_value: "16" },
      { name: { ua: "18", en: "18" }, query_value: "18" },
      { name: { ua: "20", en: "20" }, query_value: "20" },
      { name: { ua: "24", en: "24" }, query_value: "24" },
      { name: { ua: "26", en: "26" }, query_value: "26" },
      { name: { ua: "28", en: "28" }, query_value: "28" },
      { name: { ua: "32", en: "32" }, query_value: "32" },
      { name: { ua: "64", en: "64" }, query_value: "64" },
    ],
    multiple: false,
  },
  Type_of_Packaging: {
    name: { ua: "Тип упаковки", en: "Тип упаковки" },
    query_title: "type_of_packaging",
    html_element: "select",
    select: [
      { name: { ua: "BOX", en: "BOX" }, query_value: "box" },
      { name: { ua: "Tray", en: "Tray" }, query_value: "tray" },
    ],
    multiple: false,
  },
  CPU_Clock_Speed: {
    name: { ua: "Тактова частота процесора", en: "Тактова частота процесора" },
    query_title: "cpu_clock_speed",
    html_element: "select",
    select: [
      { name: { ua: "2.0 ГГц", en: "2.0 ГГц" }, query_value: "2.0_hhts" },
      { name: { ua: "2.1 ГГц", en: "2.1 ГГц" }, query_value: "2.1_hhts" },
      { name: { ua: "2.2 ГГц", en: "2.2 ГГц" }, query_value: "2.2_hhts" },
      { name: { ua: "2.3 ГГц", en: "2.3 ГГц" }, query_value: "2.3_hhts" },
      { name: { ua: "2.4 ГГц", en: "2.4 ГГц" }, query_value: "2.4_hhts" },
      { name: { ua: "2.5 ГГц", en: "2.5 ГГц" }, query_value: "2.5_hhts" },
      { name: { ua: "2.6 ГГц", en: "2.6 ГГц" }, query_value: "2.6_hhts" },
      { name: { ua: "2.7 ГГц", en: "2.7 ГГц" }, query_value: "2.7_hhts" },
      { name: { ua: "2.8 ГГц", en: "2.8 ГГц" }, query_value: "2.8_hhts" },
      { name: { ua: "2.9 ГГц", en: "2.9 ГГц" }, query_value: "2.9_hhts" },
      { name: { ua: "3.0 ГГц", en: "3.0 ГГц" }, query_value: "3.0_hhts" },
    ],
    multiple: false,
  },
  CPU_Unlocked_Multiplier: {
    name: { ua: "Розблокований помножува", en: "Розблокований помножува" },
    query_title: "cpu_unlocked_multiplier",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без розблокованого множника",
          en: "Без розблокованого множника",
        },
        query_value: "bez_rozblokovanoho_mnozhnyka",
      },
      {
        name: {
          ua: "З розблокованим множником",
          en: "З розблокованим множником",
        },
        query_value: "z_rozblokovanym_mnozhnykom",
      },
    ],
    multiple: false,
  },
  CPU_Appointment: {
    name: { ua: "Призначення", en: "Призначення" },
    query_title: "cpu_appointment",
    html_element: "select",
    select: [
      {
        name: { ua: "Для комп'ютерів", en: "Для комп'ютерів" },
        query_value: "dlya_komp_yuteriv",
      },
      {
        name: { ua: "Для серверів", en: "Для серверів" },
        query_value: "dlya_serveriv",
      },
    ],
    multiple: false,
  },
  Spindle_Rotation_Speed: {
    name: {
      ua: "Швидкість обертання шпинделя",
      en: "Швидкість обертання шпинделя",
    },
    query_title: "spindle_rotation_speed",
    html_element: "select",
    select: [
      {
        name: { ua: "4200 об./хв", en: "4200 об./хв" },
        query_value: "4200_ob./khv",
      },
      {
        name: { ua: "5400 об./хв", en: "5400 об./хв" },
        query_value: "5400_ob./khv",
      },
      {
        name: { ua: "5600 об/хв", en: "5600 об/хв" },
        query_value: "5600_ob/khv",
      },
      {
        name: { ua: "5700 об./хв", en: "5700 об./хв" },
        query_value: "5700_ob./khv",
      },
      {
        name: { ua: "5900 об./хв", en: "5900 об./хв" },
        query_value: "5900_ob./khv",
      },
      {
        name: { ua: "5940 об./хв", en: "5940 об./хв" },
        query_value: "5940_ob./khv",
      },
      {
        name: { ua: "7200 об./хв", en: "7200 об./хв" },
        query_value: "7200_ob./khv",
      },
      {
        name: { ua: "Понад 7200 об./хв", en: "Понад 7200 об./хв" },
        query_value: "ponad_7200_ob./khv",
      },
    ],
    multiple: false,
  },
  Technology_HDD: {
    name: { ua: "Технологія", en: "Технологія" },
    query_title: "technology_hdd",
    html_element: "select",
    select: [
      { name: { ua: "HDD", en: "HDD" }, query_value: "hdd" },
      { name: { ua: "HDD + SSD", en: "HDD + SSD" }, query_value: "hdd_ssd" },
      {
        name: { ua: "SSHD (Гібридні)", en: "SSHD (Гібридні)" },
        query_value: "sshd_hibrydni",
      },
    ],
    multiple: false,
  },
  Buffer_Size: {
    name: { ua: "Обсяг буфера", en: "Обсяг буфера" },
    query_title: "buffer_size",
    html_element: "select",
    select: [
      { name: { ua: "2 МБ", en: "2 МБ" }, query_value: "2_mb" },
      { name: { ua: "4 МБ", en: "4 МБ" }, query_value: "4_mb" },
      { name: { ua: "8 МБ", en: "8 МБ" }, query_value: "8_mb" },
      { name: { ua: "16 МБ", en: "16 МБ" }, query_value: "16_mb" },
      { name: { ua: "32 МБ", en: "32 МБ" }, query_value: "32_mb" },
      { name: { ua: "64 МБ", en: "64 МБ" }, query_value: "64_mb" },
      { name: { ua: "128 МБ", en: "128 МБ" }, query_value: "128_mb" },
      { name: { ua: "256 МБ", en: "256 МБ" }, query_value: "256_mb" },
      { name: { ua: "512 МБ", en: "512 МБ" }, query_value: "512_mb" },
    ],
    multiple: false,
  },
  RAM_Memory_Size: {
    name: { ua: "Обсяг пам'яті", en: "Обсяг пам'яті" },
    query_title: "ram_memory_size",
    html_element: "select",
    select: [
      { name: { ua: "32 МБ", en: "32 МБ" }, query_value: "32_mb" },
      { name: { ua: "256 МБ", en: "256 МБ" }, query_value: "256_mb" },
      { name: { ua: "512 МБ", en: "512 МБ" }, query_value: "512_mb" },
      { name: { ua: "1 ГБ", en: "1 ГБ" }, query_value: "1_hb" },
      { name: { ua: "2 ГБ", en: "2 ГБ" }, query_value: "2_hb" },
      { name: { ua: "4 ГБ", en: "4 ГБ" }, query_value: "4_hb" },
      { name: { ua: "6 ГБ", en: "6 ГБ" }, query_value: "6_hb" },
      { name: { ua: "8 ГБ", en: "8 ГБ" }, query_value: "8_hb" },
      { name: { ua: "12 ГБ", en: "12 ГБ" }, query_value: "12_hb" },
      { name: { ua: "16 ГБ", en: "16 ГБ" }, query_value: "16_hb" },
      { name: { ua: "24 ГБ", en: "24 ГБ" }, query_value: "24_hb" },
      { name: { ua: "32 ГБ", en: "32 ГБ" }, query_value: "32_hb" },
      { name: { ua: "64 ГБ", en: "64 ГБ" }, query_value: "64_hb" },
      { name: { ua: "128 ГБ", en: "128 ГБ" }, query_value: "128_hb" },
      { name: { ua: "256 ГБ", en: "256 ГБ" }, query_value: "256_hb" },
    ],
    multiple: false,
  },
  RAM_Memory_Type: {
    name: { ua: "Тип пам'яті", en: "Тип пам'яті" },
    query_title: "ram_memory_type",
    html_element: "select",
    select: [
      { name: { ua: "DDR SDRAM", en: "DDR SDRAM" }, query_value: "ddr_sdram" },
      {
        name: { ua: "DDR2 SDRAM", en: "DDR2 SDRAM" },
        query_value: "ddr2_sdram",
      },
      {
        name: { ua: "DDR3 SDRAM", en: "DDR3 SDRAM" },
        query_value: "ddr3_sdram",
      },
      {
        name: { ua: "DDR3L SDRAM", en: "DDR3L SDRAM" },
        query_value: "ddr3l_sdram",
      },
      { name: { ua: "DDR4 DIMM", en: "DDR4 DIMM" }, query_value: "ddr4_dimm" },
      {
        name: { ua: "DDR4 SDRAM", en: "DDR4 SDRAM" },
        query_value: "ddr4_sdram",
      },
      {
        name: { ua: "DDR5 SDRAM", en: "DDR5 SDRAM" },
        query_value: "ddr5_sdram",
      },
      { name: { ua: "DIMM DDR3", en: "DIMM DDR3" }, query_value: "dimm_ddr3" },
      { name: { ua: "GDDR5", en: "GDDR5" }, query_value: "gddr5" },
      {
        name: { ua: "SODIMM DDR", en: "SODIMM DDR" },
        query_value: "sodimm_ddr",
      },
      {
        name: { ua: "SODIMM DDR2", en: "SODIMM DDR2" },
        query_value: "sodimm_ddr2",
      },
      {
        name: { ua: "SODIMM DDR3", en: "SODIMM DDR3" },
        query_value: "sodimm_ddr3",
      },
      {
        name: { ua: "SODIMM DDR3L", en: "SODIMM DDR3L" },
        query_value: "sodimm_ddr3l",
      },
      {
        name: { ua: "SODIMM DDR4", en: "SODIMM DDR4" },
        query_value: "sodimm_ddr4",
      },
      {
        name: { ua: "SODIMM DDR5", en: "SODIMM DDR5" },
        query_value: "sodimm_ddr5",
      },
    ],
    multiple: false,
  },
  Memory_Frequency: {
    name: { ua: "Частота пам'яті", en: "Частота пам'яті" },
    query_title: "memory_frequency",
    html_element: "select",
    select: [
      { name: { ua: "133 МГц", en: "133 МГц" }, query_value: "133_mhts" },
      { name: { ua: "300 МГц", en: "300 МГц" }, query_value: "300_mhts" },
      { name: { ua: "333 МГц", en: "333 МГц" }, query_value: "333_mhts" },
      { name: { ua: "400 МГц", en: "400 МГц" }, query_value: "400_mhts" },
      { name: { ua: "533 МГц", en: "533 МГц" }, query_value: "533_mhts" },
      { name: { ua: "667 МГц", en: "667 МГц" }, query_value: "667_mhts" },
      { name: { ua: "800 МГц", en: "800 МГц" }, query_value: "800_mhts" },
      { name: { ua: "900 МГц", en: "900 МГц" }, query_value: "900_mhts" },
      { name: { ua: "1000 МГц", en: "1000 МГц" }, query_value: "1000_mhts" },
      { name: { ua: "1066 МГц", en: "1066 МГц" }, query_value: "1066_mhts" },
      { name: { ua: "1067 МГц", en: "1067 МГц" }, query_value: "1067_mhts" },
      { name: { ua: "1333 МГц", en: "1333 МГц" }, query_value: "1333_mhts" },
      { name: { ua: "1600 МГц", en: "1600 МГц" }, query_value: "1600_mhts" },
      { name: { ua: "1800 МГц", en: "1800 МГц" }, query_value: "1800_mhts" },
      { name: { ua: "1866 МГц", en: "1866 МГц" }, query_value: "1866_mhts" },
      { name: { ua: "2000 МГц", en: "2000 МГц" }, query_value: "2000_mhts" },
      { name: { ua: "2133 МГц", en: "2133 МГц" }, query_value: "2133_mhts" },
      { name: { ua: "2400 МГц", en: "2400 МГц" }, query_value: "2400_mhts" },
      { name: { ua: "2666 МГц", en: "2666 МГц" }, query_value: "2666_mhts" },
      { name: { ua: "2800 МГц", en: "2800 МГц" }, query_value: "2800_mhts" },
      { name: { ua: "2933 МГц", en: "2933 МГц" }, query_value: "2933_mhts" },
      { name: { ua: "3000 МГц", en: "3000 МГц" }, query_value: "3000_mhts" },
      { name: { ua: "3200 МГц", en: "3200 МГц" }, query_value: "3200_mhts" },
      { name: { ua: "3333 МГц", en: "3333 МГц" }, query_value: "3333_mhts" },
      { name: { ua: "3400 МГц", en: "3400 МГц" }, query_value: "3400_mhts" },
      { name: { ua: "3466 МГц", en: "3466 МГц" }, query_value: "3466_mhts" },
      { name: { ua: "3600 МГц", en: "3600 МГц" }, query_value: "3600_mhts" },
      { name: { ua: "3733 МГц", en: "3733 МГц" }, query_value: "3733_mhts" },
      { name: { ua: "3866 МГц", en: "3866 МГц" }, query_value: "3866_mhts" },
      { name: { ua: "4000 МГц", en: "4000 МГц" }, query_value: "4000_mhts" },
      { name: { ua: "4133 МГц", en: "4133 МГц" }, query_value: "4133_mhts" },
      { name: { ua: "4266 МГц", en: "4266 МГц" }, query_value: "4266_mhts" },
      { name: { ua: "4333 МГц", en: "4333 МГц" }, query_value: "4333_mhts" },
      { name: { ua: "4400 МГц", en: "4400 МГц" }, query_value: "4400_mhts" },
      { name: { ua: "4600 МГц", en: "4600 МГц" }, query_value: "4600_mhts" },
      { name: { ua: "4800 МГц", en: "4800 МГц" }, query_value: "4800_mhts" },
      { name: { ua: "5000 МГц", en: "5000 МГц" }, query_value: "5000_mhts" },
      { name: { ua: "5133 МГц", en: "5133 МГц" }, query_value: "5133_mhts" },
      { name: { ua: "5200 МГц", en: "5200 МГц" }, query_value: "5200_mhts" },
      { name: { ua: "5333 МГц", en: "5333 МГц" }, query_value: "5333_mhts" },
      { name: { ua: "5600 МГц", en: "5600 МГц" }, query_value: "5600_mhts" },
      { name: { ua: "6000 МГц", en: "6000 МГц" }, query_value: "6000_mhts" },
      { name: { ua: "6200 МГц", en: "6200 МГц" }, query_value: "6200_mhts" },
      { name: { ua: "6400 МГц", en: "6400 МГц" }, query_value: "6400_mhts" },
      { name: { ua: "7200 МГц", en: "7200 МГц" }, query_value: "7200_mhts" },
      { name: { ua: "7600 МГц", en: "7600 МГц" }, query_value: "7600_mhts" },
    ],
    multiple: false,
  },
  Number_of_Slats: {
    name: { ua: "Кількість планок", en: "Кількість планок" },
    query_title: "number_of_slats",
    html_element: "select",
    select: [
      { name: { ua: "1", en: "1" }, query_value: "1" },
      { name: { ua: "2", en: "2" }, query_value: "2" },
      { name: { ua: "3", en: "3" }, query_value: "3" },
      { name: { ua: "4", en: "4" }, query_value: "4" },
      { name: { ua: "8", en: "8" }, query_value: "8" },
    ],
    multiple: false,
  },
  Memory_Timing_Scheme: {
    name: { ua: "Кількість планок", en: "Кількість планок" },
    query_title: "memory_timing_scheme",
    html_element: "select",
    select: [
      { name: { ua: "CL3", en: "CL3" }, query_value: "cl3" },
      { name: { ua: "CL5", en: "CL5" }, query_value: "cl5" },
      { name: { ua: "CL6", en: "CL6" }, query_value: "cl6" },
      { name: { ua: "CL7", en: "CL7" }, query_value: "cl7" },
      { name: { ua: "CL8", en: "CL8" }, query_value: "cl8" },
      { name: { ua: "CL9", en: "CL9" }, query_value: "cl9" },
      { name: { ua: "CL10", en: "CL10" }, query_value: "cl10" },
      { name: { ua: "CL11", en: "CL11" }, query_value: "cl11" },
      { name: { ua: "CL12", en: "CL12" }, query_value: "cl12" },
      { name: { ua: "CL13", en: "CL13" }, query_value: "cl13" },
      { name: { ua: "CL14", en: "CL14" }, query_value: "cl14" },
      { name: { ua: "CL15", en: "CL15" }, query_value: "cl15" },
      { name: { ua: "CL16", en: "CL16" }, query_value: "cl16" },
      { name: { ua: "CL17", en: "CL17" }, query_value: "cl17" },
      { name: { ua: "CL18", en: "CL18" }, query_value: "cl18" },
      { name: { ua: "CL19", en: "CL19" }, query_value: "cl19" },
      { name: { ua: "CL20", en: "CL20" }, query_value: "cl20" },
      { name: { ua: "CL21", en: "CL21" }, query_value: "cl21" },
      { name: { ua: "CL22", en: "CL22" }, query_value: "cl22" },
      { name: { ua: "CL30", en: "CL30" }, query_value: "cl30" },
      { name: { ua: "CL32", en: "CL32" }, query_value: "cl32" },
      { name: { ua: "CL34", en: "CL34" }, query_value: "cl34" },
      { name: { ua: "CL36", en: "CL36" }, query_value: "cl36" },
      { name: { ua: "CL38", en: "CL38" }, query_value: "cl38" },
      { name: { ua: "CL40", en: "CL40" }, query_value: "cl40" },
    ],
    multiple: false,
  },
  Socket: {
    name: { ua: "Сокет", en: "Сокет" },
    query_title: "socket",
    html_element: "select",
    select: [
      {
        name: { ua: "Integrated CPU", en: "Integrated CPU" },
        query_value: "integrated_cpu",
      },
      {
        name: { ua: "Socket 478", en: "Socket 478" },
        query_value: "socket_478",
      },
      {
        name: { ua: "Socket 604", en: "Socket 604" },
        query_value: "socket_604",
      },
      {
        name: { ua: "Socket 754", en: "Socket 754" },
        query_value: "socket_754",
      },
      {
        name: { ua: "Socket 771", en: "Socket 771" },
        query_value: "socket_771",
      },
      {
        name: { ua: "Socket 775", en: "Socket 775" },
        query_value: "socket_775",
      },
      {
        name: { ua: "Socket 1150", en: "Socket 1150" },
        query_value: "socket_1150",
      },
      {
        name: { ua: "Socket 1151", en: "Socket 1151" },
        query_value: "socket_1151",
      },
      {
        name: { ua: "Socket 1151-V2", en: "Socket 1151-V2" },
        query_value: "socket_1151_v2",
      },
      {
        name: { ua: "Socket 1155", en: "Socket 1155" },
        query_value: "socket_1155",
      },
      {
        name: { ua: "Socket 1156", en: "Socket 1156" },
        query_value: "socket_1156",
      },
      {
        name: { ua: "Socket 1200", en: "Socket 1200" },
        query_value: "socket_1200",
      },
      {
        name: { ua: "Socket 1356", en: "Socket 1356" },
        query_value: "socket_1356",
      },
      {
        name: { ua: "Socket 1366", en: "Socket 1366" },
        query_value: "socket_1366",
      },
      {
        name: { ua: "Socket 1700", en: "Socket 1700" },
        query_value: "socket_1700",
      },
      {
        name: { ua: "Socket 2011", en: "Socket 2011" },
        query_value: "socket_2011",
      },
      {
        name: { ua: "Socket 2011-3", en: "Socket 2011-3" },
        query_value: "socket_2011_3",
      },
      {
        name: { ua: "Socket 2066", en: "Socket 2066" },
        query_value: "socket_2066",
      },
      {
        name: { ua: "Socket 3647", en: "Socket 3647" },
        query_value: "socket_3647",
      },
      {
        name: { ua: "Socket AM1", en: "Socket AM1" },
        query_value: "socket_am1",
      },
      {
        name: { ua: "Socket AM2", en: "Socket AM2" },
        query_value: "socket_am2",
      },
      {
        name: { ua: "Socket AM2+", en: "Socket AM2+" },
        query_value: "socket_am2",
      },
      {
        name: { ua: "Socket AM2+/Socket AM3", en: "Socket AM2+/Socket AM3" },
        query_value: "socket_am2_/socket_am3",
      },
      {
        name: { ua: "Socket AM3", en: "Socket AM3" },
        query_value: "socket_am3",
      },
      {
        name: { ua: "Socket AM3+", en: "Socket AM3+" },
        query_value: "socket_am3",
      },
      {
        name: { ua: "Socket AM4", en: "Socket AM4" },
        query_value: "socket_am4",
      },
      {
        name: { ua: "Socket FM1", en: "Socket FM1" },
        query_value: "socket_fm1",
      },
      {
        name: { ua: "Socket FM2", en: "Socket FM2" },
        query_value: "socket_fm2",
      },
      {
        name: { ua: "Socket FM2+", en: "Socket FM2+" },
        query_value: "socket_fm2",
      },
      { name: { ua: "Socket H5", en: "Socket H5" }, query_value: "socket_h5" },
      { name: { ua: "Socket V", en: "Socket V" }, query_value: "socket_v" },
      {
        name: { ua: "Socket sTR4", en: "Socket sTR4" },
        query_value: "socket_str4",
      },
      {
        name: { ua: "Socket sTRX4", en: "Socket sTRX4" },
        query_value: "socket_strx4",
      },
      {
        name: { ua: "Socket sWRX8", en: "Socket sWRX8" },
        query_value: "socket_swrx8",
      },
    ],
    multiple: false,
  },
  Chipset: {
    name: { ua: "Чипсет (Північний міст)", en: "Чипсет (Північний міст)" },
    query_title: "chipset",
    html_element: "select",
    select: [
      { name: { ua: "AMD 690G", en: "AMD 690G" }, query_value: "amd_690g" },
      { name: { ua: "AMD 740G", en: "AMD 740G" }, query_value: "amd_740g" },
      { name: { ua: "AMD 760G", en: "AMD 760G" }, query_value: "amd_760g" },
      { name: { ua: "AMD 770", en: "AMD 770" }, query_value: "amd_770" },
      { name: { ua: "AMD 780", en: "AMD 780" }, query_value: "amd_780" },
      { name: { ua: "AMD 785G", en: "AMD 785G" }, query_value: "amd_785g" },
      { name: { ua: "AMD 880G", en: "AMD 880G" }, query_value: "amd_880g" },
      { name: { ua: "AMD 970", en: "AMD 970" }, query_value: "amd_970" },
      { name: { ua: "AMD A320", en: "AMD A320" }, query_value: "amd_a320" },
      { name: { ua: "AMD A50M", en: "AMD A50M" }, query_value: "amd_a50m" },
      { name: { ua: "AMD A520", en: "AMD A520" }, query_value: "amd_a520" },
      { name: { ua: "AMD A55", en: "AMD A55" }, query_value: "amd_a55" },
      { name: { ua: "AMD A68", en: "AMD A68" }, query_value: "amd_a68" },
      { name: { ua: "AMD A68H", en: "AMD A68H" }, query_value: "amd_a68h" },
      { name: { ua: "AMD A70M", en: "AMD A70M" }, query_value: "amd_a70m" },
      { name: { ua: "AMD A75", en: "AMD A75" }, query_value: "amd_a75" },
      { name: { ua: "AMD A88", en: "AMD A88" }, query_value: "amd_a88" },
      { name: { ua: "AMD A88X", en: "AMD A88X" }, query_value: "amd_a88x" },
      { name: { ua: "AMD B350", en: "AMD B350" }, query_value: "amd_b350" },
      { name: { ua: "AMD B450", en: "AMD B450" }, query_value: "amd_b450" },
      { name: { ua: "AMD B550", en: "AMD B550" }, query_value: "amd_b550" },
      { name: { ua: "AMD B650", en: "AMD B650" }, query_value: "amd_b650" },
      {
        name: { ua: "AMD E1-2500", en: "AMD E1-2500" },
        query_value: "amd_e1_2500",
      },
      { name: { ua: "AMD TRX40", en: "AMD TRX40" }, query_value: "amd_trx40" },
      { name: { ua: "AMD X370", en: "AMD X370" }, query_value: "amd_x370" },
      { name: { ua: "AMD X399", en: "AMD X399" }, query_value: "amd_x399" },
      { name: { ua: "AMD X470", en: "AMD X470" }, query_value: "amd_x470" },
      { name: { ua: "AMD X570", en: "AMD X570" }, query_value: "amd_x570" },
      { name: { ua: "AMD X670", en: "AMD X670" }, query_value: "amd_x670" },
      { name: { ua: "C612", en: "C612" }, query_value: "c612" },
      {
        name: { ua: "Intel 5100", en: "Intel 5100" },
        query_value: "intel_5100",
      },
      {
        name: { ua: "Intel 865G", en: "Intel 865G" },
        query_value: "intel_865g",
      },
      {
        name: { ua: "Intel 915GV", en: "Intel 915GV" },
        query_value: "intel_915gv",
      },
      {
        name: { ua: "Intel 945PL", en: "Intel 945PL" },
        query_value: "intel_945pl",
      },
      {
        name: { ua: "Intel B150", en: "Intel B150" },
        query_value: "intel_b150",
      },
      {
        name: { ua: "Intel B250", en: "Intel B250" },
        query_value: "intel_b250",
      },
      {
        name: { ua: "Intel B360", en: "Intel B360" },
        query_value: "intel_b360",
      },
      {
        name: { ua: "Intel B365", en: "Intel B365" },
        query_value: "intel_b365",
      },
      {
        name: { ua: "Intel B460", en: "Intel B460" },
        query_value: "intel_b460",
      },
      {
        name: { ua: "Intel B560", en: "Intel B560" },
        query_value: "intel_b560",
      },
      {
        name: { ua: "Intel B660", en: "Intel B660" },
        query_value: "intel_b660",
      },
      { name: { ua: "Intel B75", en: "Intel B75" }, query_value: "intel_b75" },
      {
        name: { ua: "Intel B760", en: "Intel B760" },
        query_value: "intel_b760",
      },
      { name: { ua: "Intel B85", en: "Intel B85" }, query_value: "intel_b85" },
      {
        name: { ua: "Intel C226", en: "Intel C226" },
        query_value: "intel_c226",
      },
      {
        name: { ua: "Intel C232", en: "Intel C232" },
        query_value: "intel_c232",
      },
      {
        name: { ua: "Intel C236", en: "Intel C236" },
        query_value: "intel_c236",
      },
      {
        name: { ua: "Intel C242", en: "Intel C242" },
        query_value: "intel_c242",
      },
      {
        name: { ua: "Intel C246", en: "Intel C246" },
        query_value: "intel_c246",
      },
      {
        name: { ua: "Intel C252", en: "Intel C252" },
        query_value: "intel_c252",
      },
      {
        name: { ua: "Intel C422", en: "Intel C422" },
        query_value: "intel_c422",
      },
      {
        name: { ua: "Intel C600", en: "Intel C600" },
        query_value: "intel_c600",
      },
      {
        name: { ua: "Intel C602", en: "Intel C602" },
        query_value: "intel_c602",
      },
      {
        name: { ua: "Intel C621", en: "Intel C621" },
        query_value: "intel_c621",
      },
      { name: { ua: "Intel G31", en: "Intel G31" }, query_value: "intel_g31" },
      { name: { ua: "Intel G41", en: "Intel G41" }, query_value: "intel_g41" },
      {
        name: { ua: "Intel H110", en: "Intel H110" },
        query_value: "intel_h110",
      },
      {
        name: { ua: "Intel H170", en: "Intel H170" },
        query_value: "intel_h170",
      },
      {
        name: { ua: "Intel H270", en: "Intel H270" },
        query_value: "intel_h270",
      },
      {
        name: { ua: "Intel H310", en: "Intel H310" },
        query_value: "intel_h310",
      },
      {
        name: { ua: "Intel H370", en: "Intel H370" },
        query_value: "intel_h370",
      },
      {
        name: { ua: "Intel H410", en: "Intel H410" },
        query_value: "intel_h410",
      },
      {
        name: { ua: "Intel H470", en: "Intel H470" },
        query_value: "intel_h470",
      },
      {
        name: { ua: "Intel H510", en: "Intel H510" },
        query_value: "intel_h510",
      },
      { name: { ua: "Intel H55", en: "Intel H55" }, query_value: "intel_h55" },
      {
        name: { ua: "Intel H570", en: "Intel H570" },
        query_value: "intel_h570",
      },
      { name: { ua: "Intel H61", en: "Intel H61" }, query_value: "intel_h61" },
      {
        name: { ua: "Intel H610", en: "Intel H610" },
        query_value: "intel_h610",
      },
      { name: { ua: "Intel H67", en: "Intel H67" }, query_value: "intel_h67" },
      {
        name: { ua: "Intel H670", en: "Intel H670" },
        query_value: "intel_h670",
      },
      { name: { ua: "Intel H77", en: "Intel H77" }, query_value: "intel_h77" },
      {
        name: { ua: "Intel H770", en: "Intel H770" },
        query_value: "intel_h770",
      },
      { name: { ua: "Intel H81", en: "Intel H81" }, query_value: "intel_h81" },
      { name: { ua: "Intel H87", en: "Intel H87" }, query_value: "intel_h87" },
      { name: { ua: "Intel H97", en: "Intel H97" }, query_value: "intel_h97" },
      {
        name: { ua: "Intel HM70", en: "Intel HM70" },
        query_value: "intel_hm70",
      },
      {
        name: { ua: "Intel J4125", en: "Intel J4125" },
        query_value: "intel_j4125",
      },
      {
        name: { ua: "Intel J5040", en: "Intel J5040" },
        query_value: "intel_j5040",
      },
      { name: { ua: "Intel P43", en: "Intel P43" }, query_value: "intel_p43" },
      {
        name: { ua: "Intel Q270", en: "Intel Q270" },
        query_value: "intel_q270",
      },
      {
        name: { ua: "Intel Q370", en: "Intel Q370" },
        query_value: "intel_q370",
      },
      {
        name: { ua: "Intel Q43 Express", en: "Intel Q43 Express" },
        query_value: "intel_q43_express",
      },
      { name: { ua: "Intel Q45", en: "Intel Q45" }, query_value: "intel_q45" },
      {
        name: { ua: "Intel Q470", en: "Intel Q470" },
        query_value: "intel_q470",
      },
      {
        name: { ua: "Intel Q570", en: "Intel Q570" },
        query_value: "intel_q570",
      },
      { name: { ua: "Intel Q77", en: "Intel Q77" }, query_value: "intel_q77" },
      { name: { ua: "Intel Q87", en: "Intel Q87" }, query_value: "intel_q87" },
      {
        name: { ua: "Intel W480", en: "Intel W480" },
        query_value: "intel_w480",
      },
      {
        name: { ua: "Intel X299", en: "Intel X299" },
        query_value: "intel_x299",
      },
      { name: { ua: "Intel X58", en: "Intel X58" }, query_value: "intel_x58" },
      { name: { ua: "Intel X79", en: "Intel X79" }, query_value: "intel_x79" },
      { name: { ua: "Intel X99", en: "Intel X99" }, query_value: "intel_x99" },
      {
        name: { ua: "Intel Z170", en: "Intel Z170" },
        query_value: "intel_z170",
      },
      {
        name: { ua: "Intel Z270", en: "Intel Z270" },
        query_value: "intel_z270",
      },
      {
        name: { ua: "Intel Z370", en: "Intel Z370" },
        query_value: "intel_z370",
      },
      {
        name: { ua: "Intel Z390", en: "Intel Z390" },
        query_value: "intel_z390",
      },
      {
        name: { ua: "Intel Z490", en: "Intel Z490" },
        query_value: "intel_z490",
      },
      {
        name: { ua: "Intel Z590", en: "Intel Z590" },
        query_value: "intel_z590",
      },
      { name: { ua: "Intel Z68", en: "Intel Z68" }, query_value: "intel_z68" },
      {
        name: { ua: "Intel Z690", en: "Intel Z690" },
        query_value: "intel_z690",
      },
      { name: { ua: "Intel Z77", en: "Intel Z77" }, query_value: "intel_z77" },
      {
        name: { ua: "Intel Z790", en: "Intel Z790" },
        query_value: "intel_z790",
      },
      { name: { ua: "Intel Z87", en: "Intel Z87" }, query_value: "intel_z87" },
      { name: { ua: "Intel Z97", en: "Intel Z97" }, query_value: "intel_z97" },
      {
        name: { ua: "Intel С612", en: "Intel С612" },
        query_value: "intel_s612",
      },
      {
        name: { ua: "Nvidia GeForce 7025", en: "Nvidia GeForce 7025" },
        query_value: "nvidia_geforce_7025",
      },
      { name: { ua: "SB710", en: "SB710" }, query_value: "sb710" },
      { name: { ua: "SoC", en: "SoC" }, query_value: "soc" },
      {
        name: {
          ua: "Вбудований в APUs AMD Sempron&Athlon серій",
          en: "Вбудований в APUs AMD Sempron&Athlon серій",
        },
        query_value: "vbudovanyy_v_apus_amd_sempron&athlon_seriy",
      },
    ],
    multiple: false,
  },
  Memory_Support: {
    name: { ua: "Підтримка пам'яті", en: "Підтримка пам'яті" },
    query_title: "memory_support",
    html_element: "select",
    select: [
      { name: { ua: "DDR SDRAM", en: "DDR SDRAM" }, query_value: "ddr_sdram" },
      {
        name: { ua: "DDR2 SDRAM", en: "DDR2 SDRAM" },
        query_value: "ddr2_sdram",
      },
      {
        name: { ua: "DDR3 SDRAM", en: "DDR3 SDRAM" },
        query_value: "ddr3_sdram",
      },
      {
        name: { ua: "DDR3L SDRAM", en: "DDR3L SDRAM" },
        query_value: "ddr3l_sdram",
      },
      { name: { ua: "DDR4 DIMM", en: "DDR4 DIMM" }, query_value: "ddr4_dimm" },
      {
        name: { ua: "DDR4 SDRAM", en: "DDR4 SDRAM" },
        query_value: "ddr4_sdram",
      },
      {
        name: { ua: "DDR5 SDRAM", en: "DDR5 SDRAM" },
        query_value: "ddr5_sdram",
      },
      { name: { ua: "DIMM DDR3", en: "DIMM DDR3" }, query_value: "dimm_ddr3" },
      { name: { ua: "GDDR5", en: "GDDR5" }, query_value: "gddr5" },
      {
        name: { ua: "SODIMM DDR", en: "SODIMM DDR" },
        query_value: "sodimm_ddr",
      },
      {
        name: { ua: "SODIMM DDR2", en: "SODIMM DDR2" },
        query_value: "sodimm_ddr2",
      },
      {
        name: { ua: "SODIMM DDR3", en: "SODIMM DDR3" },
        query_value: "sodimm_ddr3",
      },
      {
        name: { ua: "SODIMM DDR3L", en: "SODIMM DDR3L" },
        query_value: "sodimm_ddr3l",
      },
      {
        name: { ua: "SODIMM DDR4", en: "SODIMM DDR4" },
        query_value: "sodimm_ddr4",
      },
      {
        name: { ua: "SODIMM DDR5", en: "SODIMM DDR5" },
        query_value: "sodimm_ddr5",
      },
    ],
    multiple: false,
  },
  Form_Factor_Motherboard: {
    name: {
      ua: "Форм-фактор Материнської плати",
      en: "Форм-фактор Материнської плати",
    },
    query_title: "form_factor_motherboard",
    html_element: "select",
    select: [
      { name: { ua: "ATX", en: "ATX" }, query_value: "atx" },
      { name: { ua: "CEB", en: "CEB" }, query_value: "ceb" },
      { name: { ua: "EATX", en: "EATX" }, query_value: "eatx" },
      { name: { ua: "EEB", en: "EEB" }, query_value: "eeb" },
      { name: { ua: "MicroATX", en: "MicroATX" }, query_value: "microatx" },
      { name: { ua: "MiniDTX", en: "MiniDTX" }, query_value: "minidtx" },
      { name: { ua: "MiniITX", en: "MiniITX" }, query_value: "miniitx" },
      { name: { ua: "SBC", en: "SBC" }, query_value: "sbc" },
      { name: { ua: "XL-ATX", en: "XL-ATX" }, query_value: "xl_atx" },
    ],
    multiple: false,
  },
  Embedded_Video: {
    name: { ua: "Вбудоване відео", en: "Вбудоване відео" },
    query_title: "embedded_video",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без підтримки вбудованого відео",
          en: "Без підтримки вбудованого відео",
        },
        query_value: "bez_pidtrymky_vbudovanoho_video",
      },
      {
        name: {
          ua: "З підтримкою відеоядра процесора",
          en: "З підтримкою відеоядра процесора",
        },
        query_value: "z_pidtrymkoyu_videoyadra_protsesora",
      },
    ],
    multiple: false,
  },
  Video_Outputs: {
    name: { ua: "Відеовиходи", en: "Відеовиходи" },
    query_title: "video_outputs",
    html_element: "select",
    select: [
      {
        name: { ua: "D-Sub (VGA)", en: "D-Sub (VGA)" },
        query_value: "d_sub_vga",
      },
      { name: { ua: "DVI", en: "DVI" }, query_value: "dvi" },
      {
        name: { ua: "DisplayPort", en: "DisplayPort" },
        query_value: "displayport",
      },
      { name: { ua: "HDMI", en: "HDMI" }, query_value: "hdmi" },
      {
        name: { ua: "Thunderbolt", en: "Thunderbolt" },
        query_value: "thunderbolt",
      },
    ],
    multiple: true,
  },
  PCI_Express_x16: {
    name: { ua: "PCI Express x16", en: "PCI Express x16" },
    query_title: "pci_express_x16",
    html_element: "select",
    select: [
      { name: { ua: "1 шт", en: "1 шт" }, query_value: "1_sht" },
      { name: { ua: "2 шт", en: "2 шт" }, query_value: "2_sht" },
      { name: { ua: "3 шт", en: "3 шт" }, query_value: "3_sht" },
      { name: { ua: "4 шт", en: "4 шт" }, query_value: "4_sht" },
      { name: { ua: "5 шт", en: "5 шт" }, query_value: "5_sht" },
      { name: { ua: "6 шт", en: "6 шт" }, query_value: "6_sht" },
      { name: { ua: "7 шт", en: "7 шт" }, query_value: "7_sht" },
      { name: { ua: "8 шт", en: "8 шт" }, query_value: "8_sht" },
      { name: { ua: "9 шт", en: "9 шт" }, query_value: "9_sht" },
      { name: { ua: "10 шт", en: "10 шт" }, query_value: "10_sht" },
      { name: { ua: "11 шт", en: "11 шт" }, query_value: "11_sht" },
      { name: { ua: "12 шт", en: "12 шт" }, query_value: "12_sht" },
      {
        name: {
          ua: "Без слота PCI Express x16",
          en: "Без слота PCI Express x16",
        },
        query_value: "bez_slota_pci_express_x16",
      },
    ],
    multiple: false,
  },
  PCI_Express_x1: {
    name: { ua: "PCI Express x1", en: "PCI Express x1" },
    query_title: "pci_express_x1",
    html_element: "select",
    select: [
      { name: { ua: "1 шт", en: "1 шт" }, query_value: "1_sht" },
      { name: { ua: "2 шт", en: "2 шт" }, query_value: "2_sht" },
      { name: { ua: "3 шт", en: "3 шт" }, query_value: "3_sht" },
      { name: { ua: "4 шт", en: "4 шт" }, query_value: "4_sht" },
      { name: { ua: "5 шт", en: "5 шт" }, query_value: "5_sht" },
      { name: { ua: "6 шт", en: "6 шт" }, query_value: "6_sht" },
      { name: { ua: "7 шт", en: "7 шт" }, query_value: "7_sht" },
      { name: { ua: "8 шт", en: "8 шт" }, query_value: "8_sht" },
      { name: { ua: "9 шт", en: "9 шт" }, query_value: "9_sht" },
      { name: { ua: "10 шт", en: "10 шт" }, query_value: "10_sht" },
      { name: { ua: "11 шт", en: "11 шт" }, query_value: "11_sht" },
      { name: { ua: "12 шт", en: "12 шт" }, query_value: "12_sht" },
      {
        name: {
          ua: "Без слота PCI Express x1",
          en: "Без слота PCI Express x1",
        },
        query_value: "bez_slota_pci_express_x1",
      },
    ],
    multiple: false,
  },
  USB: {
    name: { ua: "USB", en: "USB" },
    query_title: "usb",
    html_element: "select",
    select: [
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_2.0" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_3.0" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_3.1" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_3.2" },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
    ],
    multiple: true,
  },
  Protection_Technologies: {
    name: { ua: "Технології захисту", en: "Технології захисту" },
    query_title: "protection_technologies",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Захист від короткого замикання (SCP)",
          en: "Захист від короткого замикання (SCP)",
        },
        query_value: "zakhyst_vid_korotkoho_zamykannya_scp",
      },
      {
        name: {
          ua: "Захист від перевантаження (OLP)",
          en: "Захист від перевантаження (OLP)",
        },
        query_value: "zakhyst_vid_perevantazhennya_olp",
      },
      {
        name: {
          ua: "Захист від перевантаження (OPP)",
          en: "Захист від перевантаження (OPP)",
        },
        query_value: "zakhyst_vid_perevantazhennya_opp",
      },
      {
        name: {
          ua: "Захист від перевантаження через струм (OCP)",
          en: "Захист від перевантаження через струм (OCP)",
        },
        query_value: "zakhyst_vid_perevantazhennya_cherez_strum_ocp",
      },
      {
        name: {
          ua: "Захист від перегрівання (OTP)",
          en: "Захист від перегрівання (OTP)",
        },
        query_value: "zakhyst_vid_perehrivannya_otp",
      },
      {
        name: {
          ua: "Захист від перепадів напруги (OVP/UVP)",
          en: "Захист від перепадів напруги (OVP/UVP)",
        },
        query_value: "zakhyst_vid_perepadiv_napruhy_ovp/uvp",
      },
      {
        name: {
          ua: "Захист від стрибків струму та напруги (SIP)",
          en: "Захист від стрибків струму та напруги (SIP)",
        },
        query_value: "zakhyst_vid_strybkiv_strumu_ta_napruhy_sip",
      },
    ],
    multiple: true,
  },
  Special_Properties: {
    name: { ua: "Особливі властивості", en: "Особливі властивості" },
    query_title: "special_properties",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Автоматичний контроль швидкості вентилятора (AFC)",
          en: "Автоматичний контроль швидкості вентилятора (AFC)",
        },
        query_value: "avtomatychnyy_kontrol'_shvydkosti_ventylyatora_afc",
      },
      {
        name: {
          ua: "Вимкнення СО у разі низького навантаження",
          en: "Вимкнення СО у разі низького навантаження",
        },
        query_value: "vymknennya_so_u_razi_nyz'koho_navantazhennya",
      },
      {
        name: {
          ua: "Модульне під'єднання кабелів",
          en: "Модульне під'єднання кабелів",
        },
        query_value: "modul'ne_pid_yednannya_kabeliv",
      },
      {
        name: {
          ua: "Модульні (з відстібними дротами)",
          en: "Модульні (з відстібними дротами)",
        },
        query_value: "modul'ni_z_vidstibnymy_drotamy",
      },
      { name: { ua: "Підсвітка", en: "Підсвітка" }, query_value: "pidsvitka" },
    ],
    multiple: true,
  },
  Form_Factor_PSU: {
    name: { ua: "Форм-фактор БЖ", en: "Форм-фактор БЖ" },
    query_title: "form_factor_psu",
    html_element: "select",
    select: [
      { name: { ua: "ATX", en: "ATX" }, query_value: "atx" },
      {
        name: { ua: "ATX (PS/2)", en: "ATX (PS/2)" },
        query_value: "atx_ps/2",
      },
      { name: { ua: "BTX", en: "BTX" }, query_value: "btx" },
      { name: { ua: "EPS", en: "EPS" }, query_value: "eps" },
      { name: { ua: "FlexATX", en: "FlexATX" }, query_value: "flexatx" },
      { name: { ua: "ITX", en: "ITX" }, query_value: "itx" },
      { name: { ua: "Micro ATX", en: "Micro ATX" }, query_value: "micro_atx" },
      { name: { ua: "Mini-ITX", en: "Mini-ITX" }, query_value: "mini_itx" },
      { name: { ua: "SFX", en: "SFX" }, query_value: "sfx" },
      { name: { ua: "TFX", en: "TFX" }, query_value: "tfx" },
    ],
    multiple: false,
  },
  PSU_Type: {
    name: { ua: "Тип", en: "Тип" },
    query_title: "psu_type",
    html_element: "select",
    select: [
      {
        name: { ua: "Для геймерів", en: "Для геймерів" },
        query_value: "dlya_heymeriv",
      },
      {
        name: { ua: "Для майнінгу", en: "Для майнінгу" },
        query_value: "dlya_mayninhu",
      },
      { name: { ua: "Зовнішній", en: "Зовнішній" }, query_value: "zovnishniy" },
      {
        name: { ua: "Комп'ютерний", en: "Комп'ютерний" },
        query_value: "komp_yuternyy",
      },
      { name: { ua: "Серверний", en: "Серверний" }, query_value: "servernyy" },
    ],
    multiple: true,
  },
  Maximum_Noise_Level: {
    name: {
      ua: "Максимальний рівень шуму, ДБ",
      en: "Максимальний рівень шуму, ДБ",
    },
    query_title: "maximum_noise_level",
    html_element: "select",
    select: [
      { name: { ua: "До 18", en: "До 18" }, query_value: "do_18" },
      { name: { ua: "18-24", en: "18-24" }, query_value: "18_24" },
      {
        name: { ua: "24 і більше", en: "24 і більше" },
        query_value: "24_i_bil'she",
      },
    ],
    multiple: false,
  },
  Number_of_SATA_Connectors: {
    name: { ua: "Кількість SATA роз'ємів", en: "Кількість SATA роз'ємів" },
    query_title: "number_of_sata_connectors",
    html_element: "select",
    select: [
      { name: { ua: "1", en: "1" }, query_value: "1" },
      { name: { ua: "2", en: "2" }, query_value: "2" },
      { name: { ua: "3-5", en: "3-5" }, query_value: "3_5" },
      { name: { ua: "6-8", en: "6-8" }, query_value: "6_8" },
      { name: { ua: "9-11", en: "9-11" }, query_value: "9_11" },
      { name: { ua: "12-14", en: "12-14" }, query_value: "12_14" },
      {
        name: { ua: "15 і більше", en: "15 і більше" },
        query_value: "15_i_bil'she",
      },
    ],
    multiple: false,
  },
  Cooling_System: {
    name: { ua: "Система охолодження", en: "Система охолодження" },
    query_title: "cooling_system",
    html_element: "select",
    select: [
      { name: { ua: "Активна", en: "Активна" }, query_value: "aktyvna" },
      { name: { ua: "Пасивна", en: "Пасивна" }, query_value: "pasyvna" },
    ],
    multiple: false,
  },
  Housing_Type: {
    name: { ua: "Тип корпусу", en: "Тип корпусу" },
    query_title: "housing_type",
    html_element: "select",
    select: [
      { name: { ua: "Cube Case", en: "Cube Case" }, query_value: "cube_case" },
      { name: { ua: "DeskTop", en: "DeskTop" }, query_value: "desktop" },
      { name: { ua: "Fulltower", en: "Fulltower" }, query_value: "fulltower" },
      { name: { ua: "HTPC", en: "HTPC" }, query_value: "htpc" },
      { name: { ua: "Miditower", en: "Miditower" }, query_value: "miditower" },
      { name: { ua: "Minitower", en: "Minitower" }, query_value: "minitower" },
      { name: { ua: "Rackmount", en: "Rackmount" }, query_value: "rackmount" },
      {
        name: { ua: "Small Form Factor", en: "Small Form Factor" },
        query_value: "small_form_factor",
      },
      {
        name: { ua: "Small Tower", en: "Small Tower" },
        query_value: "small_tower",
      },
      {
        name: { ua: "Supertower", en: "Supertower" },
        query_value: "supertower",
      },
      {
        name: { ua: "Корпус-стіл", en: "Корпус-стіл" },
        query_value: "korpus_stil",
      },
    ],
    multiple: false,
  },
  Features: {
    name: { ua: "Особливості", en: "Особливості" },
    query_title: "features",
    html_element: "select",
    select: [
      {
        name: { ua: "З РК екраном", en: "З РК екраном" },
        query_value: "z_rk_ekranom",
      },
      {
        name: {
          ua: "З безгвинтовим кріпленням",
          en: "З безгвинтовим кріпленням",
        },
        query_value: "z_bezhvyntovym_kriplennyam",
      },
      {
        name: { ua: "З бічним вікном", en: "З бічним вікном" },
        query_value: "z_bichnym_viknom",
      },
      {
        name: {
          ua: "З вертикальним встановленням відеокарти",
          en: "З вертикальним встановленням відеокарти",
        },
        query_value: "z_vertykal'nym_vstanovlennyam_videokarty",
      },
      {
        name: {
          ua: "З знімними кошиками для HDD",
          en: "З знімними кошиками для HDD",
        },
        query_value: "z_znimnymy_koshykamy_dlya_hdd",
      },
      {
        name: { ua: "З пиловим фільтром", en: "З пиловим фільтром" },
        query_value: "z_pylovym_fil'trom",
      },
      {
        name: { ua: "З підсвіткою", en: "З підсвіткою" },
        query_value: "z_pidsvitkoyu",
      },
      {
        name: { ua: "З підтримкою СВО", en: "З підтримкою СВО" },
        query_value: "z_pidtrymkoyu_svo",
      },
      {
        name: {
          ua: "З системою організації кабелів",
          en: "З системою організації кабелів",
        },
        query_value: "z_systemoyu_orhanizatsiyi_kabeliv",
      },
    ],
    multiple: true,
  },
  PSU_Location: {
    name: { ua: "Розташування БЖ", en: "Розташування БЖ" },
    query_title: "psu_location",
    html_element: "select",
    select: [
      { name: { ua: "Верхнє", en: "Верхнє" }, query_value: "verkhnye" },
      { name: { ua: "Нижнє", en: "Нижнє" }, query_value: "nyzhnye" },
    ],
    multiple: false,
  },
  Functionality_Connectors_Front_Panel: {
    name: {
      ua: "Функціонал і роз'єми лицьовій панелі",
      en: "Функціонал і роз'єми лицьовій панелі",
    },
    query_title: "functionality_connectors_front_panel",
    html_element: "select",
    select: [
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_2.0" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_3.0" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_3.1" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_3.2" },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
      { name: { ua: "eSATA", en: "eSATA" }, query_value: "esata" },
      {
        name: { ua: "Вихід для навушників", en: "Вихід для навушників" },
        query_value: "vykhid_dlya_navushnykiv",
      },
      {
        name: { ua: "Вхід для мікрофона", en: "Вхід для мікрофона" },
        query_value: "vkhid_dlya_mikrofona",
      },
      { name: { ua: "Кардридер", en: "Кардридер" }, query_value: "kardryder" },
      {
        name: { ua: "Керування вентиляторами", en: "Керування вентиляторами" },
        query_value: "keruvannya_ventylyatoramy",
      },
      {
        name: {
          ua: "Керування підсвічуванням",
          en: "Керування підсвічуванням",
        },
        query_value: "keruvannya_pidsvichuvannyam",
      },
    ],
    multiple: true,
  },
  View: {
    name: { ua: "Вид", en: "Вид" },
    query_title: "view",
    html_element: "select",
    select: [
      { name: { ua: "Відкритий", en: "Відкритий" }, query_value: "vidkrytyy" },
      {
        name: { ua: "Геймерський", en: "Геймерський" },
        query_value: "heymers'kyy",
      },
      {
        name: { ua: "Для майнінгу", en: "Для майнінгу" },
        query_value: "dlya_mayninhu",
      },
      { name: { ua: "Звичайний", en: "Звичайний" }, query_value: "zvychaynyy" },
      {
        name: { ua: "Мультимедійний", en: "Мультимедійний" },
        query_value: "mul'tymediynyy",
      },
      { name: { ua: "Серверний", en: "Серверний" }, query_value: "servernyy" },
    ],
    multiple: false,
  },
  Material: {
    name: { ua: "Матеріал", en: "Матеріал" },
    query_title: "material",
    html_element: "select",
    select: [
      { name: { ua: "Акрил", en: "Акрил" }, query_value: "akryl" },
      { name: { ua: "Алюміній", en: "Алюміній" }, query_value: "alyuminiy" },
      { name: { ua: "Гума", en: "Гума" }, query_value: "huma" },
      {
        name: { ua: "Загартоване скло", en: "Загартоване скло" },
        query_value: "zahartovane_sklo",
      },
      { name: { ua: "Метал", en: "Метал" }, query_value: "metal" },
      { name: { ua: "Пластик", en: "Пластик" }, query_value: "plastyk" },
      { name: { ua: "Пластмаса", en: "Пластмаса" }, query_value: "plastmasa" },
      { name: { ua: "Сталь", en: "Сталь" }, query_value: "stal'" },
    ],
    multiple: false,
  },
  Installation_Method: {
    name: { ua: "Спосіб встановлення", en: "Спосіб встановлення" },
    query_title: "installation_method",
    html_element: "select",
    select: [
      {
        name: { ua: "Вертикальний", en: "Вертикальний" },
        query_value: "vertykal'nyy",
      },
      {
        name: { ua: "Горизонтальний", en: "Горизонтальний" },
        query_value: "horyzontal'nyy",
      },
      {
        name: { ua: "Універсальний", en: "Універсальний" },
        query_value: "universal'nyy",
      },
    ],
    multiple: false,
  },
  Fan_Size: {
    name: { ua: "Розмір вентилятора", en: "Розмір вентилятора" },
    query_title: "fan_size",
    html_element: "select",
    select: [
      { name: { ua: "60 мм", en: "60 мм" }, query_value: "60_mm" },
      { name: { ua: "80 мм", en: "80 мм" }, query_value: "80_mm" },
      { name: { ua: "100 мм", en: "100 мм" }, query_value: "100_mm" },
      { name: { ua: "120 мм", en: "120 мм" }, query_value: "120_mm" },
    ],
    multiple: false,
  },
  Appointment_Coolers: {
    name: { ua: "Призначення", en: "Призначення" },
    query_title: "appointment_coolers",
    html_element: "select",
    select: [
      { name: { ua: "Для SSD", en: "Для SSD" }, query_value: "dlya_ssd" },
      {
        name: { ua: "Для відеокарт", en: "Для відеокарт" },
        query_value: "dlya_videokart",
      },
      {
        name: { ua: "Для корпусів та БЖ", en: "Для корпусів та БЖ" },
        query_value: "dlya_korpusiv_ta_bzh",
      },
      {
        name: { ua: "Для оперативної пам'яті", en: "Для оперативної пам'яті" },
        query_value: "dlya_operatyvnoyi_pam_yati",
      },
      {
        name: { ua: "Для процесорів", en: "Для процесорів" },
        query_value: "dlya_protsesoriv",
      },
      {
        name: { ua: "Для серверів", en: "Для серверів" },
        query_value: "dlya_serveriv",
      },
    ],
    multiple: false,
  },
  View_Coolers: {
    name: { ua: "Вид", en: "Вид" },
    query_title: "view_coolers",
    html_element: "select",
    select: [
      {
        name: { ua: "Вентилятори", en: "Вентилятори" },
        query_value: "ventylyatory",
      },
      {
        name: {
          ua: "Компоненти систем водяного охолодження",
          en: "Компоненти систем водяного охолодження",
        },
        query_value: "komponenty_system_vodyanoho_okholodzhennya",
      },
      {
        name: { ua: "Контролери вентиляторів", en: "Контролери вентиляторів" },
        query_value: "kontrolery_ventylyatoriv",
      },
      { name: { ua: "Кулери", en: "Кулери" }, query_value: "kulery" },
      {
        name: { ua: "Пилові фільтри", en: "Пилові фільтри" },
        query_value: "pylovi_fil'try",
      },
      { name: { ua: "Радіатори", en: "Радіатори" }, query_value: "radiatory" },
      {
        name: { ua: "Рідкий метал", en: "Рідкий метал" },
        query_value: "ridkyy_metal",
      },
      {
        name: {
          ua: "Системи водяного охолодження",
          en: "Системи водяного охолодження",
        },
        query_value: "systemy_vodyanoho_okholodzhennya",
      },
      {
        name: { ua: "Термопаста", en: "Термопаста" },
        query_value: "termopasta",
      },
      {
        name: { ua: "Термопрокладки", en: "Термопрокладки" },
        query_value: "termoprokladky",
      },
      {
        name: { ua: "Термоінтерфейси", en: "Термоінтерфейси" },
        query_value: "termointerfeysy",
      },
      {
        name: {
          ua: "Установчі модулі та кріплення",
          en: "Установчі модулі та кріплення",
        },
        query_value: "ustanovchi_moduli_ta_kriplennya",
      },
    ],
    multiple: false,
  },
  Backlight: {
    name: { ua: "Підсвічування", en: "Підсвічування" },
    query_title: "backlight",
    html_element: "select",
    select: [
      { name: { ua: "ARGB", en: "ARGB" }, query_value: "argb" },
      { name: { ua: "RGB", en: "RGB" }, query_value: "rgb" },
      {
        name: { ua: "Без підсвітки", en: "Без підсвітки" },
        query_value: "bez_pidsvitky",
      },
      { name: { ua: "Блакитний", en: "Блакитний" }, query_value: "blakytnyy" },
      { name: { ua: "Білий", en: "Білий" }, query_value: "bilyy" },
      { name: { ua: "Бірюзовий", en: "Бірюзовий" }, query_value: "biryuzovyy" },
      { name: { ua: "Жовтий", en: "Жовтий" }, query_value: "zhovtyy" },
      {
        name: { ua: "Жовтогарячий", en: "Жовтогарячий" },
        query_value: "zhovtoharyachyy",
      },
      { name: { ua: "Зелений", en: "Зелений" }, query_value: "zelenyy" },
      { name: { ua: "Синій", en: "Синій" }, query_value: "syniy" },
      {
        name: { ua: "Фіолетовий", en: "Фіолетовий" },
        query_value: "fioletovyy",
      },
      { name: { ua: "Червоний", en: "Червоний" }, query_value: "chervonyy" },
    ],
    multiple: false,
  },
  Bearing_Type: {
    name: { ua: "Тип підшипника", en: "Тип підшипника" },
    query_title: "bearing_type",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Гідродинамічний підшипник (FDB)",
          en: "Гідродинамічний підшипник (FDB)",
        },
        query_value: "hidrodynamichnyy_pidshypnyk_fdb",
      },
      {
        name: {
          ua: "Керамічний підшипник кочення",
          en: "Керамічний підшипник кочення",
        },
        query_value: "keramichnyy_pidshypnyk_kochennya",
      },
      {
        name: {
          ua: "Підшипник з поліоксиметиленом (POM)",
          en: "Підшипник з поліоксиметиленом (POM)",
        },
        query_value: "pidshypnyk_z_polioksymetylenom_pom",
      },
      {
        name: { ua: "Підшипник ковзання", en: "Підшипник ковзання" },
        query_value: "pidshypnyk_kovzannya",
      },
      {
        name: {
          ua: "Підшипник ковзання з гвинтовою нарізкою",
          en: "Підшипник ковзання з гвинтовою нарізкою",
        },
        query_value: "pidshypnyk_kovzannya_z_hvyntovoyu_narizkoyu",
      },
      {
        name: { ua: "Підшипник кочення", en: "Підшипник кочення" },
        query_value: "pidshypnyk_kochennya",
      },
      {
        name: {
          ua: "Підшипник олійного тиску (SSO)",
          en: "Підшипник олійного тиску (SSO)",
        },
        query_value: "pidshypnyk_oliynoho_tysku_sso",
      },
      {
        name: {
          ua: "Самозмащувальний підшипник ковзання (LDP)",
          en: "Самозмащувальний підшипник ковзання (LDP)",
        },
        query_value: "samozmashchuval'nyy_pidshypnyk_kovzannya_ldp",
      },
    ],
    multiple: false,
  },
  Cooling_Type: {
    name: { ua: "Тип підшипника", en: "Тип підшипника" },
    query_title: "cooling_type",
    html_element: "select",
    select: [
      { name: { ua: "Активне", en: "Активне" }, query_value: "aktyvne" },
      { name: { ua: "Пасивне", en: "Пасивне" }, query_value: "pasyvne" },
    ],
    multiple: false,
  },
  Construction: {
    name: { ua: "Конструкція", en: "Конструкція" },
    query_title: "construction",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Top Flow (горизонтальна)",
          en: "Top Flow (горизонтальна)",
        },
        query_value: "top_flow_horyzontal'na",
      },
      { name: { ua: "Баштова", en: "Баштова" }, query_value: "bashtova" },
    ],
    multiple: false,
  },
  Component_CBA: {
    name: { ua: "Компоненти СВО", en: "Компоненти СВО" },
    query_title: "component_cba",
    html_element: "select",
    select: [
      { name: { ua: "Водоблоки", en: "Водоблоки" }, query_value: "vodobloky" },
      { name: { ua: "Кріплення", en: "Кріплення" }, query_value: "kriplennya" },
      { name: { ua: "Помпи", en: "Помпи" }, query_value: "pompy" },
      { name: { ua: "Радіатори", en: "Радіатори" }, query_value: "radiatory" },
      {
        name: { ua: "Резервуари", en: "Резервуари" },
        query_value: "rezervuary",
      },
      { name: { ua: "Термінали", en: "Термінали" }, query_value: "terminaly" },
      {
        name: { ua: "Трубки і шланги", en: "Трубки і шланги" },
        query_value: "trubky_i_shlanhy",
      },
      { name: { ua: "Фітинги", en: "Фітинги" }, query_value: "fitynhy" },
      {
        name: { ua: "Холодоагенти", en: "Холодоагенти" },
        query_value: "kholodoahenty",
      },
    ],
    multiple: false,
  },
};
