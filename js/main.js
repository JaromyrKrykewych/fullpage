let toggleMenu = document.getElementsByClassName('toggle-menu');
let menuMobile = document.getElementById('menu-mobile')

Array.from(toggleMenu).forEach(icon => {
    icon.addEventListener('click', () => {
        menuMobile.classList.toggle('show-menu')
    })
})