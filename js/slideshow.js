// CONSTANTS ----------------------------------------------------------------------------------------------------

const SPEED = 2000;
const START_SLIDE = 0;
const AUTOSLIDE = false;

//VARIABLES ----------------------------------------------------------------------------------------------------

var slideshowImages = document.querySelectorAll('.travels-slideshow .upcoming-travels-images .image');

var prevButton = document.querySelector('.slideshow-controls button.slide-left ');
var nextButton = document.querySelector('.slideshow-controls button.slide-right ');
var startButton = document.querySelector('button.play');
var stopButton = document.querySelector('button.stop');

var slideCaption = document.querySelector('.travels-slideshow-caption h2');

var activeSlide = START_SLIDE;

var slideIntervall = null;

var dotContainer = document.querySelector('.dot-container');


//SLIDESHOW ----------------------------------------------------------------------------------------------------

//Function for changing and showing active images
function showSlide(index) {

  //Hide old slide
  slideshowImages[activeSlide].classList.remove('active');
  allDots[activeSlide].classList.remove('active');

  //Set new index
  activeSlide = index;

  //Correct index
  if (activeSlide < 0) activeSlide = slideshowImages.length - 1;
  if (activeSlide > slideshowImages.length - 1) activeSlide = 0;
  //console.log(activeSlide);

  //Show new slide
  slideshowImages[activeSlide].classList.add('active');
  allDots[activeSlide].classList.add('active');

  //Show Caption
  slideCaption.innerHTML = slideshowImages[activeSlide].getAttribute('data-caption');
}

//Function for starting the autoplay slideshow
function startSlideshow() {
  slideInterval = setInterval(function() {
    showSlide(activeSlide + 1);
  }, SPEED);
}

// CREATING DOTS FOR SLIDESHOW IMAGES ----------------------------------------------------------------------------------------------------

//Creating elements for dots for all images
for (var i = 0; i < slideshowImages.length; i++) {
  var dot = document.createElement('i');
  dot.setAttribute('data-index', i);
  dot.classList = 'fa fa-circle';
  //console.log(dot);

  //Add click event on all the dots to move from image to image
  dot.addEventListener('click', function(evt) {
    var dataIndex = parseInt(evt.target.getAttribute('data-index'));
    //console.log(dataIndex);
    showSlide(dataIndex);
  });

  //Add new dot element on the HTML dot container
  dotContainer.appendChild(dot);
};

// Calling all dots
var allDots = document.querySelectorAll('.dot-container i');

// BUTTONS ----------------------------------------------------------------------------------------------------

//Add click event on the button
prevButton.addEventListener('click', function() {
  //console.log(event.type);
  showSlide(activeSlide - 1);
});

//Add click event on the button
nextButton.addEventListener('click', function() {
  showSlide(activeSlide + 1);
});

//Calling the function and starting the autoplay slideshow ----------------------------------------------------------------------------------------------------
showSlide(START_SLIDE);
startSlideshow();
