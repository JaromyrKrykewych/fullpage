let toggleMenu = document.getElementsByClassName('toggle-menu');
let menuMobile = document.getElementById('menu-mobile')

Array.from(toggleMenu).forEach(icon => {
    icon.addEventListener('click', () => {
        menuMobile.classList.toggle('show-menu')
    })
})

let controls = document.getElementsByClassName('controls')
Array.from(controls).forEach(control => {
    Array.from(control.children).forEach(icon => {
        icon.addEventListener('click', e => {
            e.target.parentNode.nextElementSibling.classList.toggle('active')
            e.target.classList.toggle('open')
            e.target.classList.toggle('close')
        })
    })
})
