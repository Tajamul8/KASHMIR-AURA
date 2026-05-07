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

// Navbar Background On Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if(window.scrollY > 50){
    header.style.background = '#0c3c2c';
  } else {
    header.style.background = 'rgba(0,0,0,0.4)';
  }
});
