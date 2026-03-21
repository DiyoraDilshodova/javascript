// Variables (O'zgaruvchilar)
// var - eski usul, ishlatilmaydi, function
// let - keyinchalik ozgartirsa boladigan, block
// const - ozgartirib bolmaydigan ozgaruvchi, block

//  nomi qanday bolishi kerak
// ishlatish mumkin: harflar, raqamlar, $ va _
let ism;
let yosh16;
let $pul;
let _private;
// mumkin emas: raqam bilan boshlansa, js maxsus sozlardan foydalansa
// let 123ism;
// let const;

// Data Types - Ma'lumot turlari
// 1. Primitive (oddiy, asosiy turlar)
// 1) string - matn (qoshtirnoq ichida yoziladi)
// let name = "Diyora";
// 2) number - sonlar (butun yoki kasr sonlar)
// let yosh = 16;
// 3) bigint - juda katta sonlar bilan ishlash uchun (n soni bilan tugaydi)
let bigint = 1n;
// 4) boolean - togri yoki noto'g'ri (true yoki false)
let boolean = false;
// 5) undefined - qiymat hali berilmagan
let nom;
// 6) null - bosh, hech narsa yoqligini anglatadi
let phone = null;
// 7) symbol - id lar bilan ishlatilani (unikal identifikator)
let id = Symbol("id");

// 2.Non-Primitive turlari (murakkab ma'lumot turlari)
// 1) Object - kalit-qiymat juftliklari
// let Person = {
//   name: "Diyora",
//   age: 16,
//   student: true,
// };
// 2) Array - tartiblangan qiymatlar to'plmai (ro'yxat)
let fruits = ["olma", "nok", "uzum"];
// 3) Function - funksiya, object turiga kiradi, (chaqiriladigan callable obyekt turiga kiradi)
function salomBer() {
  console.log("Hello World!");
}

// typeof operatori - ozgaruvchi yoki qiymat turini aniqlsh uchun
typeof null === "object";
// null ning tipi object
// array hamisha object
// function oddiy obyektlar object, lekin function function

let qiymat = "123";

if (typeof qiymat === "string") {
  console.log("Bu string!");
}

// Window - brauzerdagi eng katta global obyekt, brauzer oynasining "bo'sh qo'modoni"
//    alert("Hi, welcome!");
// 1) foy.ga xabar korsatadi 2) Faqat OK tugmasi bor
// 3) hech qanday qiymat qaytarmaydi (undefined qaytaradi)
// 4) oddiy ogohlantirish yoki ma'lumot ko'rsatish u-n ishlatiladi

// let natija = confirm("Do you really want to leave?");
// console.log(natija);
// 1) foy.dan ha yoki yoq (OK yoki cancel)tanlshni so'raydi
// 2) boolean (true yoki false) qiymat qaytaradi

// prompt("Ismingizni kiriting");
// 1) foy.dan matn kiritishini soraydi
// 2) OK va cancel tugmalari mavjud
// 3) OK - string qataradi, Cancel - null qaytaradi

// Interpolatsiya (Template Literals) bactick (`${}`) bilan yoziladi
let namee = "Diyora";
let agee = 16;
console.log(`Mening ismim ${namee}, yoshim ${agee}da`);

// Operatorlar - amal bajaradigan amal yoki so'z

// A) Matematik operatorlar
// + qoshish;
// - ayirish
// * kopaytirish
// / bolish
// % qoldiqli bolish
// ** darajaga oshirish

// B) Taqqoslash oparatorlari (natija har doim true yoki false)
// > katta
// < kichik
// >= katta yoki teng
// <= kichik yoki teng
// == teng (tipi tekshirilmaydi)
// === qat'iy teng (tipi bilan tekshiradi)
console.log(10 == "10");
// != teng emas
// !==  qat'iy teng emas

// C) Mantiqiy Operatorlar
// && (AND - ikkalasi ham true bolja, natija true)
// || (OR - bittasi true bolsa, natija true)
// ! (NOT - mantiqiqy qymatni teskarisiga ogiradi)

let numberOfBooks = prompt("nechta kitob o'qigansiz?");
const booksDB = {
  count: numberOfBooks,
  books: {},
  authors: {},
  genres: [],
  private: false,
};

let firstBook = prompt("Oxirgi o'qigan kitobingiz?");
let rating = +prompt("Nechi baho beraisz?");

let secondBook = prompt("Oxirgi o'qigan kitobingiz?");
let rating2 = +prompt("Nechi baho beraisz?");

booksDB.books[firstBook] = rating;
booksDB.books[secondBook] = rating2;
console.log(booksDB);

// shartli operator - if else, switch
let baho = 85;

if (baho >= 90) {
  console.log("A'lo");
} else if (baho >= 80) {
  console.log("Yaxshi");
} else if (baho >= 70) {
  console.log("Qoniqarli");
} else {
  console.log("Yomon");
}

// qisqcha yozilshi
let xabar = baho >= 18 ? "voyaga yetgan" : "Voyaga yetmagan";

// switch operatori
let kun = 5;
let kunNomi;

switch (kun) {
  case 1:
    kunNomi = "Dushanba";
    break;
  case 2:
    kunNomi = "Seshanba";
    break;
  case 3:
    kunNomi = "Chorshanba";
    break;
  case 4:
    kunNomi = "Payshanba";
  case 5:
    kunNomi = "Juma";
  default:
    kunNomi = "Not'g'ri kun raqami";
}

// sikllar (loops)
// 1. for - aniq belgilangan takrorlanishlar soni uchun ishlatiladi
for (let i = 0; i < 5; i++) {
  console.log("takrorlanishi" + i);
}

// 2. while - berilgan shart rost bo'lguncha kod blokini bajaradi
let i = 0;
while (i < 6) {
  console.log("takrorlanshi" + i);
  i++;
}

// 3. do...while - kod bloki 1marta bajariladi
let a = 5;
do {
  console.log("takrorlanishi" + a);
  a++;
} while (a < 5);

// 4. for...in - obyektning xususiyatlari boylab ishlaydi
let talaba = {
  ism: "kimdir",
  yosh: 23,
};
for (let xususiyat in talaba) {
  console.log(xususiyat + ":" + talaba[xususiyat]);
}

// 5. for...of - massivlar, boshqa iteratsiya qilinadigan obyektlar ustida ishlash
let shirinmevalar = ["banan", "olma", "gilos"];
for (let meva of shirinmevalar) {
  console.log(meva);
}

// Function - ma'lum bir vazifani bajarish uchun mo'ljalangan, kodni takrorlamasdan ishlatish
// imkonin beradigan kod bloklari

function salomBer() {
  console.log("salom!");
}

salomBer(); // funksiyani chaqirish

// Parametrlar va Argumentlar
function salomber(ism) {
  console.log("salom" + ism);
}

salomber("Diyora"); // argument - Diyora, paramentr - ism

// local va global o'zgaruvchilar
// global o'zgaruvchi - funksiyadan tashqarida e'lon qilinib, barcha joyda ishlatilishi mumkin
let x = 10;
function chiqar() {
  console.log(x); // 10 chiqariladi
}
chiqar();

// local o'zgaruvchilar - funksiya ichida e'lon qilinib, faqat o'sha funksiya ichida ishlatiladi
function hisobla() {
  let y = 5;
  console.log(y); // 5 chiqadi
}
hisobla();
// console.log(y); // xato, y aniqlanmaydi

// Return operatori - funksiya bajarilgandan keyin natija qaytarish uchun ishlatiladi, return ishlatilmasa funk. undefined qaytaradi
function yigindi(a, b) {
  return a + b; // a va b ni qoshib natija qaytaradi
}
let natija = yigindi(3, 4); // natija 7
console.log(natija);

// Function turlari
// 1. Function Declaration - klassik usul
// 1) har doim kodning yuqorisiga kotarilib ishlaydi (hoisting)
// 2) funk. chaqirishni e'lon qilishdan oldin ham yozish mumkin
// 3) hoisting faqat function declaration uchun
salomBer();
function salomBer() {
  console.log("salom");
}

// 2. Function Expression - funksiya o'zgaruvchiga tenglashtiriladi
// 1) funksiya nomi o'zgaruvchida turadi
// 2) faqat e'lon qilinagndan keyin ishlaydi
// 3) kopincha callback yoki dynamic funk. yaratishda ishlatiladi
const assalom = function () {
  console.log("salom");
};
assalom();

// 3. Arrow Function - ES6 da kiritilgan, qisqa sintaksis
// 1) this b-n boshqacha ishlaydi (oz this-ini yartamaydi, tasgqaridan oladi)
// 2) oddit bir satrlik uchun zor
const salom = () => {
  console.log("salom");
};
salom();

// Methods
// 1. String metodlari
let text = "Hello world!";

console.log(text.trim()); // boshi va oxiridagi boshliqlarni olib tashlaydi
console.log(text.toUpperCase()); // matnni katta harflarga aylantiradi
console.log(text.toLowerCase()); // matnni kichik harflarga aylantiradi
console.log(text.includes("hello")); // matnda "hello" borligini tekshiradi, natija false (case-sensitive)
console.log(text.slice(2, 5)); // matnning belgilangan qismini ajratadi
console.log(text.split("-")); // matnni belgilangan ajratuvchiga boladi, natija array
console.log(text.length); // matn uzunligini qaytaradi
console.log(text.startsWith("Hello")); // matn shu soz b-n boshlanadimi, true/false
console.log(text.endsWith("World!")); // matn shu soz b-n tugidimi, true/false
console.log(text.indexOf("l")); // sozning orni (index)
console.log(text.replace("world", "developer")); // matnni almashtiradi, natija yangi string
console.log(text.concat("method")); // matnga qoshadi, natija yangi string
console.log(text.split(",")); // matnni massivga boladi, ajratuvchiga qarab

// 2. Number metodlari
let number = 123.456;

console.log(number.toFixed(3)); // sonni belgilangan kasrga aylantiradi, natija string
console.log(Math.round(number)); // sonni eng yaqin butun songa yaxlitlaydi, natija number
console.log(Math.floor(number)); // sonni pastga yaxlitlaydi, natija number
console.log(Math.ceil(number)); // sonni yaxlitlaydi, natija number
console.log(number.toString()); // sonni stringga aylantiradi
console.log(number.toExponential(2)); // sonni eksponensial formatga aylantiradi, natija string
console.log(number.toPrecision(4)); // sonni belgilangan raqamlar soniga aylantiradi, natija string
console.log(Number.isInteger(number)); // son butunmi, true/false
console.log(Number.isNaN(number)); // son NaN (Not a Number)mi, true/false
console.log(Number.parseInt("123px")); // stringni butun soniga aylantiradi, natija number
console.log(Number.parseFloat("123.45px")); // stringni onlik soniga aylantiradi, natija number

// 3. Array metodlari
let arr = ["olma", "banan", "apelsin"];

console.log(arr.map((meva) => meva.toUpperCase())); // har bir elemntni ozgartiradi
console.log(arr.filter((fruits) => fruits.length <= 5)); // shartga mos keladigan elementlarni qaytaradi
console.log(arr.concat(["grush"])); // arrayga element qo'shadi
console.log(arr.push("mandarin")); // oxiriga qoshadi
console.log(arr.pop()); // oxirgi elementni olib tashlaydi va qaytaradi
console.log(arr.shift()); // boshidan elementni olib tashlaydi va qaytaradi
console.log(arr.unshift("anor")); // boshiga element qo'shadi

// 4. Object metodlari
let person = {
  name: "Diyora",
  age: 16,
};

console.log(Object.keys(person)); // kalitlarini olish ["name", "age"]
console.log(Object.values(person)); // qiymatlarini olish ["Diyora", 16]
console.log(Object.entries(person)); // kalit-qiymat juftliklarini olish [["name", "Diyora"], ["age", 16]]
console.log(Object.assign({}, person, { city: "Tashkent" })); // yangi obyekt yaratadi, person obyektini nusxalaydi va city xususiyatini qo'shadi
console.log(Object.freeze(person)); // obyektni muzlatadi, hech qanday o'zgarishlarga ruxsat bermaydi
console.log(Object.isFrozen(person)); // obyekt muzlatilganmi, true/false

// Callback va object destructuring
// Callback — bu funksiya ichiga boshqa funksiyani argument sifatida berish va keyinroq uni ishlatish.
function homeworkDone(callback) {
  console.log("📘 Uy vazifamni qilyapman...");

  setTimeout(() => {
    console.log("✅ Uy vazifa tugadi!");
    callback(); // Do'stni chaqiramiz
  }, 2000);
}

function friendCall() {
  console.log("📞 Do'sting qo'ng'iroq qildi: 'O'yinga chiqamizmi?'");
}

homeworkDone(friendCall);

// Object destructuring - obyektning xususiyatlarini alohida o'zgaruvchilarga ajratish
let user = {
  name: "Diyora",
  age: 16,
  city: "Urgench",
};

// oddiy usul
console.log(user.name);
// destructuring usuli
let { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);

// setTimeout va setInterval
// setTimeout - berilgan vaqt o'tgach, bir marta kodni bajaradi
setTimeout(() => {
  console.log("bu xabar 3 soniyadan keyin chiqadi");
}, 3000);
// setInterval - berilgan vaqt oralig'ida kodni takrorlaydi
let count = 0;
let intervalid = setInterval(() => {
  console.log("bu xabar 2 soniyada chiqadi");
  count++;
  if (count >= 5) {
    clearInterval(intervalid);
  }
}, 2000);

// Array - bir nechta qiymatni bitta joyda saqlash uchun ishlatiladigan quti kabi
let mevalar = ["mandarin", "tarvuz", "olma"];
// arraydagi narsalarga murojaat qilish
console.log(mevalar[2]);
console.log(mevalar[0]);

mevalar.push("uzum"); // arrayga yangi element qoshish
console.log(mevalar);

mevalar.pop(); // arraydan oxirgi elemntini olib tashlash
console.log(mevalar);

mevalar.shift("anor"); // array boshidan element olib tashlash
console.log(mevalar);

mevalar.unshift("anor"); //array boshiga element qoshish
console.log(mevalar);

mevalar.length; // array uzunligini qaytaradi
console.log(mevalar);

for (let i = 0; i < mevalar.length; i++) {
  console.log(i + ":" + mevalar[i]);
} // arrayni siklada aylantirish 


// empty slots
const colors = ["qizil", , "yashil"];
console.log(colors[1]); // undifined qaytaradi, chunki joy bosh

const newColors = [...colors]; // spread operatori yordamida arrayni nusxalash
console.log(newColors);

// Clonlash. Shallow va Deep cloning
// primitive turlarni clonlash oddiy, qiymatni o'ziga tenglashtirish kifoya
let r = 10;
let d = r; // r ning qiymati d ga berildi, r va d mustaqil o'zgaruvchilar, biri o'zgartirilsa, ikkinchisi o'zgarmaydi
console.log(d); // primitivlarda clonlash avtomatik amalga oshadi

// non-primitive - Reference (manzil) orqali saqlanadi. O‘zgaruvchi faqat obyekt manzilini ushlab turadi, ichki qiymat esa xotirada boshqa joyda turadi.
let arr1 = [1, 2, 3];
let arr2 = arr1; // reference manzil berildi
arr2[0] = 10; // arr2 ni o'zgartirish arr1 ni ham o'zgartiradi, chunki ikkalasi ham bir manzilga ishora qiladi
console.log(arr1); // [10, 2, 3]

// Shallow (yuzaki) clonlash -  obyekt/array ning birinchi darajadagi xususiyatlarini yangi obyektga/arrayga ko‘chirish.
let m = [1,2,3];
let b = m.slice();     // yuzaki nusxa
let c = [...m];        // shu ham yuzaki nusxa
b[0] = 99;
console.log(m[0]); // 1  (asosiy arrayga ta'sir yo'q)


// objectlarni clonelash
function cloneObj(obj) {
	const clone = {}
	
	for(let key in obj){
		clone[key] = obj[key]
	}
	
	return clone
}

// Deep clonlash - obyektning barcha darajadagi xususiyatlarini yangi obyektga ko‘chirish, shu jumladan ichki obyektlar va massivlar ham clonlanadi.

// JSON usuli - oddiy va tezkor, lekin funksiyalar, undefined, Symbol va boshqa maxsus turlarni qo‘llab-quvvatlamaydi
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c = 99;
console.log(obj1.b.c); // 2 (mustaqil!)

// srtucturedClone usuli - murakkab tuzilmalarni ham clonlash imkonini beradi, JSON usulidan farqli o'laroq, funksiyalar, undefined, Symbol va boshqa maxsus turlarni qo‘llab-quvvatlaydi
let obje1 = { a: 1, b: { c: 2 } };
let obje2 = structuredClone(obj1);

obj2.b.c = 99;
console.log(obj1.b.c); // 2