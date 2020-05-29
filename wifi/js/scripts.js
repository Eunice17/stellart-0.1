const formulario=document.querySelector('#formulario')
const trasera=document.querySelector('#trasera');
const tarjeta=document.querySelector('#contenedorTarjeta');
const logo=document.querySelector('#logo');

formulario.addEventListener('click', ()=> {
    tarjeta.classList.toggle('active');
    //logo.classList.toggle('trasladar');
    
});

trasera.addEventListener('click',()=>{
    //logo.classList.toggle('normal');
    tarjeta.classList.toggle('active');
   
    
});