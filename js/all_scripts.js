




// new WOW().init();

$(".close__form").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
    $(".overlay").removeClass("show__form");
    $(".success").toggleClass("show__form");
});
$(".overlay").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
});





$("#button").click(function(){
  $(".popup1").toggleClass("show-block");
  $(".overlay1").toggleClass("show-block");
});


$(".close-success").click(function(){
  $(".pop_up-window").removeClass("visible");  
  $(".overlay1").addClass("none-block");  
  $(".overlay1").removeClass("show-block");
   
});


$(".close-popup-x").click(function(){
  $(".popup1").toggleClass("none-block");  
  $(".popup1").removeClass("show-block"); 
  $(".overlay1").addClass("none-block");
  $(".overlay1").removeClass("show-block");
});