function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

// get all the navbar buttons
const navbarLinks = document.querySelectorAll("nav a");

// add a click event listener to each button
navbarLinks.forEach(link => {
  link.addEventListener("click", smoothScroll);
});
