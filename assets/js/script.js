const html = document.querySelector("html");
const button = document.querySelector(".mobile-menu-button");
const navbar = document.querySelector(".navbar");

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (button.classList.contains("active")) {
      html.classList.remove("overflow");
      button.classList.remove("active");
      navbar.classList.remove("active");
    } else {
      html.classList.add("overflow");
      button.classList.add("active");
      navbar.classList.add("active");
    }
  });
}
