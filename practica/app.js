const botonCerrar = document.querySelector("#cerrar")

const nav = document.querySelector("#navegador") ;


const botonAbrir = document.querySelector("#abrir") ;

botonCerrar.addEventListener("click" , ()=>{ 
  nav.classList.toggle("visible")
})

botonAbrir.addEventListener("click" , ()=>{ 
  nav.classList.toggle("visible")
})