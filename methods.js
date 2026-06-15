// Methods
// 1. String metodlari
let text = "Hello, World!";
// length - property
console.log(text.length); // 13
// methods
console.log(text.toUpperCase()); // HELLO, WORLD!
console.log(text.toLowerCase()); // hello, world!
console.log(text.slice(1, 5)); // ello
console.log(text.trim()); // bosh joylarni olib tashlaydi 
console.log(text.trimStart()); // boshidagi bosh joylarni olib tashlaydi 
console.log(text.trimEnd()); // oxirgi bosh joylarni olib tashlaydi 
console.log(text.includes()); // text ichida qidirilayotgan string bor yoki yo'qligini tekshiradi
console.log(text.split(",")); // matnni belgilangan ajratuvchi bo'yicha bo'lib, arrayga o'zgartiradi    



// 2. Number metodlari
let num = 123.456;
let num2 = "123.456";
console.log(num.toFixed(2)); // 123.46 - sonni belgilangan raqamlar bilan formatlaydi
console.log(num.toString()); // 123.456 - sonni stringga o'zgartiradi
console.log(parseInt(num2)); // 123 - stringni butun songa o'zgartiradi
console.log(parseFloat(num2)); // 123.456 - stringni float songa o'zgartiradi
console.log(Number(num2)); // 123.456 - stringni numberga o'zgartiradi
console.log(Math.round(num)); // 123 - sonni yaxlitlaydi
console.log(Math.ceil(num)); // 124 - sonni yuqoriga yaxlitlaydi
console.log(Math.floor(num)); // 123 - sonni pastga yaxlitlaydi



// 3. Array metodlari
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5 - array uzunligi
console.log(arr.push(6)); // 6 - arrayga element qo'shadi va yangi uzunligini qaytaradi
console.log(arr.pop()); // 6 - arraydan oxirgi elementni olib tashlaydi va o'sha elementni qaytaradi
console.log(arr.shift()); // 1 - arraydan birinchi elementni olib tashlaydi va o'sha elementni qaytaradi
console.log(arr.unshift(0)); // 6 - array boshiga element qo'shadi va yangi uzunligini qaytaradi
console.log(arr.indexOf(3)); // 2 - arrayda qidirilayotgan elementning indeksini qaytaradi, agar topilmasa -1 qaytaradi
console.log(arr.includes(4)); // true - arrayda qidirilayotgan element bor yoki yo'qligini tekshiradi
console.log(arr.slice(1, 4)); // [2, 3, 4] - arrayning belgilangan indekslar orasidagi qismini qaytaradi
console.log(arr.splice(2, 1)); // [3] - arraydan belgilangan indeksdan boshlab, belgilangan miqdorda elementni olib tashlaydi va o'sha elementlarni qaytaradi
console.log(arr.join("-")); // 0-2-4-5 - array elementlarini belgilangan ajratuvchi bilan birlashtirir va stringga o'zgartiradi
console.log(arr.map((x) => x * 2)); // [0, 4, 6, 8, 10] - array elementlarini belgilangan funksiyaga qo'llaydi va yangi array qaytaradi
console.log(arr.filter((x) => x > 2)); // [3, 4, 5] - arraydan belgilangan shartga mos keluvchi elementlarni qaytaradi
console.log(arr.concat([6, 7, 8])); // [0, 2, 4, 5, 6, 7, 8] - arrayni boshqa array bilan birlashtiradi va yangi array qaytaradi


