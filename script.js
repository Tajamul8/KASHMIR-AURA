// Mobile Menu

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Loader

window.addEventListener('load', () => {

  document.getElementById('loader').style.display = 'none';

});

// Slider

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function changeSlide(){

slides[currentSlide].classList.remove('active');

currentSlide = (currentSlide + 1) % slides.length;

slides[currentSlide].classList.add('active');

}

setInterval(changeSlide, 4000);

// Navbar Background

window.addEventListener('scroll', () => {

const header = document.querySelector('header');

if(window.scrollY > 50){

header.style.background = '#0d47a1';

}else{

header.style.background = 'rgba(0,0,0,0.4)';

}

});
