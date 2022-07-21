//Carousel from three boxes

const carouselFunction = (mainID, controlsID, targetsID, mainClass, targetClass) => {
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

const targetSelector = (mainID, targetsID) => { /* mainID, targetsID, mainClass, targetClass */
  let divTarget = document.getElementById(targetsID)
  let targets = [...divTarget.children]
  let divOptions = document.getElementById(mainID)
  let options = [...divOptions.children]
  
  targets.forEach(target => {
    target.addEventListener('click', e => {
      if (e.target === targets[0] && !e.target.classList.contains('current')) {
        console.log(1);
      } else if(e.target === targets[1] && !e.target.classList.contains('current')) {
        console.log(2);
      } else if(e.target === targets[2] && !e.target.classList.contains('current')) {
        console.log(3);
      }
    })
  })
}

//Carousel section message

carouselFunction("carousel-message", "message-controls", "message-targets", "active", "current")

//Proyects

let mediaqueryDesktop = window.matchMedia("(min-width: 1024px)");

if (mediaqueryDesktop.matches) {
  targetSelector("carousel-proyects", "proyects-targets")
} else {
  carouselFunction("carousel-proyects" , "proyects-controls", "proyects-targets", "active", "current")
}

