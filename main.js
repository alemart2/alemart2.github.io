// Select elements from the DOM
const navLinks = document.querySelectorAll('a[href^="#"]');
const resumeButton = document.querySelector("#resume-btn");

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
resumeButton.addEventListener("click", () => {
  console.log("Resume is being downloaded.");
});
