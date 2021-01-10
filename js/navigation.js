// VARIABLES --------------------------------------------------------------------------------------------------

var navBar = document.querySelector('.navigation-content');
var sticky = navBar.offsetTop;

var burgerMenu = document.querySelector('#burger');

var mobileNavigation = document.querySelector('.navigation.mobile');

var subMenu = document.querySelector('.dropdown');

var mobileSubMenu = document.querySelector('.mobile-toggle');
var mobileSubMenuContent = document.querySelector('.dropdown-content-mobile');

// FUNCTIONS ----------------------------------------------------------------------------------------------------

//Function for sticky navigation bar
function stickyNavBar() {

  //If scrolled over navigation, add sticky
  if (pageYOffset >= sticky) {
    navBar.classList.add('sticky');
    //console.log(navBar);
  } else {

    //If not, remove sticky
    navBar.classList.remove('sticky');
  }
}

//Function for hiding dropdown menu
function hideMenu() {
  subMenu.classList.remove('active');
}

//Function for showing dropdown menu
function showMenu() {
  subMenu.classList.add('active');
}

//STICKY NAVBAR ----------------------------------------------------------------------------------------------------

document.addEventListener('scroll', stickyNavBar);

//BURGER MENU ----------------------------------------------------------------------------------------------------

burgerMenu.addEventListener('click', function() {
  mobileNavigation.classList.toggle('active');
  //console.log(mobileNavigation);
});

//DROPDOWN MENU ----------------------------------------------------------------------------------------------------

//Hiding dropdown menu when mouse not over
subMenu.addEventListener('mouseout', hideMenu);

//Showing dropdown menu when hovering over
subMenu.addEventListener('mouseover', showMenu);

//MOBILE DROPDOWN MENU ----------------------------------------------------------------------------------------------------

//Add event on click for showing and hiding modile submenu
mobileSubMenu.addEventListener('click', function() {
  //console.log(event.type);
  mobileSubMenuContent.classList.toggle('active');
  //console.log(mobileSubMenuContent);
});
