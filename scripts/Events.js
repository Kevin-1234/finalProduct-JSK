/* Contributed by Jani Junno s321614 */
function registerPrompt () {
  alert("E-mail your registration to register@itcodefair.com.au. Include your name, contact details (e-mail and contact number) and event you want to attend.")
}

function infoPrompt () {
  alert("Contact us on info@itcodefair.com.au for more info.")
}

/* Contributed by Qingyuan Zeng s316740*/
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
  nav.style.zIndex = "2";
} else {
  nav.classList.remove("sticky");
  nav.style.opacity = "0.5";
  nav.style.zIndex = "0";
}}
window.onscroll = function() {stickyNav()};
