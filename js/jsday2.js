let person = 'i love this class';
console.log(person.toLowerCase());

console.log(person.slice(7,12));
console.log( person + ' becus am learing a lot');

let story = `
    anytin inside dis becomes a string
`;
console.log(story);

console.log(person.charAt(6))
console.log(Math);

let num2 = 45.88;
console.log(Math.round(num2));
console.log(Math.ceil(num2));
console.log(Math.floor(num2));
console.log(Math.pow(5, 3));
console.log(Math.sqrt(16));

let a , b, x;
a = 4;
b = 5;

x = a ** 2 + b ** 2;
console.log(Math.sqrt(x));

a = Math.pow(a, 2);
b = Math.pow(b, 2);

x = Math.sqrt(a + b);
x = Math.round(6)
console.log(x)


/* for generating random numbers from 1 - 9 */


console.log('Random')
let rand = Math.random() * 9;
rand = Math.floor(rand) + 1;
console.log(rand);