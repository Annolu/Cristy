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
       nextArrow: '<button type="button" class="arrow arrow-next"><img src="img/arrows/right-arrow-circular-button.svg" ></button>',
       prevArrow: '<button type="button" class="arrow arrow-prev"><img src="img/arrows/back-arrow-circular-symbol.svg" ></button>'
      
    });
    
    // click on body makes the top dropdown menu disappear

    var body= document.getElementById('body-container');
    
    body.addEventListener('click', function(event){
        //console.log(event.target.nextElementSibling)
        //console.log(event.target.classList.contains('dropdown-button'));
        
        if(event.target.classList.contains('dropdown-button')){
            //event.target.nextElementSibling.children[0].classList.remove('open');
            //$(".dropdown-menu .sorting li").removeClass("open");
        }
        else{
            $(".dropdown-menu .sorting li").removeClass("open");
        }
    })
    
    //make the top dropdown menu appear
    
    $(".dropdown-button").on('click', function(){
        
        var list= $(this).next()[0].children;              
        var buttons = $(".dropdown-button").next();    
        
        //if click on the other buttons, the others menu disappear
        for (lists of buttons){
            var singleList =lists.children;
            for (singleLi of singleList){
                singleLi.classList.remove('open');
            }
        }
        $(list).toggleClass("open");
    });
    
    $(".sorting-button").on('click', function(){
        $(".filter-section .sorting li").toggleClass("open");
    });
    
    var burger= document.getElementById('burger');
    var closeBtn= document.getElementById('closebtn');
    var sidebar= document.getElementById('mySidenav');
    
    burger.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav)
    
    function openNav(){
        if(body.classList.contains('down')){
            body.classList.remove('down');
        }else{
            body.classList.add('down');
        }
    }

    function closeNav() {
        body.classList.remove('down');
        sidebar.classList.remove('fade-in');
        $("#burger-container").removeClass('open');
    }
});
