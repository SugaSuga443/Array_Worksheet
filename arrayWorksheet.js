//Part 1
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);
console.log(fruits.length);

//Part 2
fruits.push("orange");
console.log("Pushed Fruit", fruits);

const poppedFruits = fruits.pop();
console.log("Poppped Fruit", poppedFruits);
console.log(fruits);

fruits.push("mango", "pear");
console.log("More Pushed Fruits", fruits);

const poppedFruits2 = fruits.pop();
console.log("Poppped Fruit", poppedFruits2);

//Part 3
for(let i = 0;  i <=fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = 0; i < fruits.length; i++){
    upperCaesFruits = fruits[i].toUpperCase();
    console.log(upperCaesFruits);
}

//count specific items
function countOccurrences(fruits, value) {
    let count = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === value) {
            count++;
        }
    }
    console.log(count);
}

let value = "apple";
countOccurrences(fruits, value);

//Part 4
let cart = new Array();
cart.push("shrimp","butter","garlic");
console.log(cart);

const poppedCart = cart.pop();
console.log("Popped Item", poppedCart);
console.log(cart);
console.log(cart.length);

let numbers = ([1, 2, 3, 4, 5]).reduceRight(function(previous, current){
    previous.push(current);
    return previous;
},[]);//reduceRight is used to iterate from right to left
console.log(numbers);
console.log(numbers.length);

//Part 5
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

function arrayLength(array1, array2){
    if (array1.length > array2.length){
        console.log("Array 1 is longer.");
    }
    else if (array1.length < array2.length){
        console.log("Array 2 is longer.");
    }
    else{
        console.log("The arrays are equal.");
    }
}
arrayLength(array1, array2); //interested to know why this does not need a console.log to display in developer tools.

//Part 6
const array = [10, 20, 30, 40, 50, 60];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// const evenArray = array.filter((number) => number % 2 === 0);
// console.log(evenArray);

//Part 7
const students = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Science"];

function mixClasses(students, subjects){ //this function takes two arrays and returns a new array with all combinations of students and subjects.
    const mixedClasses = [];
    for (let i = 0; i < students.length; i++){// This is for the students array
        for (let j = 0; j < subjects.length; j++){// This is for the subjects array
            mixedClasses.push(`${students[i]} - ${subjects[j]}`); // This is where the two arrays are combined
        }
    }
    return mixedClasses;// This returns the new array with all combinations of students and subjects.
}
console.log(mixClasses(students, subjects));
//This will display the combinations of students and subjects in the console.