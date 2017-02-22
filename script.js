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
    
    $(".sorting-button").on('click', function(){
        $(".dropdown-sorting li").toggleClass("open");
    });
    /*
    $(".dropdown-toggle").on('mouseover', function(){
        $('.dropdown-menu').toggleClass("menu-down");
    });*/
    

});

/*
var burgerContainer= document.getElementById('burger-container');

burgerContainer.addEventListener('click', openBurger);

function openBurger(event){
    event.target.classList.add('open');
    if(event.target.classList.open){
        event.target.classList.remove('open');
    }
}*/