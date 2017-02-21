$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
    });
    
    $('.slider').slick({
       adaptiveHeight: true,
       infinite: true,
       speed: 500,
       swipe: true,
       cssEase: 'ease',
       arrows: true
      
    });
    /*
    $(".dropdown-toggle").on('mouseover', function(){
        $('.dropdown-menu').toggleClass("menu-down");
    });*/
    

});

/*

var topmenuTabs= document.getElementsByClassName('dropdown');

for (item of topmenuTabs){
    item.addEventListener('mouseover', openMenu)
}

function openMenu(event){
    console.log(event.target.nextElementSibling)
    event.target.nextElementSibling.classList.add('menu-down');
    if(event.target.nextElementSibling.classList.open){
        event.target.nextElementSibling.classList.remove('menu-down');
    }
}*/



/*
var burgerContainer= document.getElementById('burger-container');

burgerContainer.addEventListener('click', openBurger);

function openBurger(event){
    event.target.classList.add('open');
    if(event.target.classList.open){
        event.target.classList.remove('open');
    }
}*/