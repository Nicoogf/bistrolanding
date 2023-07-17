const botonMenu = document.querySelector("#button-menu") ;
const nav = document.querySelector("#opciones-menu") ;
const botonExit = document.querySelector("#button-x") ;

botonMenu.addEventListener("click" ,  ()=>{
    nav.classList.add("visible")
})

botonExit.addEventListener("click",  ()=>{
    nav.classList.remove("visible")
})