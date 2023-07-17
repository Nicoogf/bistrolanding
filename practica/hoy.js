const botonAbrir = document.querySelector("#abrir") ;
const menu =  document.querySelector("#menu") ;
const botonSalir = document.querySelector("#boton-salir") ;

botonAbrir.addEventListener("click" , ()=>{
    menu.classList.toggle("visible")
})

botonSalir.addEventListener("click" , ()=>{
    menu.classList.toggle("visible")
})