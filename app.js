const headerTitle = document.querySelectorAll('.place-city')
const radioBtn = document.querySelectorAll('.radio_btn')

let images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
  ];
  let index = 0;
  radioBtn[0].checked = true
  let image = document.getElementById("image");
  image.src = images[0];

  function show_image(direction) {
    if (direction == "left") {
      index--;
    } else {
      index++;
      index %= images.length;
    }
  
    if (index < 0) {
      index = images.length - 1;
    }
    if(index==0){
        headerTitle[0].classList.add('active')
        headerTitle[1].classList.remove('active')
        headerTitle[2].classList.remove('active')
        radioBtn[0].checked = true
        radioBtn[1].checked = false
        radioBtn[2].checked = false
    }else if(index==1){
        headerTitle[1].classList.add('active')
        headerTitle[0].classList.remove('active')
        headerTitle[2].classList.remove('active')
        radioBtn[1].checked = true
        radioBtn[0].checked = false
        radioBtn[2].checked = false
        
    }
    else if(index==2){
        headerTitle[2].classList.add('active')
        headerTitle[1].classList.remove('active')
        headerTitle[0].classList.remove('active')
        radioBtn[2].checked = true
        radioBtn[1].checked = false
        radioBtn[0].checked = false
    }
  
    image.src = images[index];
  }
  function show_apart(num){
    switch(num){
        case '1':
            headerTitle[0].classList.add('active')
            headerTitle[1].classList.remove('active')
            headerTitle[2].classList.remove('active')
            radioBtn[0].checked = true
            radioBtn[1].checked = false
            radioBtn[2].checked = false
            image.src = images[0];
            index = 0
            break;
        case '2':
            headerTitle[1].classList.add('active')
            headerTitle[0].classList.remove('active')
            headerTitle[2].classList.remove('active')
            image.src = images[1];
            radioBtn[1].checked = true
            radioBtn[0].checked = false
            radioBtn[2].checked = false
            index = 1
            break;
        case '3':
            headerTitle[2].classList.add('active')
            headerTitle[1].classList.remove('active')
            headerTitle[0].classList.remove('active')
            radioBtn[2].checked = true
            radioBtn[1].checked = false
            radioBtn[0].checked = false
            image.src = images[2];
            index = 2
            break;
    }
  }