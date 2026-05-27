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
alert("o'chirildi") // ogohlantirish, xabar korsatadi
// 2. confirm()
const result = confirm("ochirmoqchimisiz") // OK yoki Cancel boladi
console.log(result);
// 3. prompt()
let ism = prompt("ismingizmi kirting") // matn kiritishni so'raydi
console.log(ism);

// Interpolatsiya - ``${}
let firstName = "Diyora"
let lastName = "Dilshodova"  
let ages = 16
console.log(`My name is ${firstName} ${lastName}, i'm ${ages} years old`);

// Operatorlar
// a) Aritmetik operatorlar
// +, -, *, /, %, **, ++, --
// b) Taqqoslash operatorlari
// ==, ===, !=, !==, >, <, >=, <=
// c) Mantiqiy operatorlar
// && - AND ikkalasi true bolsa true, || - OR bittasi true bolsa true, ! - NOT true bolsa false, false bolsa true

let numberOfBooks = +prompt("nechta kitob o'qigansiz?") 
const booksDB = {
    count: numberOfBooks,
    books: {},
    authors: {},
    genres: [],
    private: false
}

let question1 = prompt("oxirgi o'qigan kitobingiz nomi?")
let rate1 = +prompt("kitobga qancha baho berasiz?")

let question2 = prompt("oxirgi o'qigan kitobingiz nomi?")   
let rate2 = +prompt("kitobga qancha baho berasiz?")
booksDB.books[question1] = rate1;
booksDB.books[question2] = rate2;

