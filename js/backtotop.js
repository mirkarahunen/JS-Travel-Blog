// VARIABLES --------------------------------------------------------------------------------------------------

var backToTopButton = document.querySelector('#back-to-top-btn');
//console.log(backToTopButton);

// FUNCTIONS ----------------------------------------------------------------------------------------------------

//Create a function to show the button at the right point
function showBacktoTopButton() {

  //If window length bigger than 700, show back-to-top button
  if (window.pageYOffset > 700) {
    backToTopButton.classList.add('active');
    //console.log(window.pageYOffset);
  } else {
    //Otherwise remove it
    backToTopButton.classList.remove('active');
  }
}

//Create a function to jump back to the top of the page
function jumpToTop() {

  // Window 0,0
  window.scrollTo(0, 0);
}

//BACK-TO-TOP BUTTON ----------------------------------------------------------------------------------------------------

//Add event when scrolling
window.addEventListener('scroll', showBacktoTopButton);

//Add click event on button
backToTopButton.addEventListener('click', jumpToTop);
