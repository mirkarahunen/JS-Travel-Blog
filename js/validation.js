// VARIABLES -------------------------------------------------------------------------------------------------

var contactForm = document.querySelector('.contact-container .form form');

var allInputs = document.querySelectorAll('.contact-info input, .contact-info textarea, .contact-info select');

var selectList = document.querySelector('select');
var radioButtons = document.querySelectorAll('.form-title');


//FORM VALIDATION ----------------------------------------------------------------------------------------------------

//Function for validating
function validate() {

  isValid = true;

  //Removing is-invalid class from all the inputs
  allInputs.forEach(function(input) {
    input.classList.remove('is-invalid');
    input.nextElementSibling.classList.remove('is-invalid');

    //Checking the cases with switch - case
    switch (input.name) {
      case 'firstname':
      case 'lastname':

        //If input field is empty, then add is-invalid class and a text to specify the reason
        if (input.value == '') {
          //console.log(input.value);
          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Write your name here';
        }
        break;

      case 'email':

        //Creating a reg exp variable to check for min. requirements
        var regExpEmail = /.+@.+\..+/; //a@b.c case

        //If input field doesn't match with the requirements, then add is-invalid class and a text to specify the reason
        if (input.value.match(regExpEmail) == null) {
          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Write a correct email format';
        }
        break;

      case 'phonenumber':

        //Creating a reg exp variable to check for min. requirements
        var regExpPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{2}[-\s\.]{0,1}[0-9]{2}[-\s\.]{0,1}[0-9]{2}$/;

        //If input field doesn't match with the requirements, then add is-invalid class and a text to specify the reason
        if (input.value.match(regExpPhone) == null) {

          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Write a proper phonenumber';
        }
        break;

      case 'message':

        //If input field is empty, then add is-invalid class and a text to specify the reason
        if (input.value == '') {
          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Write your message here';
        }
        break;

      case 'gdpr':

        //If checkbox is not checked, then add is-invalid class and a text to specify the reason
        if (!input.checked) {
          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Check the box for GDPR';
        }
        break;

      case 'select-list':

        //If input field is empty, then add is-invalid class and a text to specify the reason
        if (input.value == '') {
          isValid = false;
          input.classList.add('is-invalid');
          input.nextElementSibling.classList.add('is-invalid');
          input.nextElementSibling.innerHTML = 'Select an option';
        }

        break;
    }

  });

  //If all fields filled in correct, returning valid form
  return isValid;
}


//SUBMIT VALIDATION ----------------------------------------------------------------------------------------------------
contactForm.addEventListener('submit', function(evt) {
  //console.log(evt.type);
  evt.preventDefault();
  if (validate() == true) contactForm.submit();
});
