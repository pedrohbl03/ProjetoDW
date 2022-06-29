const slideItems = document.querySelectorAll('.slider-item');
let activeItem = 0;
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const sliderWrapper = document.getElementById('sliderWrapper')

btnNext.addEventListener('click', (e) => {
  if (activeItem == slideItems.length - 1) {
    activeItem = 0;
  }
  else {
    activeItem = activeItem + 1;
  }

  return slideControls(activeItem)
})

btnPrev.addEventListener('click', (e) => {
  if (activeItem == 0) {
    activeItem = slideItems.length - 1;
  }

  else {
    activeItem = activeItem - 1;
  }

  return slideControls(activeItem)
})


const slideControls = (item) => {
  sliderWrapper.style.transform = `translateX(${-item * 100}%)`
}