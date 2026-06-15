// 1. kichik son toppish
// let a = 8;
// b = 8;
// c = 10;

// if (a < b && a < c) {
//   console.log(a);
// } else if (b < a && b < c) {
//   console.log(b);
// } else if (c < a && c < b) {
//   console.log(c);
// } else {
//   console.log("not");
// }

// 2. ortachasini topish
// if (a > b && a < c) {
//   console.log(a);
// } else if (b > a && b < c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// 3.
// if (a > b) {
//   console.log(a);
// } else if (b > a) {
//   console.log(b);
// } else if (a == b) {
//   console.log(0);
// } else {
//   console.log("mumkin emas");
// }

// 4.
y = 9;

// if (x > y && y > x) {
//   console.log("1 chorak");
// } else if (x < y && y > x) {
//   console.log("2 chorak");
// } else if (x < y && y < x) {
//   console.log("3 chorak");
// } else if (x > y && y < x) {
//   console.log("4 chorak");
// } else {
//   console.log("x va y teng");
// }

// 5.
let fx;
// if (x > 0) {
//   console.log((fx = 2 * Math.sin(x)));
// } else {
//   console.log((fx = x - 6));
// }

//  6.
let x = 5;
// if (x < -2 || x > 2) {
//   console.log((fx = 2 * x));
// } else {
//   console.log((fx = -3 * x));
// }

// 7.
// if (x <= 0) {
//   console.log((fx = -x));
// } else if (0 < x && x < 2) {
//   console.log((fx = x ** 2));
// } else if (x >= 2){
//   console.log((fx = 4));
// }

// 8.
// let q = 7;
// w = 2;
// r = 3;
// if (q + w > r && w + r > q && q + r > w) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 9.
// let temp = 70;
// if (temp <= 0) {
//   console.log("freezing");
// } else if (temp <= 10) {
//   console.log("very cold");
// } else if (temp <= 20) {
//   console.log("cold");
// } else if (temp <= 30) {
//   console.log("normal");
// } else if (temp <= 40) {
//   console.log("hot");
// } else {
//   console.log("very hot");
// }

// switch (temp) {
//   case temp <= 0:
//     "freezing";
//     break;
//   case temp <= 10:
//     "very cold";
//     break;
//   case temp <= 20:
//     "cold";
//     break;
//   case temp <= 30:
//     "normal";
//     break;
//   case temp <= 40:
//     "hot";
//     break;
//   case temp <= 0:
//     "very hot";
//     break;
//   default:
//     break;
// }

// 10.
// let t = -8;
// // 1-usul
// if (t > 0) {
//   if (t % 2 === 0) {
//     console.log("musbat juft son");
//   } else {
//     console.log("musbat toq son");
//   }
// } else if (t < 0) {
//   if (t % 2 === 0) {
//     console.log("manfiy juft son");
//   } else {
//     console.log("manfiy toq son");
//   }
// } else {
//   console.log("son 0 ga teng");
// }
// 2-usul
// if (t > 0 && t % 2 === 0) {
//   console.log("musbat juft son");
// } else if (t < 0 && t % 2 === 0) {
//   console.log("manfiy juft son");
// } else if (t > 0 && t % 2 !== 0) {
//   console.log("musbat toq son");
// } else if (t < 0 && t % 2 !== 0) {
//   console.log("manfiy toq son");
// } else {
//   console.log("son 0 ga teng");
// }
// 3-usul
// switch (true) {
//   case t > 0 && t % 2 === 0:
//     console.log("musbat juft son");
//     break;

//   case t < 0 && t % 2 === 0:
//     console.log("manfiy juft son");
//     break;

//   case t > 0 && t % 2 !== 0:
//     console.log("musbat toq son");
//     break;

//   case t < 0 && t % 2 !== 0:
//     console.log("manfiy toq son");
//     break;

//   default:
//     console.log("son 0 ga teng");

//     break;
// }

// 11.
// let u = 711;
// if (u <= 99 && u >= 10) {
//   if (u % 2 === 0) {
//     console.log("2 xonali juft son");
//   } else {
//     console.log("2 xonali toq son");
//   }
// } else if (u <= 999 && u >= 100) {
//   if (u % 2 === 0) {
//     console.log("3 xonali juft son");
//   } else {
//     console.log("3 xonali toq son");
//   }
// }

// 12.
// let n = 4;
// let natija;
// if (n === 0) {
//   natija = 0;
// } else if (n === 2) {
//   natija = 1;
// } else {
//   natija = (n * (n + 1) * (n + 2)) / 6;
// }

// 13.
// let on_break = true;
// let price = 20;
// if (price >= 20 && on_break === true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 14.
// let a1 = 51;

// let onlar = Math.floor(a1 / 10);
// let birlar = a1 % 10;

// let newNum = birlar * 10 + onlar;
// if (newNum <= a1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15.
// let b1 = 2324;
// if (b1 < 10) {
//   console.log("1 xonali");
// } else if (b1 < 100) {
//   console.log("2 xonali");
// } else if (b1 < 1000) {
//   console.log("3 xonali");
// } else if (b1 < 10000) {
//   console.log("4 xonali son");
// } else if (b1 < 100000) {
//   console.log("5 xonali son");
// } else {
//   console.log("kop xonali son");
// }

// 16.
// let n = 648; // Input son (0 dan 10000 gacha bo'lgan istalgan butun son)
// let yigindi = 0;

// if (n < 10) {
//     // 1 xonali son bo'lsa, raqamlar yig'indisi o'ziga teng
//     yigindi = n;
// }

// else if (n < 100) {
//     // 2 xonali son (masalan: 73)
//     let birlar = n % 10;
//     let onlar = Math.floor(n / 10);
//     yigindi = onlar + birlar;
// }

// else if (n < 1000) {
//     // 3 xonali son (masalan: 582)
//     let birlar = n % 10;
//     let onlar = Math.floor(n / 10) % 10;
//     let yuzlar = Math.floor(n / 100);
//     yigindi = yuzlar + onlar + birlar;
// }

// else if (n < 10000) {
//     // 4 xonali son (masalan: 2324)
//     let birlar = n % 10;
//     let onlar = Math.floor(n / 10) % 10;
//     let yuzlar = Math.floor(n / 100) % 10;
//     let minglar = Math.floor(n / 1000);
//     yigindi = minglar + yuzlar + onlar + birlar;
// }
// console.log(yigindi);

// 17.
// let n = 2324;
// let toqYigindi = 0;

// let birlar = n % 10;
// let onlar = Math.floor(n / 10) % 10;
// let yuzlar = Math.floor(n / 100) % 10;
// let minglar = Math.floor(n / 1000);

// if (n < 10) {
//     // 1 xonali son bo'lsa
//     if (n % 2 !== 0) toqYigindi += n;
// }

// else if (n < 100) {
//     // 2 xonali son bo'lsa
//     if (onlar % 2 !== 0) toqYigindi += onlar;
//     if (birlar % 2 !== 0) toqYigindi += birlar;
// }

// else if (n < 1000) {
//     // 3 xonali son bo'lsa
//     if (yuzlar % 2 !== 0) toqYigindi += yuzlar;
//     if (onlar % 2 !== 0) toqYigindi += onlar;
//     if (birlar % 2 !== 0) toqYigindi += birlar;
// }

// else if (n < 10000) {
//     // 4 xonali son bo'lsa
//     if (minglar % 2 !== 0) toqYigindi += minglar;
//     if (yuzlar % 2 !== 0) toqYigindi += yuzlar;
//     if (onlar % 2 !== 0) toqYigindi += onlar;
//     if (birlar % 2 !== 0) toqYigindi += birlar;
// }

// console.log(toqYigindi);

// 18.
// let m = 80,
//   l = 67,
//   s = 56;

// if (m > l && m > s) {
//   console.log(m);
// } else if (l > m && l > s) {
//   console.log(l);
// } else {
//   console.log(s);
// }

// 19.
// let f = 12345;

// let birlar = f % 10; // 5
// let onlar = Math.floor(f / 10) % 10; // 4
// let yuzlar = Math.floor(f / 100) % 10; // 3
// let Minglar = Math.floor(f / 1000) % 10; // 2
// let onMinglar = Math.floor(f / 10000) % 10; // 1

// let engKatta = onMinglar;

// if (minglar > engKatta) {
//   engKatta = minglar;
// }
// if (yuzlar > engKatta) {
//   engKatta = yuzlar;
// }
// if (onlar > engKatta) {
//   engKatta = onlar;
// }
// if (birlar > engKatta) {
//   engKatta = birlar;
// }

// 20.
// let n = 62815; // Berilgan 5 xonali butun son

// 1. Raqamlarni chapdan o'ngga qarab tartib bilan ajratib olamiz
// let r0 = Math.floor(n / 10000);   // 0-indeks: 6
// let r1 = Math.floor(n / 1000) % 10; // 1-indeks: 2
// let r2 = Math.floor(n / 100) % 10;  // 2-indeks: 8
// let r3 = Math.floor(n / 10) % 10;   // 3-indeks: 1
// let r4 = n % 10;                    // 4-indeks: 5

// // 2. Boshlang'ich mantiq: eng katta deb 0-indeksdagi raqamni olamiz
// let engKatta = r0; 
// let engKattaIndex = 0; 

// // 3. Qolgan raqamlarni navbat bilan tekshiramiz
// if (r1 > engKatta) {
//     engKatta = r1;
//     engKattaIndex = 1;
// }
// if (r2 > engKatta) {
//     engKatta = r2;
//     engKattaIndex = 2;
// }
// if (r3 > engKatta) {
//     engKatta = r3;
//     engKattaIndex = 3;
// }
// if (r4 > engKatta) {
//     engKatta = r4;
//     engKattaIndex = 4;
// }

// // 4. Natijani chiqaramiz
// console.log("Eng katta raqam: " + engKatta);
// console.log("Turgan o'rni (indeksi): " + engKattaIndex);


