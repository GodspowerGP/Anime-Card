const btn = document.querySelector("#spin");
const spin1 = document.querySelector('#rot1');
const spin2 = document.querySelector('#rot2');
const spin3 = document.querySelector('#rot3');
btn.addEventListener("click",()=>{
    spin1.classList.toggle("rot1");

    spin2.classList.toggle("rot2");

    spin3.classList.toggle("rot3");

   
});