const images = [
  'public/img/IMG_0970.jpg',
  'public/img/IMG_1117.jpg',
  'public/img/IMG_1296.jpg',
  'public/img/IMG_2653.jpg'
];

const slideshow = document.getElementById('slideshow');
let currentIndex = 0;
let timer;

// Function to change images on tap (click)
function changeImageOnClick() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.src = images[currentIndex];
  resetTimer(); // Reset the timer when changing images on tap
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

// Add a click event listener to change images on tap
slideshow.addEventListener('click', changeImageOnClick);
