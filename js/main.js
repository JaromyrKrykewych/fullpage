//Menu Mobile

let toggleMenu = document.getElementsByClassName("toggle-menu");
let menuMobile = document.getElementById("menu-mobile");

Array.from(toggleMenu).forEach((icon) => {
  icon.addEventListener("click", () => {
    menuMobile.classList.toggle("show-menu");
  });
});

let controls = document.getElementsByClassName("controls");
Array.from(controls).forEach((control) => {
  Array.from(control.children).forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.target.parentNode.nextElementSibling.classList.toggle("active");
      e.target.classList.toggle("open");
      e.target.classList.toggle("close");
    });
  });
});

//Carousel from three boxes

/* const carouselFunction = (mainID, controlsID, targetsID, mainClass, targetClass) => {
  let divCarousel = document.getElementById(mainID);
  let carousel = [...divCarousel.children];
  let divControls = document.getElementById(controlsID);
  let controls = divControls.children;
  let divTargets = document.getElementById(targetsID);
  let targets = [...divTargets.children];
  let contador = 1;

  Array.from(controls).forEach(control => {
    control.addEventListener("click", (e) => {
      if (e.target === controls[0] && contador > 0) {
        targets[contador].classList.remove(targetClass);
        carousel[contador].classList.remove(mainClass);
        contador = contador - 1;
        targets[contador].classList.add(targetClass);
        carousel[contador].classList.add(mainClass);
      } else if (
        e.target === controls[1] &&
        contador < targets.length - 1
      ) {
        targets[contador].classList.remove(targetClass);
        carousel[contador].classList.remove(mainClass);
        contador = contador + 1;
        targets[contador].classList.add(targetClass);
        carousel[contador].classList.add(mainClass);
      }
    });
  });
};
 */