const sticky_navbar = () => {
  let navbar = document.querySelector(".NavBar");
  let sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.addEventListener("load", sticky_navbar);
window.addEventListener("scroll", sticky_navbar);
