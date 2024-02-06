import leftArrow from './assets/left.png'
import './carousel.css'
const targetDiv = document.querySelector('.carouselMain');


function carouselImage (image) {
  const currentImage = document.createElement('img');
  currentImage.src = image;
  return { currentImage };
}

export default (...args) => {
  const leftArrowGuide = document.createElement('img');
  leftArrowGuide.src = leftArrow;
  leftArrowGuide.classList.add('leftArrow');
  targetDiv.appendChild(leftArrowGuide);
  leftArrowGuide.style.left = '2em';
  leftArrowGuide.style.top = '50%';
  leftArrowGuide.style.zIndex = 2;
  leftArrowGuide.style.position = 'absolute';
args.forEach((image) => {
  const newImage = document.createElement('img');
  newImage.src = image;
  targetDiv.appendChild(newImage);
})
}