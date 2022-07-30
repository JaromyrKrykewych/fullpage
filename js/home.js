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

const targetSelector = (mainID, targetsID, targetClass) => { /* mainID, targetsID, mainClass, targetClass */
  let divTarget = document.getElementById(targetsID)
  let targets = [...divTarget.children]
  let divOptions = document.getElementById(mainID)
  let options = [...divOptions.children]
  
  targets.forEach(target => {
    target.addEventListener('click', e => {
      if (e.target === targets[0] && !e.target.classList.contains(targetClass)) {
        for(let i=0; i<targets.length; i++){
          options[i].classList.remove('active')
          options[i].classList.remove('first')
          options[i].classList.remove('third')
          if(targets[i].classList.contains(targetClass)){
            targets[i].classList.remove(targetClass)
          }
        }
        e.target.classList.add(targetClass)
        options[0].classList.add('active')
        options[1].classList.add('third')
        options[2].classList.add('first')
      } else if(e.target === targets[1] && !e.target.classList.contains(targetClass)) {
        for(let i=0; i<targets.length; i++){
          options[i].classList.remove('active')
          options[i].classList.remove('first')
          options[i].classList.remove('third')
          if(targets[i].classList.contains(targetClass)){
            targets[i].classList.remove(targetClass)
          }
        }
        e.target.classList.add(targetClass)
        options[1].classList.add('active')
        options[2].classList.add('third')
        options[0].classList.add('first')
      } else if(e.target === targets[2] && !e.target.classList.contains(targetClass)) {
        for(let i=0; i<targets.length; i++){
          options[i].classList.remove('active')
          options[i].classList.remove('first')
          options[i].classList.remove('third')
          if(targets[i].classList.contains(targetClass)){
            targets[i].classList.remove(targetClass)
          }
        }
        e.target.classList.add(targetClass)
        options[2].classList.add('active')
        options[0].classList.add('third')
        options[1].classList.add('first')
      }
    })
  })
}

//Carousel section message

carouselFunction("carousel-message", "message-controls", "message-targets", "active", "current")

//Proyects

let mediaqueryDesktop = window.matchMedia("(min-width: 1024px)");

if (mediaqueryDesktop.matches) {
  targetSelector("carousel-proyects", "proyects-targets", "current")
} else {
  carouselFunction("carousel-proyects" , "proyects-controls", "proyects-targets", "active", "current")
}

