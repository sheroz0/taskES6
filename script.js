// Q1 

// Global Scope

var varVariable = " var variable!";
let letVariable = " let variable!";
const constVariable = "const variable!";

function exampleFunction() {
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 
}

exampleFunction();


console.log(varVariable); 
console.log(letVariable); 
console.log(constVariable); 



// Function Scop


function myFunction() {
    var varVariable = "I am a var variable inside the function!";
    let letVariable = "I am a let variable inside the function!";
    const constVariable = "I am a const variable inside the function!";

    
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable);  
}


myFunction();


console.log(varVariable); 
console.log(letVariable); 
console.log(constVariable); 



// Block Scope:


if (true) {
    var varVariable = "I am a var variable inside the block!";
    let letVariable = "I am a let variable inside the block!";
    const constVariable = "I am a const variable inside the block!";

    
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 
}


console.log(varVariable); 
console.log(letVariable); 
console.log(constVariable); 


// Hoisting with var

var myVar; 
console.log(myVar); 
myVar = "clear ";
console.log(myVar); 

// Hoisting with let and const:

console.log(Lett);
let Lett = " let";
console.log(myLet); 


console.log(Constt);
const Constt = " const!";
console.log(myConst); 

// Re-declaration

var Var = "First ";
var Var = "Second ";
console.log(Var); 



let Let = "First ";
let Let = "Second ";


const myConst = "First ";
const myConst = "Second "; 


// Re-assignment:

var myVar = "First Value";
myVar = "Second Value"; 
console.log(myVar); 



let myLet = "First Value"; 
myLet = "Second Value"; 
console.log(myLet); 



const myConst = "First Value"; 
myConst = "Second Value"; 

console.log(myConst);



// Temporal Dead Zone (TDZ):


{
    
    console.log(Let); 
    let Let = "Hello!";
    
    console.log(Const);  
    const Const = "World!";
}


// When to use var, let, and const:

// VAR

function exampleWithVar() {
    if (true) {
        var Var = "m";
    }
    console.log(Var); 
}

exampleWithVar();

// LET/

function exampleWithLet() {
    for (let i = 0; i < 3; i++) {
        let loopVar = "final" + i;
        console.log(loopVar); 
    }
    // console.log(loopVar); 
}

exampleWithLet();


// CONST/

const API_URL = "api"; 

function fetchData() {
    console.log( API_URL);
    
}

fetchData();



// String Interpolation:


let firstName = "muhammad";
let lastName = "sheroz";


let fullName = `${firstName} ${lastName}`;//  template literal 


console.log(fullName); 


// multi  template literal strings:



let address = ` kesa hai bhai 
 sahi
`;


console.log(`bhai ${address} hai na tu `);


// Simple Expressions:


let num1 = 5;
let num2 = 10;

 
let result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;


console.log(result); 


// Function Calls:


function multiply(num1, num2) {
    return num1 * num2;
}


let result = `The product of 4 and 5 is ${multiply(4, 5)}.`;


console.log(result); 





// Creating a Tagged Template:

function logTemplate(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values); 
}


let name = "Alice";
let age = 25;

logTemplate`My name is ${name} and I am ${age} years old.`;


// Formatting:


function toUpperCaseTag(strings, ...values) {
  
    let result = strings.reduce((acc, str, i) => {
        return acc + str + (values[i] ? values[i] : '');
    }, '');
    
    return result.toUpperCase(); 
}


let name = "Alice";
let profession = "developer";

let formattedString = toUpperCaseTag`My name is ${name} and I am a ${profession}.`;

console.log(formattedString); 



// Conditional Logic:


let currentHour = new Date().getHours(); 


let greeting = `${currentHour < 12 ? "Good morning!" : "Good afternoon!"}`;

console.log(greeting);





// Loops within Template Literals:


let shoppingList = ["Apples", "Bananas", "Carrots", "Milk", "Bread"];


let htmlList = `
  <ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join('\n')}
  </ul>
`;


console.log(htmlList);



// /


// Escaping Backticks:


// ISKA JAWAB SAMJH NH ARHA HAI SEARCH KRNA HOGA 


// /




// Nested Template Literals:



let table = `
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    ${['John', 'Alice', 'Bob'].map(name => `
      <tr>
        <td>${name}</td>
        <td>${Math.floor(Math.random() * 30) + 20}</td>
      </tr>`).join('\n')}
  </table>
`;
console.log(table);






// Simple Condition:


let age = 20;

 
let canVote = age >= 18 ? "Yes" : "No";


console.log(canVote); 




// Even or Odd:

let number = 7; //

let evenOrOdd = (number % 2 === 0) ? "Even" : "Odd";

console.log(evenOrOdd);





// Grade Evaluation:

let score = 85;  

let grade = (score >= 90) ? "A" :
           (score >= 80) ? "B" :
           (score >= 70) ? "C" :
           (score >= 60) ? "D" : "F";

console.log(grade);



// Login Status:

let isLoggedIn = true;  

let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(statusMessage);



// Discount Eligibility:

let isMember = true;  
let purchaseAmount = 150; 

let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

console.log(discount);





// Determine Max Value:

function maxValue(a, b) {
    return a > b ? a : b;   
  }
  
  let result = maxValue(10, 20); 
  console.log(result); 
  


//   Greeting Message:

function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";  // Ternary operator to check if name is provided
  }
  

  let greetingWithName = greet("John");
  console.log(greetingWithName);  
  
  
  let greetingWithoutName = greet("");
  console.log(greetingWithoutName);  
  



//   Mapping Values:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];  

let newArray = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);  // Using map and ternary operator

console.log(newArray); 


// Filtering Values:

let strings = ["apple", "cat", "banana", "dog", "elephant", "hi"]; 

let filteredArray = strings.filter(str => str.length > 3 ? true : false);  

console.log(filteredArray);  




// Copying an Array:

let originalArray = [1, 2, 3, 4, 5]; 


let copiedArray = [...originalArray];  


console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);


console.log("Are they the same reference?", originalArray === copiedArray);  // This should return false




// Copying an Array:

const originalArray = [1, 2, 3, 4, 5];

const copiedArray = [...originalArray];


console.log('Original Array:', originalArray);
console.log('Copied Array:', copiedArray);


console.log('Are both arrays the same reference?', originalArray === copiedArray);


copiedArray[0] = 99;


console.log('Original Array after modification:', originalArray);
console.log('Copied Array after modification:', copiedArray);






// Merging Arrays:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


const mergedArray = [...array1, ...array2];


console.log('Merged Array:', mergedArray);






// Adding Elements to an Array:


const numbers = [2, 3, 4, 5];


const updatedNumbers = [1, ...numbers, 6];


console.log('Updated Numbers Array:', updatedNumbers);






// Copying an Object:

const originalObject = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};


const copiedObject = { ...originalObject };


console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);

console.log('Are both objects the same reference?', originalObject === copiedObject);

copiedObject.age = 35;


console.log('Original Object after modification:', originalObject);
console.log('Copied Object after modification:', copiedObject);







// Merging Objects: 


const object1 = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

const object2 = {
    age: 35,       
    job: 'Designer',  
    location: 'New York'
};


const mergedObject = { ...object1, ...object2 };


console.log('Merged Object:', mergedObject);







// Updating Object Properties:


const user = {
    name: 'John Doe',
    age: 28,
    email: 'johndoe@example.com'
};


const updatedUser = {
    ...user,
    email: 'john.doe@newdomain.com',  
    address: '123 Main St, Anytown, USA' 
};


console.log('Updated User:', updatedUser);



// Passing Array Elements as Arguments:

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];


const result = sum(...numbers);


console.log('The sum is:', result);




// Combining Multiple Arrays:

function combineArrays(...arrays) {
    
    return [].concat(...arrays);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];


const combinedArray = combineArrays(array1, array2, array3);
console.log('Combined Array:', combinedArray);




// Rest Parameter with Spread Operator:

function multiply(multiplier, ...numbers) {
   
    return numbers.map(num => num * multiplier);
}


const result = multiply(2, 1, 2, 3, 4, 5);


console.log('Multiplication Result:', result);







// Spread Operator with Nested Structures:

const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const copiedArray = [...nestedArray];


copiedArray[0][0] = 100;
copiedArray[1][2] = 200;


console.log('Original Nested Array:', nestedArray);
console.log('Copied Nested Array:', copiedArray);




// Sum Function:


function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}


console.log(sum(1, 2, 3)); 
console.log(sum(10, 20, 30, 40)); 
console.log(sum(5)); //
console.log(sum()); // 



// Average Function:



function average(...args) {
   
    if (args.length === 0) {
        return 0; //
    }

    
    const sum = args.reduce((total, current) => total + current, 0);


    return sum / args.length;
}


console.log(average(1, 2, 3)); 
console.log(average(10, 20, 30, 40)); 
console.log(average(5)); // 
console.log(average()); //







// First and Rest:


const numbers = [10, 20, 30, 40, 50];


const [first, ...rest] = numbers;

console.log('First element:', first);
console.log('Remaining elements:', rest);





// Skip and Rest:

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];


const [, , ...remainingColors] = colors;


console.log('Remaining colors:', remainingColors);






// Basic Destructuring:


const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA'
};


const { name, email, ...rest } = person;


console.log('Name:', name);
console.log('Email:', email);
console.log('Remaining Properties:', rest);







// Nested Destructuring:


const student = {
    id: 101,
    name: 'Jane Doe',
    grades: [90, 85, 88],
    info: {
        age: 20,
        major: 'Computer Science'
    }
};


const { id, name, info: { major }, ...rest } = student;


console.log('ID:', id);
console.log('Name:', name);
console.log('Major:', major);
console.log('Remaining Properties:', rest);





// Filter Even Numbers:

function filterEven(...args) {
  
    return args.filter(num => num % 2 === 0);
}


console.log(filterEven(1, 2, 3, 4, 5, 6)); //
console.log(filterEven(10, 15, 20, 25, 30)); //
console.log(filterEven(7, 8, 9)); // 
console.log(filterEven(1, 3, 5)); // 





// Combine and Sort Arrays:


function combineAndSort(...arrays) {
    
    const combinedArray = [].concat(...arrays);

   
    return combinedArray.sort((a, b) => a - b);
}


console.log(combineAndSort([10, 5, 8], [3, 1, 7], [6, 4, 9])); 
console.log(combineAndSort([15, 25], [5, 10], [20, 30])); 
console.log(combin





    // Basic Destructuring:

const fruits = ["apple", "banana", "cherry"];


const [firstFruit, secondFruit, thirdFruit] = fruits;


console.log('First Fruit:', firstFruit);   
console.log('Second Fruit:', secondFruit); 
console.log('Third Fruit:', thirdFruit);   





// Skipping Elements:


const colors = ["red", "green", "blue", "yellow"];


const [primaryColor, , tertiaryColor] = colors;


console.log('Primary Color:', primaryColor);    
console.log('Tertiary Color:', tertiaryColor);  







// Rest Operator:


const numbers = [1, 2, 3, 4, 5];


const [firstNumber, ...remainingNumbers] = numbers;


console.log('First Number:', firstNumber);         
console.log('Remaining Numbers:', remainingNumbers); 






// Basic Destructuring:


const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};


const { name, age, city } = person;


console.log('Name:', name);  
console.log('Age:', age);    
console.log('City:', city);  





// Renaming Variables:


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};


const { make: carMake, model: carModel, year: carYear } = car;


console.log('Car Make:', carMake);  
console.log('Car Model:', carModel); 
console.log('Car Year:', carYear);   






// Default Values:


const settings = {
    theme: "dark"
 
};


const { theme, language = "English" } = settings;


console.log('Theme:', theme);       
console.log('Language:', language); 





// Array of Arrays:


const nestedArray = [[1, 2], [3, 4], [5, 6]];


const [[a], [b], [c]] = nestedArray;


console.log('a:', a);  
console.log('b:', b);  
console.log('c:', c);  





// Object within an Object:


const profile = {
    username: "john_doe",
    details: {
        email: "john@example.com",
        address: "123 Main St, Springfield"
    }
};

const { username, details: { email, address } } = profile;

console.log('Username:', username); /
console.log('Email:', email);       
console.log('Address:', address);  








// Mix of Arrays and Objects:


const data = {
    id: 1,
    info: [
        { name: "Alice" }, 
        { age: 25 }        
    ]
};


const { id, info: [{ name }, { age }] } = data;


console.log('ID:', id);      
console.log('Name:', name);  
console.log('Age:', age);    





// Array Parameters:


function printCoordinates([x, y]) {
 
    console.log(`x: ${x}, y: ${y}`);
}


printCoordinates([5, 10]);  
printCoordinates([20, 30]); 
printCoordinates([100, 200]); 







// Object Parameters:


function displayUser({ name, age }) {

    console.log(`Name: ${name}, Age: ${age}`);
}


displayUser({ name: "Alice", age: 30 });  
displayUser({ name: "Bob", age: 25 });   
displayUser({ name: "Charlie", age: 35 }); 






// List Property Names:


const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};


const propertyNames = Object.keys(book);


console.log(propertyNames);  






// Count Properties:


const student = {
    name: "John Doe",
    age: 16,
    grade: "11th",
    school: "Springfield High"
};


const propertyNames = Object.keys(student);


const numberOfProperties = propertyNames.length;


console.log(numberOfProperties);  
































































































































































































































































































































