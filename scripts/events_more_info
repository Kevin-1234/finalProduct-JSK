var nav = document.querySelector(".navigation");
function mouseOverNav(){
nav.style.opacity = "1";
}
function mouseOutNav(){
nav.style.opacity = "0.5";
}
function stickyNav(){
  if (window.pageYOffset >= 50) {
  nav.style.opacity = "1";
  nav.style.zIndex = "3";
} else {
  nav.style.opacity = "0.5";
}}
window.onscroll = function() {stickyNav()};
