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
    name: { ua: "Бренд", en: "Brand" },
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
    name: { ua: "Операційна система", en: "Operating system" },
    query_title: "operating_system_pc",
    html_element: "select",
    select: [
      { name: { ua: "Без ОС", en: "No OS" }, query_value: "no_os" },
      { name: { ua: "Mac OS", en: "Mac OS" }, query_value: "mac_os" },
      { name: { ua: "Linux", en: "Linux" }, query_value: "linux" },
      { name: { ua: "Windows 7", en: "Windows 7" }, query_value: "windows_7" },
      {
        name: { ua: "Windows 8.x", en: "Windows 8.x" },
        query_value: "windows_8x",
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
    name: { ua: "Операційна система", en: "Operating system" },
    query_title: "operating_system_mp",
    html_element: "select",
    select: [
      { name: { ua: "Android", en: "Android" }, query_value: "android" },
      { name: { ua: "iOS", en: "iOS" }, query_value: "ios" },
      {
        name: { ua: "Windows Phone 8.1", en: "Windows Phone 8.1" },
        query_value: "windows_phone_81",
      },
      {
        name: { ua: "BlackBerry OS", en: "BlackBerry OS" },
        query_value: "blackberry_os",
      },
      {
        name: { ua: "Harmony OS", en: "Harmony OS" },
        query_value: "harmony_os",
      },
      { name: { ua: "Інша", en: "Other" }, query_value: "other" },
    ],
    multiple: false,
  },
  CPU_PC: {
    name: { ua: "Процесор", en: "Processor" },
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
    name: { ua: "Процесор", en: "Processor" },
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
    name: { ua: "Відеокарта", en: "Video card" },
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
    name: { ua: "Діагональ екрана", en: "Screen diagonal" },
    query_title: "screen_diagonal",
    html_element: "select",
    select: [
      { name: { ua: "9", en: "9" }, query_value: "9" },
      { name: { ua: "12.5", en: "12.5" }, query_value: "125" },
      { name: { ua: "13", en: "13" }, query_value: "13" },
      { name: { ua: "14", en: "14" }, query_value: "14" },
      { name: { ua: "15", en: "15" }, query_value: "15" },
      { name: { ua: "15.6", en: "15.6" }, query_value: "156" },
      { name: { ua: "16", en: "16" }, query_value: "16" },
      { name: { ua: "17", en: "17" }, query_value: "17" },
      { name: { ua: "18", en: "18" }, query_value: "18" },
      { name: { ua: "20", en: "20" }, query_value: "20" },
    ],
    multiple: false,
  },
  Type_Memory: {
    name: { ua: "Тип накопичувача", en: "Type of storage device" },
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
    name: { ua: "Обсяг оперативної пам'яті", en: "Amount of RAM" },
    query_title: "ram",
    html_element: "select",
    select: [
      {
        name: { ua: "Без оперативної пам'яті", en: "No RAM" },
        query_value: "no_ram",
      },
      { name: { ua: "До 3 ГБ", en: "Up to 3 GB" }, query_value: "up_to_3_gb" },
      { name: { ua: "4 ГБ", en: "4 GB" }, query_value: "4_gb" },
      { name: { ua: "6 ГБ", en: "6 GB" }, query_value: "6_gb" },
      { name: { ua: "8 ГБ", en: "8 GB" }, query_value: "8_gb" },
      { name: { ua: "10 ГБ", en: "10 GB" }, query_value: "10_gb" },
      { name: { ua: "12 ГБ", en: "12 GB" }, query_value: "12_gb" },
      { name: { ua: "16 ГБ", en: "16 GB" }, query_value: "16_gb" },
      { name: { ua: "24 ГБ", en: "24 GB" }, query_value: "24_gb" },
      { name: { ua: "32 ГБ", en: "32 GB" }, query_value: "32_gb" },
      { name: { ua: "48 ГБ", en: "48 GB" }, query_value: "48_gb" },
      { name: { ua: "64 ГБ", en: "64 GB" }, query_value: "64_gb" },
    ],
    multiple: false,
  },
  Color: {
    name: { ua: "Колір", en: "Color" },
    query_title: "color",
    html_element: "select",
    select: [
      { name: { ua: "Інші", en: "Other" }, query_value: "other" },
      { name: { ua: "Білий", en: "White" }, query_value: "white" },
      { name: { ua: "Жовтий", en: "Yellow" }, query_value: "yellow" },
      { name: { ua: "Зелений", en: "Green" }, query_value: "green" },
      { name: { ua: "Золотий", en: "Gold" }, query_value: "gold" },
      { name: { ua: "Рожевий", en: "Pink" }, query_value: "pink" },
      { name: { ua: "Синій", en: "Blue" }, query_value: "blue" },
      { name: { ua: "Сріблястий", en: "Silver" }, query_value: "silver" },
      { name: { ua: "Сірий", en: "Grey" }, query_value: "grey" },
      { name: { ua: "Фіолетовий", en: "Purple" }, query_value: "purple" },
      { name: { ua: "Червоний", en: "Red" }, query_value: "red" },
      { name: { ua: "Чорний", en: "Black" }, query_value: "black" },
      { name: { ua: "Бежевий", en: "Beige" }, query_value: "beige" },
      { name: { ua: "Блакитний", en: "Blue" }, query_value: "blue" },
      {
        name: { ua: "Біло-золотистий", en: "White and gold" },
        query_value: "white_and_gold",
      },
      { name: { ua: "Жовтогарячий", en: "Orange" }, query_value: "orange" },
      { name: { ua: "Золотистий", en: "Gold" }, query_value: "gold" },
      { name: { ua: "Камуфляж", en: "Camouflage" }, query_value: "camouflage" },
      {
        name: { ua: "Сріблясто-жовтогарячий", en: "Silver and orange" },
        query_value: "silver_and_orange",
      },
      {
        name: { ua: "Сріблясто-чорний", en: "Silver-black" },
        query_value: "silver_black",
      },
      {
        name: { ua: "Сіро-зелений", en: "Grey-green" },
        query_value: "grey_green",
      },
      {
        name: { ua: "Темно-зелений", en: "Dark green" },
        query_value: "dark_green",
      },
      {
        name: { ua: "Темно-сірий", en: "Dark grey" },
        query_value: "dark_grey",
      },
      {
        name: { ua: "Червоно-чорний", en: "Red and black" },
        query_value: "red_and_black",
      },
      {
        name: { ua: "Чорний-зелений", en: "Black-green" },
        query_value: "black_green",
      },
      {
        name: { ua: "Чорно-жовтий", en: "Black and yellow" },
        query_value: "black_and_yellow",
      },
      {
        name: { ua: "Чорно-жовтогарячий", en: "Black and orange" },
        query_value: "black_and_orange",
      },
      {
        name: { ua: "Чорно-синій", en: "Black and blue" },
        query_value: "black_and_blue",
      },
      {
        name: { ua: "Чорно-сірий", en: "Black and grey" },
        query_value: "black_and_grey",
      },
      {
        name: { ua: "Чорно-фіолетовий", en: "Black and purple" },
        query_value: "black_and_purple",
      },
      {
        name: { ua: "Чорно-червоний", en: "Black and Red" },
        query_value: "black_and_red",
      },
    ],
    multiple: false,
  },
  New_Used: {
    name: { ua: "Новий - Вживаний", en: "New - Used" },
    query_title: "new_used",
    html_element: "select",
    select: [
      { name: { ua: "Новий", en: "New" }, query_value: "new" },
      { name: { ua: "Вживаний", en: "Used" }, query_value: "used" },
    ],
    multiple: false,
  },
  Guarantee: {
    name: { ua: "Гарантія", en: "Warranty" },
    query_title: "guarantee",
    html_element: "select",
    select: [
      { name: { ua: "Немає", en: "None" }, query_value: "none" },
      { name: { ua: "1 рік", en: "1 year" }, query_value: "1_year" },
      { name: { ua: "2 роки", en: "2 years" }, query_value: "2_years" },
    ],
    multiple: false,
  },
  Size_SSD: {
    name: { ua: "Обсяг SSD", en: "SSD capacity" },
    query_title: "size_ssd",
    html_element: "select",
    select: [
      { name: { ua: "128 ГБ", en: "128 GB" }, query_value: "128_gb" },
      { name: { ua: "160 ГБ", en: "160 GB" }, query_value: "160_gb" },
      { name: { ua: "180 ГБ", en: "180 GB" }, query_value: "180_gb" },
      { name: { ua: "200 ГБ", en: "200 GB" }, query_value: "200_gb" },
      { name: { ua: "240 ГБ", en: "240 GB" }, query_value: "240_gb" },
      { name: { ua: "250 ГБ", en: "250 GB" }, query_value: "250_gb" },
      { name: { ua: "256 ГБ", en: "256 GB" }, query_value: "256_gb" },
      { name: { ua: "320 ГБ", en: "320 GB" }, query_value: "320_gb" },
      { name: { ua: "400 ГБ", en: "400 GB" }, query_value: "400_gb" },
      { name: { ua: "480 ГБ", en: "480 GB" }, query_value: "480_gb" },
      { name: { ua: "500 ГБ", en: "500 GB" }, query_value: "500_gb" },
      { name: { ua: "512 ГБ", en: "512 GB" }, query_value: "512_gb" },
      { name: { ua: "1 Т", en: "1 T" }, query_value: "1_t" },
      { name: { ua: "2 Т", en: "2 T" }, query_value: "2_t" },
      { name: { ua: "4 Т", en: "4 T" }, query_value: "4_t" },
      { name: { ua: "8 Т", en: "8 T" }, query_value: "8_t" },
    ],
    multiple: false,
  },
  Size_HDD: {
    name: { ua: "Обсяг HDD", en: "HDD capacity" },
    query_title: "size_hdd",
    html_element: "select",
    select: [
      { name: { ua: "128 ГБ", en: "128 GB" }, query_value: "128_gb" },
      { name: { ua: "160 ГБ", en: "160 GB" }, query_value: "160_gb" },
      { name: { ua: "180 ГБ", en: "180 GB" }, query_value: "180_gb" },
      { name: { ua: "200 ГБ", en: "200 GB" }, query_value: "200_gb" },
      { name: { ua: "240 ГБ", en: "240 GB" }, query_value: "240_gb" },
      { name: { ua: "250 ГБ", en: "250 GB" }, query_value: "250_gb" },
      { name: { ua: "256 ГБ", en: "256 GB" }, query_value: "256_gb" },
      { name: { ua: "320 ГБ", en: "320 GB" }, query_value: "320_gb" },
      { name: { ua: "400 ГБ", en: "400 GB" }, query_value: "400_gb" },
      { name: { ua: "480 ГБ", en: "480 GB" }, query_value: "480_gb" },
      { name: { ua: "500 ГБ", en: "500 GB" }, query_value: "500_gb" },
      { name: { ua: "512 ГБ", en: "512 GB" }, query_value: "512_gb" },
      { name: { ua: "1 Т", en: "1 T" }, query_value: "1_t" },
      { name: { ua: "2 Т", en: "2 T" }, query_value: "2_t" },
      { name: { ua: "4 Т", en: "4 T" }, query_value: "4_t" },
      { name: { ua: "8 Т", en: "8 T" }, query_value: "8_t" },
    ],
    multiple: false,
  },
  Type_Matrix: {
    name: { ua: "Тип матриці", en: "Matrix type" },
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
    name: { ua: "Частота оновлення екрану", en: "Screen refresh rate" },
    query_title: "screen_refresh_rate",
    html_element: "select",
    select: [
      { name: { ua: "30 ГЦ", en: "30 Hz" }, query_value: "30_hz" },
      { name: { ua: "60 ГЦ", en: "60 Hz" }, query_value: "60_hz" },
      { name: { ua: "90 ГЦ", en: "90 Hz" }, query_value: "90_hz" },
      { name: { ua: "120 ГЦ", en: "120 Hz" }, query_value: "120_hz" },
      { name: { ua: "144 ГЦ", en: "144 Hz" }, query_value: "144_hz" },
      { name: { ua: "165 ГЦ", en: "165 Hz" }, query_value: "165_hz" },
    ],
    multiple: false,
  },
  Guard: {
    name: { ua: "Безпека", en: "Security" },
    query_title: "guard",
    html_element: "select",
    select: [
      {
        name: { ua: "Розблокування за обличчям", en: "Face unlock" },
        query_value: "face_unlock",
      },
      {
        name: {
          ua: "Сканер відбитків пальця збоку",
          en: "Fingerprint scanner on the side",
        },
        query_value: "fingerprint_scanner_on_the_side",
      },
      {
        name: {
          ua: "Сканер відбитків пальця ззаду",
          en: "Fingerprint scanner on the back",
        },
        query_value: "fingerprint_scanner_on_the_back",
      },
      {
        name: {
          ua: "Сканер відбитків пальця на екрані",
          en: "In-screen fingerprint scanner",
        },
        query_value: "in_screen_fingerprint_scanner",
      },
    ],
    multiple: true,
  },
  Body_Material: {
    name: { ua: "Матеріал корпусу", en: "Case material" },
    query_title: "body_material",
    html_element: "select",
    select: [
      { name: { ua: "Метал", en: "Metal" }, query_value: "metal" },
      { name: { ua: "Пластик", en: "Plastic" }, query_value: "plastic" },
      { name: { ua: "Скло", en: "Glass" }, query_value: "glass" },
      { name: { ua: "Інший", en: "Other" }, query_value: "other" },
    ],
    multiple: true,
  },
  Made_in: {
    name: { ua: "Країна-виробник", en: "Country of manufacture" },
    query_title: "made_in",
    html_element: "select",
    select: [
      { name: { ua: "Індія", en: "India" }, query_value: "india" },
      { name: { ua: "В'єтнам", en: "Vietnam" }, query_value: "vietnam" },
      { name: { ua: "Китай", en: "China" }, query_value: "china" },
      { name: { ua: "Тайвань", en: "Taiwan" }, query_value: "taiwan" },
      { name: { ua: "Мексика", en: "Mexico" }, query_value: "mexico" },
      { name: { ua: "Німеччина", en: "Germany" }, query_value: "germany" },
      { name: { ua: "Польща", en: "Poland" }, query_value: "poland" },
      { name: { ua: "Румунія", en: "Romania" }, query_value: "romania" },
      { name: { ua: "США", en: "USA" }, query_value: "usa" },
      { name: { ua: "Словаччина", en: "Slovakia" }, query_value: "slovakia" },
      { name: { ua: "Таїланд", en: "Thailand" }, query_value: "thailand" },
      { name: { ua: "Туреччина", en: "Turkey" }, query_value: "turkey" },
      { name: { ua: "Угорщина", en: "Hungary" }, query_value: "hungary" },
      { name: { ua: "Україна", en: "Ukraine" }, query_value: "ukraine" },
      { name: { ua: "Японія", en: "Japan" }, query_value: "japan" },
    ],
    multiple: false,
  },
  Communication: {
    name: { ua: "Стандарт зв'язку", en: "Communication standard" },
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
      { name: { ua: "4G (LTE)", en: "4G (LTE)" }, query_value: "4g_lte" },
      { name: { ua: "5G", en: "5G" }, query_value: "5g" },
    ],
    multiple: true,
  },
  Memory_Capacity: {
    name: { ua: "Обсяг пам'яті", en: "Memory size" },
    query_title: "memory_capacity",
    html_element: "select",
    select: [
      {
        name: { ua: "1 ГБ і менше", en: "1 GB or less" },
        query_value: "1_gb_or_less",
      },
      { name: { ua: "2 ГБ", en: "2 GB" }, query_value: "2_gb" },
      { name: { ua: "3 ГБ", en: "3 GB" }, query_value: "3_gb" },
      { name: { ua: "4 ГБ", en: "4 GB" }, query_value: "4_gb" },
      { name: { ua: "5 ГБ", en: "5GB" }, query_value: "5gb" },
      { name: { ua: "6 ГБ", en: "6 GB" }, query_value: "6_gb" },
      { name: { ua: "8 ГБ", en: "8 GB" }, query_value: "8_gb" },
      { name: { ua: "10 ГБ", en: "10 GB" }, query_value: "10_gb" },
      { name: { ua: "11 ГБ", en: "11 GB" }, query_value: "11_gb" },
      { name: { ua: "12 ГБ", en: "12 GB" }, query_value: "12_gb" },
      { name: { ua: "16 ГБ", en: "16 GB" }, query_value: "16_gb" },
      { name: { ua: "20 ГБ", en: "20 GB" }, query_value: "20_gb" },
      { name: { ua: "24 ГБ", en: "24 GB" }, query_value: "24_gb" },
      { name: { ua: "36 ГБ", en: "36 GB" }, query_value: "36_gb" },
      { name: { ua: "48 ГБ", en: "48 GB" }, query_value: "48_gb" },
      { name: { ua: "64 ГБ", en: "64 GB" }, query_value: "64_gb" },
    ],
    multiple: false,
  },
  Memory_Bus_Bit_Size: {
    name: { ua: "Розрядність шини пам'яті", en: "Memory bus bit depth" },
    query_title: "memory_bus_bit_size",
    html_element: "select",
    select: [
      { name: { ua: "32 біт", en: "32 bits" }, query_value: "32_bits" },
      { name: { ua: "64 біт", en: "64 bits" }, query_value: "64_bits" },
      { name: { ua: "96 бітів", en: "96 bits" }, query_value: "96_bits" },
      { name: { ua: "128 біт", en: "128 bits" }, query_value: "128_bits" },
      { name: { ua: "160 біт", en: "160 bits" }, query_value: "160_bits" },
      { name: { ua: "192 біт", en: "192 bits" }, query_value: "192_bits" },
      { name: { ua: "256 біт", en: "256 bits" }, query_value: "256_bits" },
      { name: { ua: "320 біт", en: "320 bits" }, query_value: "320_bits" },
      { name: { ua: "352 біт", en: "352 bits" }, query_value: "352_bits" },
      { name: { ua: "384 біт", en: "384 bits" }, query_value: "384_bits" },
      { name: { ua: "512 біт", en: "512 bits" }, query_value: "512_bits" },
      { name: { ua: "589 біт", en: "589 bits" }, query_value: "589_bits" },
      { name: { ua: "1024 біт", en: "1024 bits" }, query_value: "1024_bits" },
      { name: { ua: "2048 біт", en: "2048 bits" }, query_value: "2048_bits" },
      { name: { ua: "4096 біт", en: "4096 bits" }, query_value: "4096_bits" },
    ],
    multiple: false,
  },
  Type_Memory_Videocards: {
    name: { ua: "Тип пам'яті ", en: "Memory type" },
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
    name: { ua: "Виробник графічного процесора ", en: "GPU manufacturer" },
    query_title: "graphics_processor",
    html_element: "select",
    select: [
      { name: { ua: "AMD", en: "AMD" }, query_value: "amd" },
      { name: { ua: "nVidia", en: "nVidia" }, query_value: "nvidia" },
    ],
    multiple: false,
  },
  Appointment: {
    name: { ua: "Призначення", en: "Purpose" },
    query_title: "appointment",
    html_element: "select",
    select: [
      { name: { ua: "Ігрові", en: "Gaming" }, query_value: "gaming" },
      {
        name: { ua: "Для майнінгу", en: "For mining" },
        query_value: "for_mining",
      },
      { name: { ua: "Звичайні", en: "Regular" }, query_value: "regular" },
      {
        name: { ua: "Професійні", en: "Professional" },
        query_value: "professional",
      },
    ],
    multiple: true,
  },
  Interface_Videocards: {
    name: { ua: "Інтерфейс", en: "Interface" },
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
        query_value: "pci_express_10",
      },
      {
        name: { ua: "PCI Express 2.0", en: "PCI Express 2.0" },
        query_value: "pci_express_20",
      },
      {
        name: { ua: "PCI Express 2.1", en: "PCI Express 2.1" },
        query_value: "pci_express_21",
      },
      {
        name: { ua: "PCI Express 3.0", en: "PCI Express 3.0" },
        query_value: "pci_express_30",
      },
      {
        name: { ua: "PCI Express 4.0", en: "PCI Express 4.0" },
        query_value: "pci_express_40",
      },
      {
        name: { ua: "PCI Express 4.0 x4", en: "PCI Express 4.0 x4" },
        query_value: "pci_express_40_x4",
      },
      {
        name: { ua: "PCI Express x1", en: "PCI Express x1" },
        query_value: "pci_express_x1",
      },
      {
        name: { ua: "PCI Express x4 1.x", en: "PCI Express x4 1.x" },
        query_value: "pci_express_x4_1x",
      },
      {
        name: { ua: "PCI Express x4 3.0", en: "PCI Express x4 3.0" },
        query_value: "pci_express_x4_30",
      },
      {
        name: { ua: "PCI Express x8", en: "PCI Express x8" },
        query_value: "pci_express_x8",
      },
      {
        name: { ua: "PCI Express x8 2.0", en: "PCI Express x8 2.0" },
        query_value: "pci_express_x8_20",
      },
      {
        name: { ua: "PCI Express x8 3.0", en: "PCI Express x8 3.0" },
        query_value: "pci_express_x8_30",
      },
      {
        name: { ua: "PCI Express x8 4.0", en: "PCI Express x8 4.0" },
        query_value: "pci_express_x8_40",
      },
      {
        name: { ua: "PCI Express x16", en: "PCI Express x16" },
        query_value: "pci_express_x16",
      },
      {
        name: { ua: "PCI Express x16 2.x", en: "PCI Express x16 2.x" },
        query_value: "pci_express_x16_2x",
      },
      {
        name: { ua: "PCI Express x16 3.0", en: "PCI Express x16 3.0" },
        query_value: "pci_express_x16_30",
      },
      {
        name: { ua: "PCI Express x16 4.0", en: "PCI Express x16 4.0" },
        query_value: "pci_express_x16_40",
      },
    ],
    multiple: false,
  },
  Graphics_Processor_Family: {
    name: { ua: "Сімейство графічного процесора", en: "GPU family" },
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
        name: { ua: "Дискретна (Стандартна)", en: "Discrete (Standard)" },
        query_value: "discrete_standard",
      },
      { name: { ua: "Зовнішня", en: "External" }, query_value: "external" },
      { name: { ua: "Міні", en: "Mini" }, query_value: "mini" },
      {
        name: { ua: "Низькопрофільна", en: "Low profile" },
        query_value: "low_profile",
      },
    ],
    multiple: false,
  },
  Additional_Power_Supply: {
    name: { ua: "Додаткове живлення", en: "Additional power supply" },
    query_title: "additional_power_supply",
    html_element: "select",
    select: [
      { name: { ua: "Немає", en: "No" }, query_value: "no" },
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
      { name: { ua: "Активна", en: "Active" }, query_value: "active" },
      {
        name: { ua: "Водяне охолодження", en: "Water cooling" },
        query_value: "water_cooling",
      },
      { name: { ua: "Пасивна", en: "Passive" }, query_value: "passive" },
    ],
    multiple: false,
  },
  Graphic_Chip: {
    name: { ua: "Графічний чип", en: "Graphics chip" },
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
    name: { ua: "Форм-фактор Накопичувача", en: "Drive form factor" },
    query_title: "form_factor_storage",
    html_element: "select",
    select: [
      { name: { ua: '1.8"', en: '1.8"' }, query_value: "18" },
      { name: { ua: '2.5"', en: '2.5"' }, query_value: "25" },
      { name: { ua: '3.5"', en: '3.5"' }, query_value: "35" },
      {
        name: { ua: "Apple proprietary", en: "Apple proprietary" },
        query_value: "apple_proprietary",
      },
      { name: { ua: "Half-Slim", en: "Half-Slim" }, query_value: "half_slim" },
      { name: { ua: "M.2", en: "M.2" }, query_value: "m2" },
      {
        name: { ua: "PCI Express", en: "PCI Express" },
        query_value: "pci_express",
      },
      { name: { ua: "U.2", en: "U.2" }, query_value: "u2" },
      { name: { ua: "mSATA", en: "mSATA" }, query_value: "msata" },
    ],
    multiple: false,
  },
  Connection_Interface: {
    name: { ua: "Інтерфейс підключення", en: "Connection interface" },
    query_title: "connection_interface",
    html_element: "select",
    select: [
      {
        name: { ua: "PCI Express", en: "PCI Express" },
        query_value: "pci_express",
      },
      { name: { ua: "SAS", en: "SAS" }, query_value: "sas" },
      { name: { ua: "SATA 3.2", en: "SATA 3.2" }, query_value: "sata_32" },
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
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_20" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_30" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_31" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_32" },
      { name: { ua: "Wi-Fi", en: "Wi-Fi" }, query_value: "wi_fi" },
      { name: { ua: "eSATA", en: "eSATA" }, query_value: "esata" },
    ],
    multiple: false,
  },
  Storage_Type: {
    name: { ua: "Тип накопичувача", en: "Drive type" },
    query_title: "storage_type",
    html_element: "select",
    select: [
      { name: { ua: "Внутрішній", en: "Internal" }, query_value: "internal" },
      { name: { ua: "Зовнішній", en: "External" }, query_value: "external" },
    ],
    multiple: false,
  },
  Appointment_Storage: {
    name: { ua: "Призначення", en: "Purpose" },
    query_title: "appointment_storage",
    html_element: "select",
    select: [
      {
        name: { ua: "Для комп'ютера", en: "For computer" },
        query_value: "for_computer",
      },
      {
        name: { ua: "Для ноутбука", en: "For laptop" },
        query_value: "for_laptop",
      },
      {
        name: { ua: "Для серверів", en: "For servers" },
        query_value: "for_servers",
      },
    ],
    multiple: false,
  },
  Memory_Element_Type: {
    name: { ua: "Тип елементів пам'яті", en: "Type of memory elements" },
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
    name: { ua: "Сімейство процесора", en: "Processor family" },
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
    name: { ua: "Тип роз'єму", en: "Connector type" },
    query_title: "cpu_connector_type",
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
        query_value: "розетка_am5",
      },
    ],
    multiple: false,
  },
  Integrated_Graphics: {
    name: { ua: "Інтегрована графіка", en: "Integrated graphics" },
    query_title: "integrated_graphics",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без інтегрованої графіки",
          en: "Without integrated graphics",
        },
        query_value: "without_integrated_graphics",
      },
      {
        name: { ua: "З інтегрованою графікою", en: "With integrated graphics" },
        query_value: "with_integrated_graphics",
      },
    ],
    multiple: false,
  },
  Number_of_Cores: {
    name: { ua: "Кількість ядер", en: "Number of cores" },
    query_title: "number_of_cores",
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
    name: { ua: "Тип упаковки", en: "Type of packaging" },
    query_title: "type_of_packaging",
    html_element: "select",
    select: [
      { name: { ua: "BOX", en: "BOX" }, query_value: "box" },
      { name: { ua: "Tray", en: "Tray" }, query_value: "tray" },
    ],
    multiple: false,
  },
  CPU_Clock_Speed: {
    name: { ua: "Тактова частота процесора", en: "Processor clock speed" },
    query_title: "cpu_clock_speed",
    html_element: "select",
    select: [
      { name: { ua: "2.0 ГГц", en: "2.0 GHz" }, query_value: "20_ghz" },
      { name: { ua: "2.1 ГГц", en: "2.1 GHz" }, query_value: "21_ghz" },
      { name: { ua: "2.2 ГГц", en: "2.2 GHz" }, query_value: "22_ghz" },
      { name: { ua: "2.3 ГГц", en: "2.3 GHz" }, query_value: "23_ghz" },
      { name: { ua: "2.4 ГГц", en: "2.4 GHz" }, query_value: "24_ghz" },
      { name: { ua: "2.5 ГГц", en: "2.5 GHz" }, query_value: "25_ghz" },
      { name: { ua: "2.6 ГГц", en: "2.6 GHz" }, query_value: "26_ghz" },
      { name: { ua: "2.7 ГГц", en: "2.7 GHz" }, query_value: "27_ghz" },
      { name: { ua: "2.8 ГГц", en: "2.8 GHz" }, query_value: "28_ghz" },
      { name: { ua: "2.9 ГГц", en: "2.9 GHz" }, query_value: "29_ghz" },
      { name: { ua: "3.0 ГГц", en: "3.0 GHz" }, query_value: "30_ghz" },
    ],
    multiple: false,
  },
  CPU_Unlocked_Multiplier: {
    name: { ua: "Розблокований помножува", en: "Unlocked multiplier" },
    query_title: "cpu_unlocked_multiplier",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без розблокованого множника",
          en: "Without unlocked multiplier",
        },
        query_value: "without_unlocked_multiplier",
      },
      {
        name: {
          ua: "З розблокованим множником",
          en: "With unlocked multiplier",
        },
        query_value: "with_unlocked_multiplier",
      },
    ],
    multiple: false,
  },
  CPU_Appointment: {
    name: { ua: "Призначення", en: "Purpose" },
    query_title: "cpu_appointment",
    html_element: "select",
    select: [
      {
        name: { ua: "Для комп'ютерів", en: "For computers" },
        query_value: "for_computers",
      },
      {
        name: { ua: "Для серверів", en: "For servers" },
        query_value: "for_servers",
      },
    ],
    multiple: false,
  },
  Spindle_Rotation_Speed: {
    name: { ua: "Швидкість обертання шпинделя", en: "Spindle speed" },
    query_title: "spindle_rotation_speed",
    html_element: "select",
    select: [
      {
        name: { ua: "4200 об./хв", en: "4200 rev/min" },
        query_value: "4200_rev/min",
      },
      {
        name: { ua: "5400 об./хв", en: "5400 rev/min" },
        query_value: "5400_rev/min",
      },
      {
        name: { ua: "5600 об/хв", en: "5600 rev/min" },
        query_value: "5600_rev/min",
      },
      {
        name: { ua: "5700 об./хв", en: "5700 rev/min" },
        query_value: "5700_rev/min",
      },
      {
        name: { ua: "5900 об./хв", en: "5900 rev/min" },
        query_value: "5900_rev/min",
      },
      {
        name: { ua: "5940 об./хв", en: "5940 rev/min" },
        query_value: "5940_rev/min",
      },
      {
        name: { ua: "7200 об./хв", en: "7200 rev/min" },
        query_value: "7200_rev/min",
      },
      {
        name: { ua: "Понад 7200 об./хв", en: "Over 7200 rev/min" },
        query_value: "over_7200_rev/min",
      },
    ],
    multiple: false,
  },
  Technology_HDD: {
    name: { ua: "Технологія", en: "Technology" },
    query_title: "technology_hdd",
    html_element: "select",
    select: [
      { name: { ua: "HDD", en: "HDD" }, query_value: "hdd" },
      { name: { ua: "HDD + SSD", en: "HDD + SSD" }, query_value: "hdd_ssd" },
      {
        name: { ua: "SSHD (Гібридні)", en: "SSHD (Hybrid)" },
        query_value: "sshd_hybrid",
      },
    ],
    multiple: false,
  },
  Buffer_Size: {
    name: { ua: "Обсяг буфера", en: "Buffer size" },
    query_title: "buffer_size",
    html_element: "select",
    select: [
      { name: { ua: "2 МБ", en: "2 MB" }, query_value: "2_mb" },
      { name: { ua: "4 МБ", en: "4 MB" }, query_value: "4_mb" },
      { name: { ua: "8 МБ", en: "8 MB" }, query_value: "8_mb" },
      { name: { ua: "16 МБ", en: "16 MB" }, query_value: "16_mb" },
      { name: { ua: "32 МБ", en: "32 MB" }, query_value: "32_mb" },
      { name: { ua: "64 МБ", en: "64 MB" }, query_value: "64_mb" },
      { name: { ua: "128 МБ", en: "128 MB" }, query_value: "128_mb" },
      { name: { ua: "256 МБ", en: "256 MB" }, query_value: "256_mb" },
      { name: { ua: "512 МБ", en: "512 MB" }, query_value: "512_mb" },
    ],
    multiple: false,
  },
  RAM_Memory_Size: {
    name: { ua: "Обсяг пам'яті", en: "Memory size" },
    query_title: "ram_memory_size",
    html_element: "select",
    select: [
      { name: { ua: "32 МБ", en: "32 MB" }, query_value: "32_mb" },
      { name: { ua: "256 МБ", en: "256 MB" }, query_value: "256_mb" },
      { name: { ua: "512 МБ", en: "512 MB" }, query_value: "512_mb" },
      { name: { ua: "1 ГБ", en: "1 GB" }, query_value: "1_gb" },
      { name: { ua: "2 ГБ", en: "2 GB" }, query_value: "2_gb" },
      { name: { ua: "4 ГБ", en: "4 GB" }, query_value: "4_gb" },
      { name: { ua: "6 ГБ", en: "6 GB" }, query_value: "6_gb" },
      { name: { ua: "8 ГБ", en: "8 GB" }, query_value: "8_gb" },
      { name: { ua: "12 ГБ", en: "12 GB" }, query_value: "12_gb" },
      { name: { ua: "16 ГБ", en: "16 GB" }, query_value: "16_gb" },
      { name: { ua: "24 ГБ", en: "24 GB" }, query_value: "24_gb" },
      { name: { ua: "32 ГБ", en: "32 GB" }, query_value: "32_gb" },
      { name: { ua: "64 ГБ", en: "64 GB" }, query_value: "64_gb" },
      { name: { ua: "128 ГБ", en: "128 GB" }, query_value: "128_gb" },
      { name: { ua: "256 ГБ", en: "256 GB" }, query_value: "256_gb" },
    ],
    multiple: false,
  },
  RAM_Memory_Type: {
    name: { ua: "Тип пам'яті", en: "Memory type" },
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
    name: { ua: "Частота пам'яті", en: "Memory frequency" },
    query_title: "memory_frequency",
    html_element: "select",
    select: [
      { name: { ua: "133 МГц", en: "133 МHz" }, query_value: "133_мhz" },
      { name: { ua: "300 МГц", en: "300 МHz" }, query_value: "300_мhz" },
      { name: { ua: "333 МГц", en: "333 МHz" }, query_value: "333_мhz" },
      { name: { ua: "400 МГц", en: "400 МHz" }, query_value: "400_мhz" },
      { name: { ua: "533 МГц", en: "533 МHz" }, query_value: "533_мhz" },
      { name: { ua: "667 МГц", en: "667 МHz" }, query_value: "667_мhz" },
      { name: { ua: "800 МГц", en: "800 МHz" }, query_value: "800_мhz" },
      { name: { ua: "900 МГц", en: "900 МHz" }, query_value: "900_мhz" },
      { name: { ua: "1000 МГц", en: "1000 МHz" }, query_value: "1000_мhz" },
      { name: { ua: "1066 МГц", en: "1066 МHz" }, query_value: "1066_мhz" },
      { name: { ua: "1067 МГц", en: "1067 МHz" }, query_value: "1067_мhz" },
      { name: { ua: "1333 МГц", en: "1333 МHz" }, query_value: "1333_мhz" },
      { name: { ua: "1600 МГц", en: "1600 МHz" }, query_value: "1600_мhz" },
      { name: { ua: "1800 МГц", en: "1800 МHz" }, query_value: "1800_мhz" },
      { name: { ua: "1866 МГц", en: "1866 МHz" }, query_value: "1866_мhz" },
      { name: { ua: "2000 МГц", en: "2000 МHz" }, query_value: "2000_мhz" },
      { name: { ua: "2133 МГц", en: "2133 МHz" }, query_value: "2133_мhz" },
      { name: { ua: "2400 МГц", en: "2400 МHz" }, query_value: "2400_мhz" },
      { name: { ua: "2666 МГц", en: "2666 МHz" }, query_value: "2666_мhz" },
      { name: { ua: "2800 МГц", en: "2800 МHz" }, query_value: "2800_мhz" },
      { name: { ua: "2933 МГц", en: "2933 МHz" }, query_value: "2933_мhz" },
      { name: { ua: "3000 МГц", en: "3000 МHz" }, query_value: "3000_мhz" },
      { name: { ua: "3200 МГц", en: "3200 МHz" }, query_value: "3200_мhz" },
      { name: { ua: "3333 МГц", en: "3333 МHz" }, query_value: "3333_мhz" },
      { name: { ua: "3400 МГц", en: "3400 МHz" }, query_value: "3400_мhz" },
      { name: { ua: "3466 МГц", en: "3466 МHz" }, query_value: "3466_мhz" },
      { name: { ua: "3600 МГц", en: "3600 МHz" }, query_value: "3600_мhz" },
      { name: { ua: "3733 МГц", en: "3733 МHz" }, query_value: "3733_мhz" },
      { name: { ua: "3866 МГц", en: "3866 МHz" }, query_value: "3866_мhz" },
      { name: { ua: "4000 МГц", en: "4000 МHz" }, query_value: "4000_мhz" },
      { name: { ua: "4133 МГц", en: "4133 МHz" }, query_value: "4133_мhz" },
      { name: { ua: "4266 МГц", en: "4266 МHz" }, query_value: "4266_мhz" },
      { name: { ua: "4333 МГц", en: "4333 МHz" }, query_value: "4333_мhz" },
      { name: { ua: "4400 МГц", en: "4400 МHz" }, query_value: "4400_мhz" },
      { name: { ua: "4600 МГц", en: "4600 МHz" }, query_value: "4600_мhz" },
      { name: { ua: "4800 МГц", en: "4800 МHz" }, query_value: "4800_мhz" },
      { name: { ua: "5000 МГц", en: "5000 МHz" }, query_value: "5000_мhz" },
      { name: { ua: "5133 МГц", en: "5133 МHz" }, query_value: "5133_мhz" },
      { name: { ua: "5200 МГц", en: "5200 МHz" }, query_value: "5200_мhz" },
      { name: { ua: "5333 МГц", en: "5333 МHz" }, query_value: "5333_мhz" },
      { name: { ua: "5600 МГц", en: "5600 МHz" }, query_value: "5600_мhz" },
      { name: { ua: "6000 МГц", en: "6000 МHz" }, query_value: "6000_мhz" },
      { name: { ua: "6200 МГц", en: "6200 МHz" }, query_value: "6200_мhz" },
      { name: { ua: "6400 МГц", en: "6400 МHz" }, query_value: "6400_мhz" },
      { name: { ua: "7200 МГц", en: "7200 МHz" }, query_value: "7200_мhz" },
      { name: { ua: "7600 МГц", en: "7600 МHz" }, query_value: "7600_мhz" },
    ],
    multiple: false,
  },
  Number_of_Slats: {
    name: { ua: "Кількість планок", en: "Number of slots" },
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
    name: { ua: "Кількість планок", en: "Number of slots" },
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
    name: { ua: "Сокет", en: "Socket" },
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
    name: { ua: "Чипсет (Північний міст)", en: "Chipset (North Bridge)" },
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
        query_value: "intel_с612",
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
          en: "Built-in in AMD Sempron & Atlon series APUs",
        },
        query_value: "built_in_in_amd_sempron_&_atlon_series_apus",
      },
    ],
    multiple: false,
  },
  Memory_Support: {
    name: { ua: "Підтримка пам'яті", en: "Memory support" },
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
      en: "Motherboard form factor",
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
    name: { ua: "Вбудоване відео", en: "Built-in video" },
    query_title: "embedded_video",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Без підтримки вбудованого відео",
          en: "Without support for embedded video",
        },
        query_value: "without_support_for_embedded_video",
      },
      {
        name: {
          ua: "З підтримкою відеоядра процесора",
          en: "With support for the CPU video core",
        },
        query_value: "with_support_for_the_cpu_video_core",
      },
    ],
    multiple: false,
  },
  Video_Outputs: {
    name: { ua: "Відеовиходи", en: "Video outputs" },
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
      { name: { ua: "1 шт", en: "1 pcs" }, query_value: "1_pcs" },
      { name: { ua: "2 шт", en: "2 pcs" }, query_value: "2_pcs" },
      { name: { ua: "3 шт", en: "3 pcs" }, query_value: "3_pcs" },
      { name: { ua: "4 шт", en: "4 pcs" }, query_value: "4_pcs" },
      { name: { ua: "5 шт", en: "5 pcs" }, query_value: "5_pcs" },
      { name: { ua: "6 шт", en: "6 pcs" }, query_value: "6_pcs" },
      { name: { ua: "7 шт", en: "7 pcs" }, query_value: "7_pcs" },
      { name: { ua: "8 шт", en: "8 pcs" }, query_value: "8_pcs" },
      { name: { ua: "9 шт", en: "9 pcs" }, query_value: "9_pcs" },
      { name: { ua: "10 шт", en: "10 pcs" }, query_value: "10_pcs" },
      { name: { ua: "11 шт", en: "11 pcs" }, query_value: "11_pcs" },
      { name: { ua: "12 шт", en: "12 pcs" }, query_value: "12_pcs" },
      {
        name: {
          ua: "Без слота PCI Express x16",
          en: "Without PCI Express x16 slot",
        },
        query_value: "without_pci_express_x16_slot",
      },
    ],
    multiple: false,
  },
  PCI_Express_x1: {
    name: { ua: "PCI Express x1", en: "PCI Express x1" },
    query_title: "pci_express_x1",
    html_element: "select",
    select: [
      { name: { ua: "1 шт", en: "1 pcs" }, query_value: "1_pcs" },
      { name: { ua: "2 шт", en: "2 pcs" }, query_value: "2_pcs" },
      { name: { ua: "3 шт", en: "3 pcs" }, query_value: "3_pcs" },
      { name: { ua: "4 шт", en: "4 pcs" }, query_value: "4_pcs" },
      { name: { ua: "5 шт", en: "5 pcs" }, query_value: "5_pcs" },
      { name: { ua: "6 шт", en: "6 pcs" }, query_value: "6_pcs" },
      { name: { ua: "7 шт", en: "7 pcs" }, query_value: "7_pcs" },
      { name: { ua: "8 шт", en: "8 pcs" }, query_value: "8_pcs" },
      { name: { ua: "9 шт", en: "9 pcs" }, query_value: "9_pcs" },
      { name: { ua: "10 шт", en: "10 pcs" }, query_value: "10_pcs" },
      { name: { ua: "11 шт", en: "11 pcs" }, query_value: "11_pcs" },
      { name: { ua: "12 шт", en: "12 pcs" }, query_value: "12_pcs" },
      {
        name: {
          ua: "Без слота PCI Express x1",
          en: "Without PCI Express x1 slot",
        },
        query_value: "without_pci_express_x1_slot",
      },
    ],
    multiple: false,
  },
  USB: {
    name: { ua: "USB", en: "USB" },
    query_title: "usb",
    html_element: "select",
    select: [
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_20" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_30" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_31" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_32" },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
    ],
    multiple: true,
  },
  Protection_Technologies: {
    name: { ua: "Технології захисту", en: "Security technologies" },
    query_title: "protection_technologies",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Захист від короткого замикання (SCP)",
          en: "Short circuit protection (SCP)",
        },
        query_value: "short_circuit_protection_scp",
      },
      {
        name: {
          ua: "Захист від перевантаження (OLP)",
          en: "Overload protection (OLP)",
        },
        query_value: "overload_protection_olp",
      },
      {
        name: {
          ua: "Захист від перевантаження (OPP)",
          en: "Overload protection (OPP)",
        },
        query_value: "overload_protection_opp",
      },
      {
        name: {
          ua: "Захист від перевантаження через струм (OCP)",
          en: "Overcurrent protection (OCP)",
        },
        query_value: "overcurrent_protection_ocp",
      },
      {
        name: {
          ua: "Захист від перегрівання (OTP)",
          en: "Over temperature protection (OTP)",
        },
        query_value: "over_temperature_protection_otp",
      },
      {
        name: {
          ua: "Захист від перепадів напруги (OVP/UVP)",
          en: "Overvoltage protection (OVP/UVP)",
        },
        query_value: "overvoltage_protection_ovp/uvp",
      },
      {
        name: {
          ua: "Захист від стрибків струму та напруги (SIP)",
          en: "Overcurrent and Overvoltage Protection (OVP/UVP), and Surge Protection (SIP)",
        },
        query_value:
          "overcurrent_and_overvoltage_protection_ovp/uvp_,_and_surge_protection_sip",
      },
    ],
    multiple: true,
  },
  Special_Properties: {
    name: { ua: "Особливі властивості", en: "Special features" },
    query_title: "special_properties",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Автоматичний контроль швидкості вентилятора (AFC)",
          en: "Automatic fan speed control (AFC)",
        },
        query_value: "automatic_fan_speed_control_afc",
      },
      {
        name: {
          ua: "Вимкнення СО у разі низького навантаження",
          en: "Switching off the CO in case of low load",
        },
        query_value: "switching_off_the_co_in_case_of_low_load",
      },
      {
        name: {
          ua: "Модульне під'єднання кабелів",
          en: "Modular cable connection",
        },
        query_value: "modular_cable_connection",
      },
      {
        name: {
          ua: "Модульні (з відстібними дротами)",
          en: "Modular (with detachable wires)",
        },
        query_value: "modular_with_detachable_wires",
      },
      { name: { ua: "Підсвітка", en: "Backlight" }, query_value: "backlight" },
    ],
    multiple: true,
  },
  Form_Factor_PSU: {
    name: { ua: "Форм-фактор БЖ", en: "Power supply form factor" },
    query_title: "form_factor_psu",
    html_element: "select",
    select: [
      { name: { ua: "ATX", en: "ATX" }, query_value: "atx" },
      { name: { ua: "ATX (PS/2)", en: "ATX (PS/2)" }, query_value: "atx_ps/2" },
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
    name: { ua: "Тип", en: "Type" },
    query_title: "psu_type",
    html_element: "select",
    select: [
      {
        name: { ua: "Для геймерів", en: "For gamers" },
        query_value: "for_gamers",
      },
      {
        name: { ua: "Для майнінгу", en: "For mining" },
        query_value: "for_mining",
      },
      { name: { ua: "Зовнішній", en: "External" }, query_value: "external" },
      { name: { ua: "Комп'ютерний", en: "Computer" }, query_value: "computer" },
      { name: { ua: "Серверний", en: "Server" }, query_value: "server" },
    ],
    multiple: true,
  },
  Maximum_Noise_Level: {
    name: { ua: "Максимальний рівень шуму, ДБ", en: "Maximum noise level, dB" },
    query_title: "maximum_noise_level",
    html_element: "select",
    select: [
      { name: { ua: "До 18", en: "Up to 18" }, query_value: "up_to_18" },
      { name: { ua: "18-24", en: "18-24" }, query_value: "18_24" },
      {
        name: { ua: "24 і більше", en: "24 and over" },
        query_value: "24_and_over",
      },
    ],
    multiple: false,
  },
  Number_of_SATA_Connectors: {
    name: { ua: "Кількість SATA роз'ємів", en: "Number of SATA connectors" },
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
        name: { ua: "15 і більше", en: "15 and more" },
        query_value: "15_and_more",
      },
    ],
    multiple: false,
  },
  Cooling_System: {
    name: { ua: "Система охолодження", en: "Cooling system" },
    query_title: "cooling_system",
    html_element: "select",
    select: [
      { name: { ua: "Активна", en: "Active" }, query_value: "active" },
      { name: { ua: "Пасивна", en: "Passive" }, query_value: "passive" },
    ],
    multiple: false,
  },
  Housing_Type: {
    name: { ua: "Тип корпусу", en: "Type of case" },
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
        name: { ua: "Корпус-стіл", en: "Cabinet-table" },
        query_value: "cabinet_table",
      },
    ],
    multiple: false,
  },
  Features: {
    name: { ua: "Особливості", en: "Features" },
    query_title: "features",
    html_element: "select",
    select: [
      {
        name: { ua: "З РК екраном", en: "With LCD screen" },
        query_value: "with_lcd_screen",
      },
      {
        name: {
          ua: "З безгвинтовим кріпленням",
          en: "With screwless mounting",
        },
        query_value: "with_screwless_mounting",
      },
      {
        name: { ua: "З бічним вікном", en: "With side window" },
        query_value: "with_side_window",
      },
      {
        name: {
          ua: "З вертикальним встановленням відеокарти",
          en: "With vertical video card mounting",
        },
        query_value: "with_vertical_video_card_mounting",
      },
      {
        name: {
          ua: "З знімними кошиками для HDD",
          en: "With removable HDD baskets",
        },
        query_value: "with_removable_hdd_baskets",
      },
      {
        name: { ua: "З пиловим фільтром", en: "With a dust filter" },
        query_value: "with_a_dust_filter",
      },
      {
        name: { ua: "З підсвіткою", en: "With backlight" },
        query_value: "with_backlight",
      },
      {
        name: { ua: "З підтримкою СВО", en: "With support for SATA" },
        query_value: "with_support_for_sata",
      },
      {
        name: {
          ua: "З системою організації кабелів",
          en: "With cable management system",
        },
        query_value: "with_cable_management_system",
      },
    ],
    multiple: true,
  },
  PSU_Location: {
    name: { ua: "Розташування БЖ", en: "PSU location" },
    query_title: "psu_location",
    html_element: "select",
    select: [
      { name: { ua: "Верхнє", en: "Top" }, query_value: "top" },
      { name: { ua: "Нижнє", en: "Bottom" }, query_value: "bottom" },
    ],
    multiple: false,
  },
  Functionality_Connectors_Front_Panel: {
    name: {
      ua: "Функціонал і роз'єми лицьовій панелі",
      en: "Functionality and connectors on the front panel",
    },
    query_title: "functionality_connectors_front_panel",
    html_element: "select",
    select: [
      { name: { ua: "USB 2.0", en: "USB 2.0" }, query_value: "usb_20" },
      { name: { ua: "USB 3.0", en: "USB 3.0" }, query_value: "usb_30" },
      { name: { ua: "USB 3.1", en: "USB 3.1" }, query_value: "usb_31" },
      { name: { ua: "USB 3.2", en: "USB 3.2" }, query_value: "usb_32" },
      {
        name: { ua: "USB Type-C", en: "USB Type-C" },
        query_value: "usb_type_c",
      },
      { name: { ua: "eSATA", en: "eSATA" }, query_value: "esata" },
      {
        name: { ua: "Вихід для навушників", en: "Headphone output" },
        query_value: "headphone_output",
      },
      {
        name: { ua: "Вхід для мікрофона", en: "Microphone input" },
        query_value: "microphone_input",
      },
      {
        name: { ua: "Кардридер", en: "Card reader" },
        query_value: "card_reader",
      },
      {
        name: { ua: "Керування вентиляторами", en: "Fan control" },
        query_value: "fan_control",
      },
      {
        name: { ua: "Керування підсвічуванням", en: "Backlight control" },
        query_value: "backlight_control",
      },
    ],
    multiple: true,
  },
  View: {
    name: { ua: "Вид", en: "Type" },
    query_title: "view",
    html_element: "select",
    select: [
      { name: { ua: "Відкритий", en: "Open" }, query_value: "open" },
      { name: { ua: "Геймерський", en: "Gamer" }, query_value: "gamer" },
      {
        name: { ua: "Для майнінгу", en: "For mining" },
        query_value: "for_mining",
      },
      { name: { ua: "Звичайний", en: "Normal" }, query_value: "normal" },
      {
        name: { ua: "Мультимедійний", en: "Multimedia" },
        query_value: "multimedia",
      },
      { name: { ua: "Серверний", en: "Server" }, query_value: "server" },
    ],
    multiple: false,
  },
  Material: {
    name: { ua: "Матеріал", en: "Material" },
    query_title: "material",
    html_element: "select",
    select: [
      { name: { ua: "Акрил", en: "Acrylic" }, query_value: "acrylic" },
      { name: { ua: "Алюміній", en: "Aluminium" }, query_value: "aluminium" },
      { name: { ua: "Гума", en: "Rubber" }, query_value: "rubber" },
      {
        name: { ua: "Загартоване скло", en: "Tempered glass" },
        query_value: "tempered_glass",
      },
      { name: { ua: "Метал", en: "Metal" }, query_value: "metal" },
      { name: { ua: "Пластик", en: "Plastic" }, query_value: "plastic" },
      { name: { ua: "Пластмаса", en: "Plastic" }, query_value: "plastic" },
      { name: { ua: "Сталь", en: "Steel" }, query_value: "steel" },
    ],
    multiple: false,
  },
  Installation_Method: {
    name: { ua: "Спосіб встановлення", en: "Installation method" },
    query_title: "installation_method",
    html_element: "select",
    select: [
      { name: { ua: "Вертикальний", en: "Vertical" }, query_value: "vertical" },
      {
        name: { ua: "Горизонтальний", en: "Horizontal" },
        query_value: "horizontal",
      },
      {
        name: { ua: "Універсальний", en: "Universal" },
        query_value: "universal",
      },
    ],
    multiple: false,
  },
  Fan_Size: {
    name: { ua: "Розмір вентилятора", en: "Fan size" },
    query_title: "fan_size",
    html_element: "select",
    select: [
      { name: { ua: "60 мм", en: "60 mm" }, query_value: "60_mm" },
      { name: { ua: "80 мм", en: "80 mm" }, query_value: "80_mm" },
      { name: { ua: "100 мм", en: "100 mm" }, query_value: "100_mm" },
      { name: { ua: "120 мм", en: "120 mm" }, query_value: "120_mm" },
    ],
    multiple: false,
  },
  Appointment_Coolers: {
    name: { ua: "Призначення", en: "Purpose" },
    query_title: "appointment_coolers",
    html_element: "select",
    select: [
      { name: { ua: "Для SSD", en: "For SSDs" }, query_value: "for_ssds" },
      {
        name: { ua: "Для відеокарт", en: "For video cards" },
        query_value: "for_video_cards",
      },
      {
        name: { ua: "Для корпусів та БЖ", en: "For cases and power supplies" },
        query_value: "for_cases_and_power_supplies",
      },
      {
        name: { ua: "Для оперативної пам'яті", en: "For RAM" },
        query_value: "for_ram",
      },
      {
        name: { ua: "Для процесорів", en: "For processors" },
        query_value: "for_processors",
      },
      {
        name: { ua: "Для серверів", en: "For servers" },
        query_value: "for_servers",
      },
    ],
    multiple: false,
  },
  View_Coolers: {
    name: { ua: "Вид", en: "Type" },
    query_title: "view_coolers",
    html_element: "select",
    select: [
      { name: { ua: "Вентилятори", en: "Fans" }, query_value: "fans" },
      {
        name: {
          ua: "Компоненти систем водяного охолодження",
          en: "Water cooling system components",
        },
        query_value: "water_cooling_system_components",
      },
      {
        name: { ua: "Контролери вентиляторів", en: "Fan controllers" },
        query_value: "fan_controllers",
      },
      { name: { ua: "Кулери", en: "Coolers" }, query_value: "coolers" },
      {
        name: { ua: "Пилові фільтри", en: "Dust filters" },
        query_value: "dust_filters",
      },
      { name: { ua: "Радіатори", en: "Radiators" }, query_value: "radiators" },
      {
        name: { ua: "Рідкий метал", en: "Liquid metal" },
        query_value: "liquid_metal",
      },
      {
        name: {
          ua: "Системи водяного охолодження",
          en: "Water cooling systems",
        },
        query_value: "water_cooling_systems",
      },
      {
        name: { ua: "Термопаста", en: "Thermal paste" },
        query_value: "thermal_paste",
      },
      {
        name: { ua: "Термопрокладки", en: "Thermal gaskets" },
        query_value: "thermal_gaskets",
      },
      {
        name: { ua: "Термоінтерфейси", en: "Thermal interfaces" },
        query_value: "thermal_interfaces",
      },
      {
        name: {
          ua: "Установчі модулі та кріплення",
          en: "Installation modules and fasteners",
        },
        query_value: "installation_modules_and_fasteners",
      },
    ],
    multiple: false,
  },
  Backlight: {
    name: { ua: "Підсвічування", en: "Backlight" },
    query_title: "backlight",
    html_element: "select",
    select: [
      { name: { ua: "ARGB", en: "ARGB" }, query_value: "argb" },
      { name: { ua: "RGB", en: "RGB" }, query_value: "rgb" },
      {
        name: { ua: "Без підсвітки", en: "Without backlight" },
        query_value: "without_backlight",
      },
      { name: { ua: "Блакитний", en: "Blue" }, query_value: "blue" },
      { name: { ua: "Білий", en: "White" }, query_value: "white" },
      { name: { ua: "Бірюзовий", en: "Turquoise" }, query_value: "turquoise" },
      { name: { ua: "Жовтий", en: "Yellow" }, query_value: "yellow" },
      { name: { ua: "Жовтогарячий", en: "Orange" }, query_value: "orange" },
      { name: { ua: "Зелений", en: "Green" }, query_value: "green" },
      { name: { ua: "Синій", en: "Blue" }, query_value: "blue" },
      { name: { ua: "Фіолетовий", en: "Purple" }, query_value: "purple" },
      { name: { ua: "Червоний", en: "Red" }, query_value: "red" },
    ],
    multiple: false,
  },
  Bearing_Type: {
    name: { ua: "Тип підшипника", en: "Bearing type" },
    query_title: "bearing_type",
    html_element: "select",
    select: [
      {
        name: {
          ua: "Гідродинамічний підшипник (FDB)",
          en: "Hydrodynamic bearing (FDB)",
        },
        query_value: "hydrodynamic_bearing_fdb",
      },
      {
        name: {
          ua: "Керамічний підшипник кочення",
          en: "Ceramic rolling bearing",
        },
        query_value: "ceramic_rolling_bearing",
      },
      {
        name: {
          ua: "Підшипник з поліоксиметиленом (POM)",
          en: "Polyoxymethylene (POM) bearing",
        },
        query_value: "polyoxymethylene_pom_bearing",
      },
      {
        name: { ua: "Підшипник ковзання", en: "Plain bearing" },
        query_value: "plain_bearing",
      },
      {
        name: {
          ua: "Підшипник ковзання з гвинтовою нарізкою",
          en: "Plain bearing with screw thread",
        },
        query_value: "plain_bearing_with_screw_thread",
      },
      {
        name: { ua: "Підшипник кочення", en: "Rolling bearing" },
        query_value: "rolling_bearing",
      },
      {
        name: {
          ua: "Підшипник олійного тиску (SSO)",
          en: "Oil pressure bearing (SSO)",
        },
        query_value: "oil_pressure_bearing_sso",
      },
      {
        name: {
          ua: "Самозмащувальний підшипник ковзання (LDP)",
          en: "Self-lubricating plain bearing (LDP)",
        },
        query_value: "self_lubricating_plain_bearing_ldp",
      },
    ],
    multiple: false,
  },
  Cooling_Type: {
    name: { ua: "Тип підшипника", en: "Bearing type" },
    query_title: "cooling_type",
    html_element: "select",
    select: [
      { name: { ua: "Активне", en: "Active" }, query_value: "active" },
      { name: { ua: "Пасивне", en: "Passive" }, query_value: "passive" },
    ],
    multiple: false,
  },
  Construction: {
    name: { ua: "Конструкція", en: "Design" },
    query_title: "construction",
    html_element: "select",
    select: [
      {
        name: { ua: "Top Flow (горизонтальна)", en: "Top Flow (horizontal)" },
        query_value: "top_flow_horizontal",
      },
      { name: { ua: "Баштова", en: "Tower" }, query_value: "tower" },
    ],
    multiple: false,
  },
  Component_CBA: {
    name: { ua: "Компоненти СВО", en: "Components of the SVO" },
    query_title: "component_cba",
    html_element: "select",
    select: [
      {
        name: { ua: "Водоблоки", en: "Water blocks" },
        query_value: "water_blocks",
      },
      { name: { ua: "Кріплення", en: "Fasteners" }, query_value: "fasteners" },
      { name: { ua: "Помпи", en: "Pumps" }, query_value: "pumps" },
      { name: { ua: "Радіатори", en: "Radiators" }, query_value: "radiators" },
      { name: { ua: "Резервуари", en: "Tanks" }, query_value: "tanks" },
      { name: { ua: "Термінали", en: "Terminals" }, query_value: "terminals" },
      {
        name: { ua: "Трубки і шланги", en: "Tubes and hoses" },
        query_value: "tubes_and_hoses",
      },
      { name: { ua: "Фітинги", en: "Fittings" }, query_value: "fittings" },
      {
        name: { ua: "Холодоагенти", en: "Refrigerants" },
        query_value: "refrigerants",
      },
    ],
    multiple: false,
  },
};

