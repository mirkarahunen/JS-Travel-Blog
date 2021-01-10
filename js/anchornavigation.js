// VARIABLES --------------------------------------------------------------------------------------------------
var anchorLinks = document.querySelectorAll('.anchor-navigation li.anchor');
//console.log(anchorLinks);

// FUNCTIONS ----------------------------------------------------------------------------------------------------

//Create a function to hide active Link
function clearAll() {
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].classList.remove('active');
  }
}


// ADD ACTIVE ----------------------------------------------------------------------------------------------------

//Add active class at click event
for (var i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].addEventListener('click', function(evt) {
    //console.log(evt);
    //console.log(evt.target);

    //First remove active by calling function
    clearAll();

    //Add active on the target
    evt.target.parentNode.classList.add('active');
  });
}
