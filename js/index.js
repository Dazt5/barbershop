var menuBtn = document.querySelector('#menuBtn');
var sideNav = document.querySelector('#sideNav');
var menu = document.querySelector('#menu');

//el menu estará escondido por defecto
sideNav.style.right = "-250px"

menuBtn.onclick = function(){

    //si está escondido
    if(sideNav.style.right == "-250px"){
        //abrir menú
        sideNav.style.right ="0";
        menu.src = "img/close.png" //cambiar el ícono 
    
    }else{//Si ya está abierto
        //esconder menú
        sideNav.style.right = "-250px"
        menu.src = "img/menu.png" //cambiar el ícono 

    }

}

//activar smoothscroll
var scroll = new SmoothScroll('a[href*="#"',{

    speed:1000,
    speedAsDuration:true

});
