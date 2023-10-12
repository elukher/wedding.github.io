const images = [
  'public/img/IMG_0970.jpg',
  'public/img/IMG_1117.jpg',
  'public/img/IMG_1296.jpg',
  'public/img/IMG_2653.jpg',
  'public/img/IMG_1055.jpg',
  'public/img/IMG_2807.jpg'
];

const slideshow = document.getElementById('slideshow');
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
let currentIndex = 0;
let timer;

// Function to change images on tap (click)
function changeImageOnClick() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.src = images[currentIndex];
  resetTimer(); // Reset the timer when changing images on tap
}

// Function to change images upwards (up)
function changeImageUp() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideshow.src = images[currentIndex];
  resetTimer();
}

// Function to change images downwards (down)
function changeImageDown() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.src = images[currentIndex];
  resetTimer();
}

// Function to automatically change images every 30 seconds
function autoChangeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.src = images[currentIndex];
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoChangeImage, 30000); // 30 seconds (30000 milliseconds)
}

// Initial image change and timer setup
changeImageOnClick();
resetTimer();

// Add click event listeners to change images on tap and to the buttons
slideshow.addEventListener('click', changeImageOnClick);
upButton.addEventListener('click', changeImageUp);
downButton.addEventListener('click', changeImageDown);
