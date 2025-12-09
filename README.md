# Alex Martinez-Lopez — Personal Website

This project is my final project for the Intro To Web Development course.
It is a professional personal website designed to highlight my background, skills, previous work experience, academic projects, and career interests. The website is built using HTML, CSS, and JavaScript, following the requirements.

## Deloyed Website: https://alemart2.github.io/

## Features

### 1. Navigation Bar

A fixed, responsive navigation bar links to each major section of the page, allowing smooth scrolling behavior implemented using JavaScript.

### 2. About Section

Includes a professional introduction, brief background, a statement about my goals in computer science, and my interest in cybersecurity.

### 3. Previous Work Section

- Contains structured descriptions of my job experience.
- Includes a **Download Resume** button implemented using the `download` attribute, along with Font Awesome icons for styling.

### 4. Projects Section

Lists several academic projects with descriptions and links to GitHub repositories.
Includes:

- A. Project Cards

  - Each project is displayed using custom-styled card components.
  - Cards use shadows, rounded corners, and consistent spacing.

- B. Automatic Image Carousel (New Feature)

  - The Carcassonne project uses a **JavaScript slideshow** that automatically rotates through multiple images.
  - Built using:
    - Timed function loops in JavaScript
    - Dynamic class switching
    - Responsive, centered image placement using `object-fit` and container rules

- C. Accordion Component (New Feature) - Each project includes a collapsible **accordion** button. - Clicking reveals a detailed description and GitHub link. - Implemented using: - DOM event listeners - Class toggling - Smooth CSS transitions

### 5. Contact Section

Includes a Contact Form based on class assignments, styled to match the overall site theme and includes form validation.

# Outside Sources Used:

### 1. Smooth Scroll (scrollIntoView)

- Instead of jumping instantly, the page scrolls down smoothly to the section clicked on navbar
- Links: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

### 2. Font Awesome (Icon Library)

- Used for adding a download icon to the resume button.
- Link: https://fontawesome.com/v4/icon/download

### 3. W3Schools — HTML <a download> attribute

- Used to learn how the download attribute works to create the resume download button
- Link: https://www.w3schools.com/tags/att_a_download.asp

### 4. MDN Web Docs — scrollIntoView API

- Used as reference for implementing smooth scrolling navigation.
- Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

### 5. W3Schools - Accordion Tutorial

- Used to build the expandable project descriptions and learn how panel toggling works.
- Link: https://www.w3schools.com/howto/howto_js_accordion.asp

### 6. W3Schools - Automatic Slideshow / Carousel Tutorial

- Used to build the automatic rotating image carousel for the Carcassonne project.
- Link: https://www.w3schools.com/howto/howto_js_slideshow.asp
