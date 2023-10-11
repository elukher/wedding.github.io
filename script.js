const images = [
  'public/img/IMG_0970.jpg',
  'public/img/IMG_1117.jpg',
  'public/img/IMG_1296.jpg',
  'public/img/IMG_2653.jpg'
];

const slideshow = document.getElementById('slideshow');
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = new Image();
  nextImage.src = images[currentIndex];

  nextImage.onload = () => {
      slideshow.style.opacity = 0; // Fade out the current image
      setTimeout(() => {
          slideshow.src = nextImage.src; // Change the source to the next image
          slideshow.style.opacity = 1; // Fade in the new image
      }, 500); // Transition duration (in milliseconds)
  };
}

// Initial image change
changeImage();

// Set an interval to change images at a specific interval
setInterval(changeImage, 10000); // Change image every 10 seconds (10000 milliseconds)
