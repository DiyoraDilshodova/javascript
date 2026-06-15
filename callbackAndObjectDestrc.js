let student = {
    name: 'Diyora',
    age: 16,
    hobby: 'Programming',
    getInfo: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Destructuring the student object
const { name, age, hobby, getInfo } = student;
console.log(age); // Output: 16