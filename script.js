'use strict';

// const slide1 = document.querySelector('#s1');
// const slide2 = document.querySelector('#s2');
// const slide3 = document.querySelector('#s3');
// const slide4 = document.querySelector('#s4');
// const slideRadio = document.querySelectorAll('input[name="s"]')
// let slideIndex = 0;

// function slideShow() {
//     var i;
//     const slides = document.getElementsByClassName('slide1');
//     var dots = document.getElementsByClassName("bar");
//     for(i=0; i <slides.length; i++) {
//         slides[i].style.display = "none;"
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");

//     }
//     for (i=0; i < slideRadio.length; i++){
//         slideRadio[i].className = slideRadio[i].className.replace('input[name="s"]','input[name="s"]:checked')
//     }
//     slideRadio[slideIndex-1].classname = "input[name="s"]:checked";
//     slides[slideIndex-1].style.display = "flex";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(slideShow, 2000);
// };

// slideShow();
// console.log(slideShow);

// console.log(slideRadio);


// function slideShow() {
//     var i;
//     const slideRadio = document.querySelectorAll('input[type="radio"]')
//     var dots = document.getElementsByClassName("bar");
//     for(i=0; i <slideRadio.length; i++) {
//         slideRadio[i].style.display = "none;"
//     }
//     slideIndex++;
//     if (slideIndex > slideRadio.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slideRadio[slideIndex-1].style.display = "flex";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(slideShow, 2000);
// };

// slideShow();
// console.log(slideShow);