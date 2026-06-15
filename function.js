// Function
// 1. Function Declaration
salomBer("Diyora", 16); // argument
function salomBer(name, age) {
  //parametr
  console.log(`Salom ${name}, I'm ${age}`);
}

// 2. Function Expression
const hiWorld = function () {
  console.log("function expression");
};
hiWorld();

// 3. Arrow function
const arrow = (a, b) => {
  return a + b;
};

console.log(arrow(2, 3));
