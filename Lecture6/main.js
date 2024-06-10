// var x = 15;

// {
//     let x = 5;
//     console.log(x);
//     // const y = 19;
//     // y = 45; // This is a error
//     // console.log(y);
// }

// console.log(x);

// var x = function(x,y){
//     return x+y;
// }

// const x= (x, y)=>{
//     return x+y;
// }
// or
// const x = (x, y)=> x+y;  // short hand syntax of an arrow function

// console.log(x(5, 6));

// const q1 = ['Jan', 'Feb', 'Mar'];
// const q2 = ['Apr', 'May', 'Jun'];
// const q3 = ['Jul', 'Aug', 'Sep'];
// const q4 = ['Oct', 'Nov', 'Dec'];

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year);
// console.log(...q1);

// const myNumbers = [25, 12, 50, 77, -1];
// let maxValue = Math.max(...myNumbers);
// console.log(maxValue);.


// const myNumbers = [25, 12, 50, 77, -1];
// let sum = 0;
// for(let num of myNumbers){
//     sum += num;
// }
// console.log(sum);

// const name = "cipherschools";
// let text = "";
// for(let ch of name){
//     text += ch + " ";
// }
// console.log(text);

// const fruits = new Map([
//     ['apple',500],
//     ['bananas', 300],
//     ['oranges', 200],
// ]);
// console.log(fruits);
// console.log(fruits.get('oranges'));

// const letters = new Set();
// letters.add('a');
// letters.add('b');
// letters.add('a');
// console.log(letters);

// class Car{
//     constructor(name, mfgyear){
//         this.name = name;
//         this.mfgyear = mfgyear;
//     }
// }
// const myCar1 = new Car('Mercedes', 2022);
// const myCar2 = new Car('Porsche', 2020);
// console.log(myCar1, myCar2);

// const myFunction = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('This is Inside Promise');
//             resolve();
//         }, 2000);
//     });
// };
// myFunction().then(()=>{
//     console.log('resolved');
// }).catch(()=>{
//     console.log('rejected');
// });

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     eyeColor: 'Blue',
// };
// let id = Symbol('ID');
// person[id] = 140111;
// console.log(person);

// const addTwoNumbers = (a, b=10)=> a+b;
// console.log(addTwoNumbers(10));

const addNumbers = (...args)=>{
    // console.log(args);
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
};
console.log(addNumbers(10, 14, 16, 22, 1, 45));