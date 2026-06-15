// o'zgaruvchilar - unga ma'lumot saqlash uchun nom beramiz
// let, const
let name = "Diyora"; // ozgaruvchi
const age = 16; // ozgarmas

// Data Types - Ma'lumot turlari
// 1. Primitive (oddiy) turlari

let string = "Diyora"; // 1) string
let number = 50; // 2) number
let boolean = true; // 3) boolean - true, false
let phone = null; // 4) null
let undifenid; // 5) undefined
let id = Symbol("id"); // 6) symbol
let bigint = 12n; // 7) bigint

// 2. Non-primitive (murakkab) turlari
// 1) Object
const Person = {
  name: "kimdir",
  age: 33,
  married: false,
};

// 2) array
let fruits = ["apple", "banana", "orange"];

// 3) function
function SalomBer() {
  console.log("salom");
}

// typeof operatori - malumot turini aniqlash uchun ishlatiladi
console.log(typeof null); // object
console.log(typeof []); // object

// Window - brauzerdagi eng katta global obyekt, Interpolatsiya, Operatorlar
// 1. alert()
// alert("o'chirildi"); // ogohlantirish, xabar korsatadi
// 2. confirm()
// const result = confirm("ochirmoqchimisiz"); // OK yoki Cancel boladi
// console.log(result);
// 3. prompt()
// let ism = prompt("ismingizmi kirting"); // matn kiritishni so'raydi
// console.log(ism);

// Interpolatsiya - ``${}
let firstName = "Diyora";
let lastName = "Dilshodova";
let ages = 16;
console.log(`My name is ${firstName} ${lastName}, i'm ${ages} years old`);

// Operatorlar
// a) Aritmetik operatorlar
// +, -, *, /, %, **, ++, --
// b) Taqqoslash operatorlari
// ==, ===, !=, !==, >, <, >=, <=
// c) Mantiqiy operatorlar
// && - AND ikkalasi true bolsa true, || - OR bittasi true bolsa true, ! - NOT true bolsa false, false bolsa true

// let numberOfBooks = +prompt("nechta kitob o'qigansiz?");
// const booksDB = {
//   count: numberOfBooks,
//   books: {},
//   authors: {},
//   genres: [],
//   private: false,
// };

// setFavoriteSeries()
// function setFavoriteSeries() {
//   for (let i = 0; i < 2; i++) {
//   const a  = prompt(`oxirgi korgan serialingiz ${i}?`, " "); 
//   const b  = prompt(`nechi baxo berasiz ${i}?`, " "); 

//   if (a != null && b != null && a != "" && b != "" ) {
//     seriesDB.series[a] = b;
// } else {
//   i--;
// }
// }
// }

// if (seriesDB.count < 5) {
//   console.log("kam serial korgan ekansiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   log("siz klassik tomoshabinsiz");
// } else if (seriesDB.count >= 10) {
//   console.log("siz serial ishqibozisiz");
// }

// Shartli operatorlar
// 1. if-else
let grade = 84;

if (grade >= 90) {
  console.log("A'lo ");
} else if (grade >= 80) {
  console.log("Yaxshi ");
} else if (grade >= 70) {
  console.log("Qoniqarli ");
} else {
  console.log("Qoniqarsiz");
}

// ternary operator
let score = grade >= 90 ? "A'lo" : "Qoniqarli";

// switch operatori
let weeks = 4;
switch (weeks) {
  case 1:
    "Dushanba";
    break;
  case 2:
    "Seshanba";
    break;
  case 3:
    "Chorshanba";
    break;
  default:
    console.log("Bunday kun yoq");
}

// Sikllar - for, while, do-while, for-in, for-of
// 1. for
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}

// 2. while
let a = 2;
while (a < 10) {
  console.log(a);
  a++;
}

// 3. do-while
let b = 2;
do {
  console.log(b);
  b++;
} while (b < 9);

// 4. for-in
let student = {
  name: "kimdir",
  age: 21,
  hobby: "learn english",
};

for (let xususiyat in student) {
  console.log(xususiyat + ":" + student[xususiyat]);
}

// 4. for-of
let families = ["mother", "father", "sister", "brother"];
for (let family of families) {
  console.log(family);
}

// Tayinlash operatolrari
// 1. x += y ===> x = x + y
// 2. x -= y ===> x = x + y
// 3. x *= y ===> x = x * y
// 4. x /= y ===> x = x / y
// 5. x %= y ===> x = x % y
// 6. x **= y ===> x = x ** y

// operatorlar
// raqam va matematik
// 1. toFixed() - Verguldan keyin nechta raqam qolishini belgilash
// 2. parseInt() / parseFloat() — Matn shaklidagi sonni butun yoki haqiqiy songa o'tkazish.
