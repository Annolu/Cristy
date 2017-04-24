$(document).ready(function(){

    //body animation for burger menu

  $("#burger-container").on('click', function(){
      $(this).toggleClass("open");
  });

  //slider

  $('.slider').slick({
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    swipe: true,
    cssEase: 'ease',
    dots:true,
    arrows:true,
     nextArrow: '<button type="button" class="arrow arrow-next"><img src="img/arrows/right-arrow-circular-button.svg"></button>',
     prevArrow: '<button type="button" class="arrow arrow-prev"><img src="img/arrows/back-arrow-circular-symbol.svg"></button>'
  });

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

    //toggle shop sorting menu

  $(".sorting-button").on('click', function(){
    $(".filter-section .sorting li").toggleClass("open");
  });

  var body= document.getElementById('body-container');

  body.addEventListener('click', function(event){

    // click on body makes the top dropdown menu disappear

    if(!event.target.classList.contains('dropdown-button')){
      $(".dropdown-menu .menu-item li").removeClass("open");
    }

    // click on body makes the shop sorting menu disappear

    if(!event.target.classList.contains('sorting-button')){
      $(".filter-section .sorting li").removeClass("open");
    }
  })

  var burger= document.getElementById('burger');
  // var closeBtn= document.getElementById('closebtn');
  var sidebar= document.getElementById('mySidenav');

  burger.addEventListener('click', openNav);
  // closeBtn.addEventListener('click', closeNav)

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
