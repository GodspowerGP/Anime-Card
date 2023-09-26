let a,p,r;
r = 6;
p = Math.PI;

r = Math.pow(r, 2);
a = p * r;
console.log(a)


console.log("answer No:2")

let x,g,y;
g = 17;
y = 3;

x = g - y;
x = Math.sqrt(x)
console.log(x);

console.log("age cal calculator")

// let currentYear = 2022

// var year_born = prompt(" enter your year");
// function getAge( birthYear) {
//     age = currentYear - birthYear;
//     return age;
// }
// if (age <= 5 ){
//     alert("you are you are a baby");
// }
// if (age <= 5 ){
//     console.log(" you are a baby");
// }
// calculateAge = getAge(year_born);
// alert("you are " + calculateAge + " years old")

let age = prompt("Enter your age");
age = 2022 - age;

if (age <= 5) {
    alert(` You are ${age} years old and you are a baby`)
}

else if (age >= 6 && age <= 12) {
    alert(` You are ${age} years old and you are a kid`)
}
else if (age >= 13 && age <= 19) {
    alert(` You are ${age} years old and you are a teen`)
}
else if (age >= 20 && age <= 30) {
    alert(` You are ${age} years old and you are a youth`)
}
else if (age >= 31 && age <= 50) {
    alert(` You are ${age} years old and you are a adult`)
}
else{
    alert(`you are ${age} years old and you are a senior citizen `)
}