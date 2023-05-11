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
  


  const images = [
    "images/utep-miners.jpg",
    "images/utep-background.jpg",
    "images/utep-centennial-plaza.jpeg",
    "images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg"
  ];
  
  let currentImageIndex = 0;
  
  function rotateBackgroundImage() {
    const landingPage = document.querySelector(".LandingPage");
    const landingPage_h1 = landingPage.querySelector("h1");
    const landingPage_h2 = landingPage.querySelector("h2");

    landingPage.classList.add("fade-out");
    if( currentImageIndex ==  3){
      landingPage.style.backgroundImage = `url("${images[currentImageIndex]}")`;
      landingPage_h1.style.backgroundColor = "white";
      landingPage_h2.style.backgroundColor = "white";
      // landingPage.classList.remove("fade-out");
    
    }
    else{
      landingPage_h1.style.backgroundColor = "transparent";
      landingPage_h2.style.backgroundColor = "transparent";
    
      landingPage.style.backgroundImage = `url("${images[currentImageIndex]}")`;
      landingPage.classList.remove("fade-out");
    }
    
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(rotateBackgroundImage, 1000);
  