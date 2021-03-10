// 1. variable data types

// var firstname = "John";
// console. log(firstname);

// var lastName = "Smith";
// var age = 28;

// var fullAge =true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job);

//2. Type coercion


// var ismarried = true;


//3. Basic Operators
//#1 Math Operators
// var yearJohn, yearMark, ageJohn, ageMark;
// var year = 2020;
// var ageJohn = 33;
// var ageMark = 19;

// yearJohn = year -  ageJohn;
// yearMark = year - ageMark;
// console.log(yearJohn);
// console.log(yearMark);

// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 2);

// //Logical Operators

// // <, >, <=, >=

// var JohnOlder = ageJohn >= ageMark;
// console.log(JohnOlder);

// //Type of Operator

// console.log(typeof JohnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "John is older than Mark");
// var x;
// console.log(typeof x);

//4. Operator Precedence
// var now = 2020;
// var yearJohn = 1987;
// var fullAge = 17;

// //Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping Operator
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //Multiple Assignment
// var x, y;
// x = y =(3 + 5) * 4 - 6;

// //More Operators
// x *= 2;
// x += 10;

// x = x -1; //or
// x-= 1; //or
// x--;

// x = x + 1;
// x = ++;
// console.log(x);

//Coding exercise 1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula:

BMI = mass / height * height
(mass in kg and heigh in meter)

1. Store mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3.
(Something like "is Mark's BMI higher than John's? true")
*/
//1.
// var massMark, massJohn, heightJhon, heightMark;
// //2.
// var massMark = 75;
// var massJohn = 70;
// var heightMark = 1.9;
// var heightJhon = 1.8;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJhon = massJohn / (heightJhon * heightJhon);

// console.log(BMIMark);
// console.log(BMIJhon);


// //3.
// var inf = "Mark has a higher BMI than John";
// console.log(inf);
// //4.
// var compare = BMIMark >= BMIJhon;
// console.log(compare);


/*----------------------
        If Else
------------------------ */

// var massMark, massJohn, heightJhon, heightMark;

// var massMark = 75;
// var massJohn = 70;

// var heightMark = 1.9;
// var heightJhon = 1.8;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJhon = massJohn / (heightJhon * heightJhon);

// var BMIMarkhigher = BMIMark > BMIJhon;

// var BMIMarkhigherthan = "high";

// console.log("Is Mark's BMI higher than John's" + BMIMarkhigher);

// if (BMIMarkhigherthan === "low") {
//     console.log("Mark higher is low than Jhon");
// } else {
//     console.log("Mark is higher than Jhon");
// }



/*-------------------------------------------------------*/

// var firstName = "John";
// var civilStatus = "single";

// if(civilStatus === "married") {
//     console.log(firstName + "is married!");
// } else {
//     console.log(firstName + "will hopefully marry soon!");
// }

// var ismarried = true;

// if (ismarried) {
//     console.log(firstName + "ismarried!");
// } else {
//     console.log()
// }


//-------------------------------------------//
/*6. Boolean logic 
AND 
true AND true = true
true AND false = false
false AND true = false
false AND false = false

OR
true OR true = true
true OR false = true
false OR true = true
false OR false = false

NOT
NOT true = false
Not false = true

*/
// var firstName = "John";
// var age = 20;

// if(age < 13){
//     console.log(firstName + " is a boy");
// } else if(age >= 13 && age <20){
//     console.log(firstName + " is a teenager");
// } else if (age >=20 && age <30){
//     console.log(firstName + " is a young man");
// }

// else {
//     console.log(firstName + " is a man");
// }

// switch(true){
//     case age < 13:
//     console.log(firstName + " is a boy");
//     break;
//     case age >= 13 && age <20:
//     console.log(firstName + " is a teenager");
//     break;
//     case age >=20 && age <30:
//     console.log(firstName + " is a young man");
//     break;
//     default:
//     console.log(firstName + " is a man");
// }

/* ---------------------------------------
7. Ternary operator and Switch Statement 
------------------------------------------ */

// var firstName ="John";
// var age = 14;

// age >= 17 
// ? console.log(firstName + " is full age") 
// : console.log(firstName + " is not full age");

// var isFullAge = age >= 17 ? true : false;

// if (age >= 17){
//     console.log(firstName + " is full age") 
// } else {
//     console.log(firstName + " is not full age");
// } 

//Switch Statement

// var job = "lecturer";

// switch(job){
//     case "lecturer":
//     case "teacher":
//     console.log(firstName + " is a teacher");
//     break;
//     case "driver":
//     console.log(firstName + " is a driver");
//     break;
//     case "designer":
//     console.log(firstName + " is a designer");
//     break;
//     default:
//     console.log(firstName + " does something else");
// }


/* --------------------------------------------
Truthy and Falsy values and equality operators
----------------------------------------------- */
//Falsy values: undefined, 0, '', null, NaN
//Truthy values: Not falsy values

/*
var height = 23;

if(height || height === 0){
    console.log("Variable is defined");
}else{ 
    console.log("Variable has NOT been defined");
}

//Equality Operator
if(height === "23") {
    console.log("The == operator does type coercion");
}
*/


/*
    #9 Functions
*/

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// //Function Call
// var ageJohn = calculateAge(1987);
// var ageMike = calculateAge(2000);
// var ageMarry = calculateAge(1948);
// console.log(ageJohn, ageMike, ageMarry);



// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + " retires in " + retirement + " years");
//     } else {
//         console.log(firstName + " is already retired ");
//     }

// }

// yearsUntilRetirement(1987, "John");
// yearsUntilRetirement(2000, "Mike");
// yearsUntilRetirement(1948, "Marry");


// /*
//     #10  Function declaration and Expressions
// */

// //function declaration
// function whatDoYouDo(job, firstName) {}

// //function Expression
// var whatDoYouDo = function(job, firstName) {

//     switch(job){
//     case "lecturer":
//     case "teacher":
//     console.log(firstName + " is a teacher");
//     break;
//     case "driver":
//     console.log(firstName + " is a driver");
//     break;
//     case "designer":
//     console.log(firstName + " is a designer");
//     break;
//     default:
//     console.log(firstName + " does something else");
// }

// };

// whatDoYouDo("teacher", "John");
// whatDoYouDo("designer", "Mike");
// whatDoYouDo("instructor", "Marry");


/*
    #11 Array
*/

// Initialize new array
// var names = ["John", "Mike", "Mark", "Marry"];
// var years = new Array(1990, 1987, 2000, 1948);

// console.log(names);
// console.log(names[1]);
// console.log(names.length);

// //Mutate array data
// names[1] = "Ben";
// names[names.length] = "Peter";
// console.log(names);


// //Differnt data types
// var John = ["John", "Smith", 1990, "designer", false];

// John.push("blue");
// John.unshift("Mr.")
// console.log(John);


// John.pop();
// John.pop();
// John.shift();
// console.log(John);

// console.log(John.indexOf("teacher"));

// var isDesigner =John.indexOf("designer") === -1 
// ? "John is not designer" 
// : "John is a Designer";
// console.log(isDesigner);

//  12. Object and Properties

// var names = ["John", "Mark", "Mike", "Marry"];

// var john = {
//     //key-values pair
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Bob", "Mark"],
//     job: "teacher",
//     ismarried: true,
//     johnFather: {
//         firstName:"Mike",
//         birthYear: 1978
//     }
// };
// // Cara I
// console.log(john);
// console.log(john.firstName);
// console.log(john.job);
// console.log(john.family[1]);
// console.log(john.johnFather.birthYear);

// //Cara II
// console.log(john["firstName"]); //John
// console.log(john["family"][2]); //Mark
// console.log(john["johnFather"]["firstName"]); //Mike

// john.job = "designer";
// john.age = 31;
// john["ismarried"] = false;
// console.log(john);



//  13. Objects and Methods
/*
var john = {
    //key-values pair
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Bob", "Mark"],
    job: "teacher",
    ismarried: true,
    calculateAge: function() {
        return 2020 - this.birthYear;
        //hilangkan yang diatas ganti dengan di bawah
        this.age = 2020 - this.birthYear;
    }
 };

 john.calculateAge(); //(a part of another slash back that on top)
 console.log(john);
 var age = john.calculateAge();
 console.log(age);
console.log(john.calculateAge());
console.log(john);

/*-----------------------------
    14. Loops and Iteration
-------------------------------*/

//For loop
// for(var i = 0;i < 10; i++) {    //i += 2
// console.log(i);
// }
/*
var john = ["John", "Smith", 1990, "teacher", false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//for loop backward
// for(var i = 10; i >0; i--) {
//     console.log(i);
// }

// for (var)

// While loop
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 2;
// }


// var john = ["John", "Smith", 1990, "teacher", false];

// for(var i = 0; i < john.length; i++){
//     if (typeof john[i] !== "string") break; //break - ketika dapat data selain string maka dia akan keluar dari looping
//     console.log(john[i]);                   //continue - ketika dapat data selain string maka dia akan melewati/melompati file yang bukan data string
// }*/

// 10 Februari 2021

//let kalimat = Hello nama saya;
/*
// Function Declaration
function sayHello() {}

// Function Expression
const sayHello2 = function () {};

const sayHello3 = (param1, param2 = "Adam") => 'Hello ${param1} ${param2}';

console.log(sayHello3("Stenly", "Doe")); */

/*
const display = (param1, param2, ...rest) => {
    console.log(param1, param2, rest);
};

display(1,2,3,4,5,6,7);

*/

/*
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [8,9];
//const newArr = [...arr1];
const combineArr = arr1.concat(arr2.concat(arr3))
const combineArr6 = [...arr1, ...arr2, ...arr3];

console.log(combineArr6);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

person = {
    ...person,
    address: "Manado",
    job: "Teacher",
    
};

const obj1 = {a:1, b:2, c:3};
const obj2 = {}

*/

///////////////////////////
//-Pertemuan 8-//
///////////////////////////

// let age;
// const arrPerson = ["Jhon", "Doe", 33, true, "Minahasa Utara"];
/*
const firstName = arrPerson[0];
const lastName = arrPerson[1];
const age = arrPerson[2];
const isMarried = arrPerson[3]; */

// 
// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);
// const objPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     address: "Minahasa",
// };

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;

// const { age:umur } = objPerson;

// console.log(umur);

// let {firstName, lastName, ...rest} = objPerson;

// console.log(firstName, lastName, rest);

// const display = ({ firstName, lastName }) =>
//     `Hallo nama saya ${firstName} ${lastName}`;

// console.log(display(objPerson));


// Review //

// #Destructuring
//import { student } from "./student.js";


/*-------------------
    # Pertemuan 9
--------------------*/

// const student = {
//     fullName: "John",
//     address: "Manado",
//     age: "25",
// };

// const displayStudentInformation = (props) => {
//     const {fullName, address} = props;
//     console.log('Student Name: ${fullName}, Address: ${address}');
// };


/*--------------------
    # Pertemuan 10
---------------------*/

// Asycronous JavaScript

//CallBack
// function greetings(fullName) {
//     console.log(`Hi ${fullName}`);
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;
//     callback(fullName);
// }

// introduction("John", "Doe", (fullName) => {
//     console.log(`Hi ${fullName}`);
// }); 

// console.log("satu");
// setTimeout(() => {
//     console.log("dua");
// }, 2000);
// console.log("tiga");

// function proses1() {
//     console.log("Proses 1 selesai dijalankan");
// }

// function proses2(callback) {
//     setTimeout(() => {
//         console.log("Proses 2 selesai dijalankan");
//         callback();
//     }, 2000);
// }

// function proses3() {
//     console.log("Proses 3 selesai dijalankan");
// }

// proses1();
// proses2(proses3);

// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// let condition = true;

// function newPromise() {
//     return newPromise = new Promise((resolve, reject) => {
//         if (condition) {
//             resolve("Berhasil");
//         } else {
//             reject("Error");
//         }
//     });
// }

// newPromise()
//     .then((result) => {
//         return result;
//     })
//     .then((result2) => {
//         console.log(`${result2} !!!`);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function getIDStudent() {
//     return new Promise((resolve, reject) => {
//         resolve("12345");
//     })
// }

// function getNameById(id) {
//     return new Promise((resolve, reject) => {
//         if (id === '12345') {
//             resolve('John Doe')
//         } else {
//             reject("Unknown ID Student");
//         }
//     });
// }

// 

//#Promise

// getIDStudent().then((id) => {
//         return getNameById(id)
//     })
//     .then((name) => {
//         console.log(name);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//Async

// const getNameByIdAsync = async() => {
//     try {
//         const id = await getIDStudent();
//         const name = await getNameById(id);
//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getNameByIdAsync();


/*--------------------
    # Pertemuan 11
---------------------*/

//Syncronous Vs Asyncronous

//Syncronous, Blocking, Single-Thread
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");

//Asyncronous, Non-Blocking
//Multi-Thread : Parallel

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2");
// }, 3000);
// console.log("Proses 3");

//Single-Thread : Concurent
// setTimeout(() =>{
//     console.log("Proses 1")
//     setTimeout(() =>{
//     console.log("Proses 2");
//     setTimeout(() =>{
//         console.log("Proses 3");
//     }, 3000);
//     }, 3000);
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index) => {
//     setTimeout(() => {
//         console.log(item);
//     }, index * 3000);
// });

// function newPromise() {
//     let newPromise = new Promise((resolve, reject) => {

//         if (condition) {
//             resolve("Berhasil");
//         } else {
//             reject("Gagal");
//         }
//     });
// };

//Then - Catch

// newPromise()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//Async - await
// const getPromise = async() => {
//     const res = newPromise()
//         .then((res) => {
//             console.log(res);
//         })
//         .catch(error);
//     console.log(error);
// }

// getPromise();


/*--------------------
    # Pertemuan 12
---------------------*/

//#1 Class

// class Orang {
//     constructor(nama, umur) {
//         this.nama = nama;
//         this.umur = umur;
//     }

//     bekerja() {
//         console.log(`${this.nama} sedang bekerja seperti biasa`);
//     }
// }

// const user1 = new Orang("Godlife", "23");
// user1.bekerja();

//#2 Inheritance

// class Orang {
//     constructor(nama, umur) {
//         this.nama = nama;
//         this.nama = nama;
//     }

//     tidur() {
//         console.log(`${this.nama} sedang tidur.`);
//     }

//     makan() {
//         console.log(`${this.nama} sedang makan`);
//     }
// }

// class Pelajar extends Orang {
//     constructor(nama, umur, namaSekolah) {
//         super(nama, umur);
//         this.namaSekolah = namaSekolah;
//     }

//     belajar() {
//         console.log(`${this.nama} belajar di ${this.namaSekolah}`);
//     }
// }

// const user = new Pelajar("John", "17", "Unklab");

// user.belajar();