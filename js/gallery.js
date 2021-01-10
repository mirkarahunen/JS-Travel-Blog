// CONSTANTS ----------------------------------------------------------------------------------------------------

const INTERVAL_TIME = 3000;
const START_SLIDE = 0;

// VARIABLES ----------------------------------------------------------------------------------------------------

var allImages = document.querySelectorAll('.gallery-images img');

var modalWindow = document.querySelector('#modal-window');
var modalImage = document.querySelector('#modal-image');
var closeButton = document.querySelector('#closeButton i.fa-window-close');

var prevButton = document.querySelector('#prev-button');
var nextButton = document.querySelector('#next-button');
var nextButtonIcon = document.querySelector('#next-button i');
var prevButtonIcon = document.querySelector('#prev-button i');

var activeImage = START_SLIDE;

var imageText = document.querySelector('.data-caption');

var slidePanel = document.querySelector('.image-info');


// MODAL IMAGES FUNCTION ----------------------------------------------------------------------------------------------------

//Create a function to show the modal image
function showModalImage(index) {

  //Create the source for the image shown in modal window
  modalImage.src = allImages[index].src.replace('_thumb', '');
  //console.log(modalImage.src);

  //Add image text when showing modal image
  imageText.innerHTML = allImages[index].getAttribute('data-caption');

  //Add modal window
  modalWindow.classList.add('show');

  //Add image number slide panel
  slidePanel.innerHTML = (index + 1) + ' / ' + allImages.length;

  //Show active image
  allImages[index].classList.add('active');
}


//Add event on click for all images
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('click', function(evt) {
    //console.log(evt.type);

    //Set new active image/index
    var activeIndex = parseInt(evt.target.getAttribute('data-index'));
    //console.log(evt.target);
    showModalImage(activeIndex);
    activeImage = activeIndex;
    //console.log(activeImage);
  });
}


// BUTTONS IN MODAL WINDOW ----------------------------------------------------------------------------------------------------

//Add event on the button
prevButton.addEventListener('click', function() {
  //console.log(event.type);
  activeImage = activeImage - 1;
  if (activeImage < 0) activeImage = allImages.length - 1;
  //console.log(activeImage);

  showModalImage(activeImage);
});

//Add event on the button
nextButton.addEventListener('click', function() {
  activeImage = activeImage + 1;
  if (activeImage >= allImages.length) activeImage = 0;
  //console.log(activeImage);

  showModalImage(activeImage);
});


//Add event on the button
closeButton.addEventListener('click', function() {

  //At click hide modal window
  modalWindow.classList.remove('show');
});


//Adding the possibility to hide modal window when clicking next to closeButton
modalWindow.addEventListener('click', function(evt) {
  if (
    evt.target !== modalImage &&
    evt.target !== prevButton &&
    evt.target !== nextButton &&
    evt.target !== nextButtonIcon &&
    evt.target !== prevButtonIcon
  ) modalWindow.classList.remove('show');
});


// ANIMATION FUNCTION ----------------------------------------------------------------------------------------------------

//Function to remove animation from images
function clearAllAnimation() {
  for (var i = 0; i < allImages.length; i++)
    allImages[i].classList.remove('animate');
}

// INTERVAL FOR ANIMATION ----------------------------------------------------------------------------------------------------

//Add animation with interval
animationInterval = setInterval(function() {

  //Remove animation
  clearAllAnimation();

  //Add animation on randomly chosen images
  var randomIndex = Math.trunc(Math.random() * allImages.length);
  //console.log(randomIndex);

  allImages[randomIndex].classList.add('animate');
}, INTERVAL_TIME);
