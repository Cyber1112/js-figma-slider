const images = [
  {
    img : 'image1',
    alt : 'place1',
    titleContent : 'Rostov-on-Don LCD admiral',
    areaAps : '81 m2',
    repairTime : '3.5 months',
    repairCost : 'Upon Request'
  },
  {
    img:  'image2',
    alt : 'place2',
    titleContent : 'Sochi Thieves',
    areaAps : '105 m2',
    repairTime : '4 months',
    repairCost : 'Upon Request'
  },
  {
    img : 'image3',
    alt : 'place3',
    titleContent : 'Rostov-on-Don Patriotic',
    areaAps : '93 m2',
    repairTime : '3 months',
    repairCost : 'Upon Request'
  }
]
const slideDots = document.querySelectorAll('.slider-items .item')
const imagesContainer = document.getElementById('uniqueApart')
const catalogueImg = document.getElementById('catalogueImg')
const placeCity = document.querySelectorAll('.place-city')
const titleCont = document.querySelector('.title_city')
const areaApart = document.querySelector('.title_area')
const repairTim = document.querySelector('.title_repair')
const repairCos = document.querySelector('.title_cost')
let currentIndex = 0
const setEntity = (index) => {
  for(let i = 0; i < images.length; i++){
    slideDots[i].classList.remove('active')
    placeCity[i].classList.remove('active')
  }
  catalogueImg.src = `images/${images[index].img}.png`
  catalogueImg.alt = `${images[index].alt}`
  slideDots[index].classList.add('active')
  placeCity[index].classList.add('active')
  titleCont.textContent = images[index].titleContent
  areaApart.textContent = images[index].areaAps
  repairTim.textContent = images[index].repairTime
  repairCos.textContent = images[index].repairCost
}
setEntity(currentIndex)
function nextSlide(){
  currentIndex++
  currentIndex %= images.length
  setEntity(currentIndex)
}
function previousSlide(){
  if(currentIndex < 1){
    currentIndex = images.length
  }
  setEntity(currentIndex - 1)
  currentIndex -= 1
}
function currentSlide(i){
  setEntity(currentIndex = i)
}

