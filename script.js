const images = [
  'public/img/IMG_0970.jpg',
  'public/img/IMG_1117.jpg',
  'public/img/IMG_1296.jpg',
  'public/img/IMG_2653.jpg'
];

const slideshow = document.getElementById('slideshow');
let currentIndex = 0;

// Function to manually change images
function changeImage(index) {
  if (index >= 0 && index < images.length) {
      slideshow.src = images[index];
      currentIndex = index;
  }
}

// Function to handle swipe gestures
function handleSwipe(e) {
  const threshold = 50; // Minimum horizontal distance to detect a swipe

  let startX = 0;
  let endX = 0;

  function touchStart(e) {
      startX = e.touches[0].clientX;
  }

  function touchEnd(e) {
      endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (deltaX > threshold) {
          // Swipe right, move to the previous image
          changeImage(currentIndex - 1);
      } else if (deltaX < -threshold) {
          // Swipe left, move to the next image
          changeImage(currentIndex + 1);
      }
  }

  slideshow.addEventListener('touchstart', touchStart);
  slideshow.addEventListener('touchend', touchEnd);
}

// Initial image change
changeImage(currentIndex);

// Set up swipe gesture handling
handleSwipe();
