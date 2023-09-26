let password = "godspower";
let email = "1234@ok.com";
const correctPassword = password;
const correctEmail = email;
const input = document.querySelector("#password");
const input2 = document.querySelector("#email");


input.addEventListener("keyup",(e)=>{

    let typed = input.value;

    if ( password == "" || email == "",typed != correctPassword) {
        input.classList.add("bg-danger")
    }else{
        input.classList.add("bg-info")
        input.classList.remove("bg-danger")

    }

})


input2.addEventListener("keyup",(e)=>{

    let typed = input2.value;

    if ( password == "" || email == "",typed != correctEmail) {
        input2.classList.add("bg-danger")
    }else{
        input2.classList.add("bg-info")
        input2.classList.remove("bg-danger")

    }

})