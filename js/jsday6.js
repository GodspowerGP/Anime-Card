let num = 1;
// for(let i = 0; 1 < 40; i++){
//     console.log(num += 1);
// }


// for loop

// let product = 10;

// while (num < product) {
//     console.log(num += 1);

// }
let student = [ 'jack@ok.com',"john@ok.com",'jill@ok.com'];

let  email = prompt( 'enter Email');
let  user = prompt( 'enter Email');

student.forEach((value,index,) => {
    if (value == user){
    console.log(`Email:${value} \r\n Message: ${email}`);
    }
});