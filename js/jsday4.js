const car =  {
    name: "Bently",
    years: 2022,
    make: "V8",
    colour: "rose gold",
    getTireSize: function(){
        return "size" + 42;
    },

    capitalName: function(){
        return this.name.toUpperCase()
    },
    changeYear: function(newYear){
        this,year = newYear
    }
    changeColour: function(newColour){
        this,colour = newColour
    }
};

console.log(car);
car.name = "mercedes Benz";

console.log(car.changeYear(3033));
console.log(car);


//conditional statement

/*
if = true
else if == true
else == false
>
<
>=
<=
== compares the value only if they are thesame without changing the data types
===compares the value only if they are the same while checking while checking if the data types are thesame
!=
*/

let num = 10;
if (num == 9) {
    console.log("Hello, this if is true")
}
else if (num ==10){
    console.log("Hello, this if is true")
}



console.log(num != 8);

let school = "Black";

if (school == 'blue') {

}