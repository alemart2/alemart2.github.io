// Select elements from the DOM
const navLinks = document.querySelectorAll('a[href^="#"]');

// Function to smooth scroll (mirrors "addBookToDOM" structure from Lab 07)
const smoothScroll = (anchor) => {
  const id = anchor.getAttribute("href");
  const target = document.querySelector(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// Add event listeners to navbar links (same pattern as fetchData .then)
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(link);
  });
});

// Add interactivity for resume download (similar to error or final block in class)
const resumeBtn = document.querySelector("#resume-btn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    console.log("Resume download initiated.");
  });
}

// Accordion Functionality
// Source used: https://www.w3schools.com/howto/howto_js_accordion.asp
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Automatic slideshow (for Carcassonne only)
// source used: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Contact Form Handler and Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // validation rules
    if (name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message has been received.");
    form.reset();
  });
});
