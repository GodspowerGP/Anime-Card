/* ARRAYS */

let num = 22;

let myArray = ['first','second','third','fourth','fifth', [1,2,3,4,5,6,]];
console.log(myArray);
console.log(myArray[4]);
console.log(myArray[5][2]);

myArray[3] = 'senpi';
console.log(myArray);

myArray[4] = 'senpi';
console.log(myArray);

console.log(myArray.length);

myArray.pop(); //remove the last item on an array
myArray.push("james");// addes a new value at the end of an array

myArray.shift(); //remove the first item on an array
myArray.unshift("james");// addes a new value at the start of an array
console.log(myArray);

console.log(myArray.includes("senpi"));
console.log(myArray.includes("first"));

console.log(myArray.indexOf("third"));
console.log(myArray.slice(0, 4));

console.log(myArray.toString());
console.log(myArray.join(' - '));


/* 
  functions
  1. Name Function
  2. Arrow Function
  3. Call Function
*/

/*function greet(time,name){
    alert(`Good ${time} ${name}`);
}

greet('morning','dave');*/

const greet = ( time,number) => {
    alert(`Good ${time} ${number}`);
}

greet ('good', 'moring');