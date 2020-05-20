
var test = document.querySelector('.submission_text');
var show = document.querySelector('.form_container');
test.classList.add('hidden');

function submissionSuccessfull(evt){
    evt.preventDefault();

    test.classList.remove('hidden');
    //hidden.classList.add('.show')
    //show.classList.remove('show');
    show.classList.add('hidden');
    //btn.parentNode.removeChild(btn);
}

function checkFields(evt){
      evt.preventDefault();
      var name = document.getElementById("fname_check").value;
      var lname = document.getElementById("lname_check").value;
      var email = document.getElementById("email_check").value;
      var phone = document.getElementById("phone_check").value;
      var participant = document.getElementById("participant");
      if ( name ==='' || lname ==='' || email ==='' || phone ==='' || participant.selectIndex === "Select"){
        alert("All required fields must be filled out");
      }
      else{
        test.classList.remove('hidden');
        //hidden.classList.add('.show')
        //show.classList.remove('show');
        show.classList.add('hidden');
        //btn.parentNode.removeChild(btn);
      }
}


document.getElementById('button').addEventListener('click', checkFields);
