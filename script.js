const nav = document.querySelector(".nav-list");
const bars = document.querySelector(".fa-bars");

const faXmark = document.querySelector(".fa-x");

bars.addEventListener("click", ()=>{
    nav.style.left = "0"; 
});

faXmark.addEventListener("click", ()=>{
    nav.style.left = "-200px"; 
});