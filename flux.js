function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// JavaScript for Image Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// JavaScript for Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-images img");
galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const imageElement = document.createElement("img");
    imageElement.src = image.src;
    const closeIcon = document.createElement("span");
    closeIcon.className = "close-icon";
    closeIcon.textContent = "x";
    closeIcon.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(closeIcon);
    overlay.appendChild(imageContainer);
    document.body.appendChild(overlay);
  });
});

// JavaScript for Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Code to submit form data to server and handle response
  // You can use AJAX or fetch API to make a server-side request and handle the response accordingly
  // Example: 
  // const formData = new FormData(contactForm);
  // fetch("submit_contact_form.php", {
  //   method: "POST",
  //   body: formData
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.success) {
  //     // Show success message
  //   } else {
  //     // Show error message
  //   }
  // })
  // .catch(error => {
  //   // Show error message
  // });
});

// JavaScript for Signup Form Submission
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Code to submit form data to server and handle response
  // You can use AJAX or fetch API to make a server-side request and handle the response accordingly
  // Example: 
  // const formData = new FormData(signupForm);
  // fetch("submit_signup_form.php", {
  //   method: "POST",
  //   body: formData
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.success) {
  //     // Show success message
  //   } else {
  //     // Show error message
  //   }
  // })
  // .catch(error => {
  //   // Show error message
  // });
});


function cardspace(){
  var carddigit = document.getElementById('cardno').value;
  if(carddigit.length == 4 ||carddigit.length == 9 ||carddigit.length == 14){
        document.getElementById('cardno').value = carddigit+('');
        document.getElementById('carddno').max =1;
  }
}
function addSlahes(){
  var expiredate = document.getElementById('validtill').value;
  if(expiredate.length == 2 ){
        document.getElementById('validtill').value = expire+('/');
        document.getElementById('validtill').max =1;
  }
}
