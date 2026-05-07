// IMAGE SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);


// WHATSAPP FORM

document.getElementById("whatsappForm").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let persons = document.getElementById("persons").value;
  let packageName = document.getElementById("package").value;
  let message = document.getElementById("message").value;

  let whatsappMessage =
`Hello Kashmir Aura,
Name: ${name}
Persons: ${persons}
Package: ${packageName}
Message: ${message}`;

  let whatsappURL =
`https://wa.me/919797472650?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

});