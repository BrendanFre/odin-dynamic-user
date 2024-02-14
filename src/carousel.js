import leftArrow from './iconLibrary/pngs/left.png'
import rightArrow from './iconLibrary/pngs/right.png'
import './carousel.css'
const targetDiv = document.querySelector('.carouselMain');
const imageGallery = document.querySelectorAll('.carouselImage');

function changeImage (nextImage){
  const currentImage = document.querySelector('.show');
  console.log(currentImage)
  let numberImage = parseInt(currentImage.id)
  if(nextImage){
    numberImage++
  } else {numberImage--}
  numberImage = numberImage.toString()
  console.log(numberImage)
  currentImage.classList.remove('show');
  currentImage.classList.add('hidden');
  if (numberImage <= imageGallery.length - 1 && numberImage > 0) {
    imageGallery[numberImage].classList.add('show');
    imageGallery[numberImage].classList.remove('hidden');
  } else if(numberImage == imageGallery.length - 1){
    imageGallery[0].classList.add('show');
    imageGallery[0].classList.remove('hidden');
  } else {
    imageGallery[-1].classList.add('show');
    imageGallery[-1].classList.remove('hidden');
  }
}

function createArrows(parent, isLeft) {
  const arrowImage = document.createElement('img');
  let imageSource;
  let imageClass;
  let imageLeft
  if(isLeft){
    imageSource = leftArrow;
    imageClass = 'leftArrow';
    arrowImage.style.left = '2px';
    arrowImage.addEventListener('click', () =>{
      changeImage(false)
      // const currentImage = document.querySelector('.show');
      // console.log(currentImage)
      // currentImage.classList.remove('show');
      // let numberImage = currentImage.id;
      // if (numberImage != 0)
      // {imageGallery[numberImage--].classList.add('show');}
    })
  } else { 
    imageSource = rightArrow;
    imageClass = 'rightArrow';
    arrowImage.style.right = '2px';
    arrowImage.addEventListener('click', () => {
      changeImage(true)
      // const currentImage = document.querySelector('.show');
      // console.log(currentImage)
      // let numberImage = parseInt(currentImage.id)
      // numberImage++;
      // numberImage = numberImage.toString()
      // console.log(numberImage)
      // currentImage.classList.remove('show');
      // currentImage.classList.add('hidden');
      // if (numberImage <= imageGallery.length - 1) { 
      //   imageGallery[numberImage].classList.add('show');
      //   imageGallery[numberImage].classList.remove('hidden');
      // } else {
      //   imageGallery[0].classList.add('show');
      //   imageGallery[0].classList.remove('hidden');
      // }
    })
  };
  arrowImage.src = imageSource;
  arrowImage.classList.add(imageClass);
  
  arrowImage.style.left = imageLeft;
  arrowImage.style.top = '20vh';
  arrowImage.style.zIndex = 2;
  arrowImage.style.position = 'absolute';
  parent.appendChild(arrowImage);
}


function carouselImage (image) {
  const currentImage = document.createElement('img');
  currentImage.src = image;
  return { currentImage };
}

export default () => {
  console.log(imageGallery)
  const imageFrame = document.createElement('div');
  let imageCounter = 0;
  imageFrame.classList.add('innerFrame');
  targetDiv.appendChild(imageFrame);
  createArrows(imageFrame, true);
  createArrows(imageFrame, false);
imageGallery.forEach((image) => {
  image.id = imageCounter
  image.classList.add('hidden');
  imageCounter++;
})
imageGallery[0].classList.remove('hidden');
imageGallery[0].classList.add('show');
}