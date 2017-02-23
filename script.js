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
    
    // click on body makes the top dropdown menu disappear

    var body= document.getElementsByTagName('body')[0];

    body.addEventListener('click', function(event){
        console.log(event.target.nextElementSibling)
        console.log(event.target.classList.contains('dropdown-button'));
        
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
});
