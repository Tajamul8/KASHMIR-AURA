// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Thank you! Your message has been sent.');

  form.reset();
});

// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Booking Form WhatsApp
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const persons = document.getElementById('persons').value;
  const destination = document.getElementById('destination').value;

  const message = `Hello Kashmir Aura,%0A%0AName: ${name}%0ADate: ${date}%0APersons: ${persons}%0ADestination: ${destination}`;

  window.open(`https://wa.me/919797472650?text=${message}`, '_blank');
});

// Hero Image Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide(){
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 4000);

// Navbar Background On Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 50){
    header.style.background = '#0c3c2c';
  } else {
    header.style.background = 'rgba(0,0,0,0.4)';
  }
});
