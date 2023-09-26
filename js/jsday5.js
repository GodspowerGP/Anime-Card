const user = {
    email: "example@ok.com",
    userName: "name",
    password: "password",
    login: function(id,pass){
        if (id === this.email || id === this.userName){
            if(pass === this.password){
                return true;
            }
        }else{
            return false;
        }
    }
}
console.log(user.login("example@ok.com","password"))

let email,password;
email = prompt("Enter Email");
password = prompt("Enter Password")

if (user.login(email,password)) {
    alert("login Succesfull")
}else{
    alert("invalid login details")
}

let product = promt("enter product");
    product = product.toLowerCase();

switch (product) {
    case "tooth brush": console.log("price is 800N"); 
        break;
    case "tooth paste": console.log("price is 500N"); 
        break;
     case "tooth care": console.log("price is 200k"); 
        break;

    default:
        console.log("product not found");
}