const navbarToggle = document.querySelector('.navbar-toggler')
const collapse = document.querySelector('.collapse')

navbarToggle.addEventListener('click', navbarShow)
function navbarShow() {
    collapse.classList.toggle('show')
}

const dropDown = document.querySelector('.dropdown-toggle')
const dropMenu = document.querySelector('.dropdown-menu')

dropDown.addEventListener('click', dropShow)
function dropShow() {
    dropMenu.classList.toggle('show')
}