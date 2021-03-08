let slideDots = document.querySelectorAll('.slider-items .item')
let placeCity = document.querySelectorAll('.place-city')
let apartImages = document.querySelectorAll('.apart-img')
let cityInfo = document.querySelectorAll('.info-container')
let imageIndex = 1;
show_apart(imageIndex)

function nextSlide(){
  if(imageIndex > apartImages.length){
    imageIndex = 1
  }
  show_apart(imageIndex += 1)
}
function previousSlide(){
  if(imageIndex < 1){
    imageIndex = apartImages.length
  }
  show_apart(imageIndex -= 1)
}
function currentSlide(i){
  show_apart(imageIndex = i)
}

function show_apart(imageIndex){
  if(imageIndex > apartImages.length){
    imageIndex = 1
  }else if(imageIndex < 1){
    imageIndex = apartImages.length
  }
  for (let i = 0; i < apartImages.length; i++) {
    apartImages[i].style.display = "none"
    cityInfo[i].classList.remove('active')
    slideDots[i].classList.remove('active')
    placeCity[i].classList.remove('active')
  } 
  apartImages[imageIndex - 1].style.display = "block"
  cityInfo[imageIndex - 1].classList.add('active')
  slideDots[imageIndex - 1].classList.add('active')
  placeCity[imageIndex - 1].classList.add('active')
}