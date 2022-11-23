var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/icone2.0.png') {
        iconMenu.setAttribute("src","imagens/icone2.0.png");
   
    }else{
        iconMenu.setAttribute("src","imagens/icone2.0.png");
    }

   menu.classList.toggle('active');
});