


//stick navigation bar
var nav = document.querySelector(".navigation");
function mouseOverNav(){
nav.style.opacity = "1";
}
function mouseOutNav(){
nav.style.opacity = "0.5";
}
function stickyNav(){
  if (window.pageYOffset >= 50) {
  nav.classList.add("sticky");
  nav.style.opacity = "1";
  nav.style.zIndex = "3";
} else {
  nav.classList.remove("sticky");
  nav.style.opacity = "0.5";
  nav.style.zIndex = "0";
}}
window.onscroll = function() {stickyNav()};


//control animation for the resource cubes when they are being hovered
$(document).ready(function(){
  // animation when mouse over and out the cube
  // use title attribute to control all the cubes with only one hover event
 $('[title=title]').hover(function(){
   var className = $(this).attr('class');
   var res_className = className.replace("Title", "");
   var panel_className = className.replace("Title", "_panel");


    $("."+className).animate({
     opacity:0 },'100'
    );
    $("."+panel_className).animate({
      opacity: 1, height: '25rem'}, '50'
    );
    $("."+panel_className).css({
      display:'flex'});
   }, function(){
     var className = $(this).attr('class');
     var res_className = className.replace("Title", "");
     var panel_className = className.replace("Title", "_panel");


     $("."+className).animate({
       opacity:1 },50
     );
    $("."+panel_className).animate({
       opacity:0,height: '0rem'}, '200'
     );

      $("."+panel_className).css({
      display:'none'});

   });

   //to stop resource panels from vanishing after mouse out the cube
   $('[title=panel]').hover(function(){
     var className = $(this).attr('class');
     var res_className = className.replace("_panel", "");
     var title_className = className.replace("_panel", "Title");
     $("."+className).stop();

     $("."+title_className).stop();
     $("."+className).css({
       display:'flex'});
   },function(){
     var className = $(this).attr('class');
     var res_className = className.replace("_panel", "");
     var title_className = className.replace("_panel", "Title");

     $("."+className).animate({
       opacity:0,height: '0rem'}, '200'
     );
     $("."+title_className).animate({
       opacity:1 },50
     );
     setTimeout(delay, 500);
     function delay(){
       $("."+className).css({
         display:'none'}
       );
     }

   });

})
