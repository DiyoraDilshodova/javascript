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



