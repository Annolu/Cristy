$(document).ready(function(){

  createShopSection()

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

  $('#toTop').on('click',function (e) {
    e.preventDefault();

    $('html,body').stop().animate({
        'scrollTop': 1,
        behavior: 'smooth'
    }, 800, 'swing');
  })

  $(document).scroll(function(){
    var distanceFromTop= $(document).scrollTop();
    if(distanceFromTop>50){
      $('#toTop').addClass('slide-in');
    }else{
      $('#toTop').removeClass('slide-in');
    }
  })

  //make the top dropdown menu appear
  $(".dropdown-button").on('click', function(){

    //items in dropdown-menu list clicked on
    var clickedList= $(this).next()[0].children;
    //dropdown-menu lists
    var lists = $(".dropdown-button").next();

    for (singleList of lists){

      if(singleList.children==clickedList){
        $(clickedList).toggleClass("open");
      }else{
        for(item of singleList.children){
          item.classList.remove('open');
        }
      }
    }
  });

  //toggle shop sorting menu

  $(".sorting-button").on('click', function(){
    $(".filter-section .sorting li").toggleClass("open");
  });

  $('body').click(closeMenus)

    function closeMenus(event){

    // click on body makes the top dropdown menu disappear
    if(!event.target.classList.contains('dropdown-button')){
      $(".dropdown-menu .menu-item li").removeClass("open");
    }

    // click on body makes the shop sorting menu disappear
    if(!event.target.classList.contains('sorting-button')){
      $(".filter-section .sorting li").removeClass("open");
    }
  }

  $('#burger').click(toggleNav);

  //body animation for burger menu
  function toggleNav(){
    $('#bodyContainer').toggleClass('down');
  }

  //burger menu animation
  $("#burgerContainer").on('click', function(){
      $(this).toggleClass("open");
  });

  function createShopSection(){
    var i=1;
    var x=1;

    while (i<=2){
      while(x<=4){
        var shopItem= '<div class="shop-item">'+
                          '<div class="grey-layer">'+
                              '<div class="buttons-g">'+
                                  '<a href="#"><span class="view"></span></a>'+
                                  '<a href="#"><span class="bag"></span></a>'+
                              '</div>'+
                          '</div>'+
                          '<img class="img-item" src="img/shoes/shoe-item'+x+'.jpg">'+
                          '<div class="item-description">'+
                            '<p class="item-name">Sperry Top-Slider Lanyard</p>'+
                            '<p class="item-price">$300.00</p>'+
                            '<span class="rating-stars">'+
                                '<img src="img/star.svg">'+
                                '<img src="img/star.svg">'+
                                '<img src="img/star-grey.svg">'+
                                '<img src="img/star-grey.svg">'+
                            '</span>'+
                          '</div>'+
                        '</div>';
        $('.items-grid').append(shopItem);
        x++;
      }
      if(x>3){
        x=1;
      }
      i++;
    }

    var viewButton= '<div class="clear-fix"></div>' +
                    '<a href="#"><button class="button">View All Products</button></a>';

    $('.items-grid').append(viewButton);
  }
});
