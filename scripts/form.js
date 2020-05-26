
var submission_text = document.querySelector('.submission_text');
var form = document.querySelector('.form_container');
submission_text.classList.add('hidden');
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

function checkFields(evt){
      evt.preventDefault();
      var name = document.getElementById("fname_check").value;
      var lname = document.getElementById("lname_check").value;
      var email = document.getElementById("email_check").value;
      var phone = document.getElementById("phone_check").value;
      var participant = document.getElementById("participant").value;
      var activity = document.getElementById("activity").value;
      var skill = document.getElementById("skill").value;
      if ( name ==='' || lname ==='' || email ==='' || phone ==='' || participant === '' || activity === '' || skill === ''){
        alert("All required fields must be filled out");
      }
      else{
        submission_text.classList.remove('hidden');
        form.classList.add('hidden');

      }
}

document.getElementById('button').addEventListener('click', checkFields);


var hiddenbox = document.querySelector(".hiddenbox");
hiddenbox.classList.add('hidden')

function isChecked(evt){
      var checkBox = document.getElementById("clickCheck");
      var hiddenbox = document.getElementById("hiddenbox");

      if (checkBox.checked == true){
        hiddenbox.classList.remove('hidden')
      } else {
        hiddenbox.classList.add('hidden');
      }
}

document.getElementById('clickCheck').addEventListener('click', isChecked)
