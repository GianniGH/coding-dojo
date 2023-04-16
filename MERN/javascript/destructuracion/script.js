//PROBLEMA 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//tesla
//mercedes

//PROBLEMA 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//name is not defined
//Elon

//PROBLEMA 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//12345
//undefined -> person no contiene password

//PROBLEMA 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second); //first es igual a second 
console.log(first == third); //first es igual a third

//false
//true

//PROBLEMA 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //VALUE
const { secondKey } = lastTest; //arr
const [ ,willThisWork] = secondKey; // 5
//Predict the output
console.log(key); //
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//value
//array [1, 5, 1, 8, 3, 3]
//1
//5