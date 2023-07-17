const botonx = document.querySelector("#button-x") ;
const navegador = document.querySelector("#menu") ;
const botonAbrir = document.querySelector("#abrir") ;

botonAbrir.addEventListener("click" , ()=>{
    navegador.classList.add("visible")
})

botonx.addEventListener("click" , ()=>{
    navegador.classList.remove("visible")
})