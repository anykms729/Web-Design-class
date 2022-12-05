// Emre -HomePage-
//05/12/2022
const nav = document.querySelector('.hm-nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//Emre's Code ends