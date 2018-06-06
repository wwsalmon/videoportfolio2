var clicked = false;
$("body").prepend("<div class='topbar'><div class='topbar-button'><span>Menu</span></div></div>");
$(".topbar-button").click(function(){
  $(".sidebar").toggleClass("show-sidebar");
  clicked = !clicked
  if (clicked == true){
    $(".topbar-button span").html("back");
  }
  else{
    $(".topbar-button span").html("menu");
  }
});
