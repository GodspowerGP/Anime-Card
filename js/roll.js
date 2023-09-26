const btn = document.querySelector("#rol");
btn.addEventListener("click", ()=>{
    document.querySelector("#rot1").classList.toggle("rollRight");
    document.querySelector("#rot2").classList.toggle("rollLeft");
    document.querySelector("#rot3").classList.toggle("rollRight");
})
