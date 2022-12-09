// Emre -HomePage-
//05/12/2022
/*Nav bar*/
const nav = document.querySelector('.hm-nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
/*Nav bar ens*/

/*Auto heading
06/12/2022*/ 
const homeh1 = document.querySelector('.hm-h1') //Calling the class from html
const heading = 'Welcome to KometCare'
let idx = 1 
let speed = 175 // rewrite speed

writeText()

function writeText() {
    homeh1.innerText = heading.slice(0, idx)

    idx++

    if(idx > heading.length) { //condition to check if function exceeds the indecx number
        idx = 1
    }

    setTimeout(writeText, speed)  /*runs spesific function in the spesicif time which is passed by paramater*/

}

/*Auto heading ends*/ 
/** Nav Bar in mobile device */
function hmopennav() {
    var x = document.querySelector(".hm-nav");
    if (x.className === "hm-nav") {
      x.className += " media";
    } else {
      x.className = "hm-nav";
    }
  }
/** Nav Bar in mobile device ens*/

/* Button Ripple Effect   in Progress     */
const buttons = document.querySelector('.visa-button') /*taking the class*/

buttons.forEach(button => { 
    button.addEventListener('click', function (e) { /*when we click function will be runned*/
        const x = e.clientX /*getting the x,y location where crusor clicked*/
        const y = e.clientY

        console.log(x,y)

        const buttonTop = e.target.offsetTop /*getting the position of button itself*/
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft /*calculating the where exactly crusor clicked inside the button*/
        const yInside = y- buttonTop

        const circle = document.createElement('span')/*creating span */
        circle.classList.add('circle') /*adding the class to apply the written css*/
        circle.style.top = yInside + 'px' /*adding inline styling*/
        circle.style.left = xInside + 'px'

        this.appendChild(circle) /*adding child class*/ 

        setTimeout(() => circle.remove(), 500) /*After 500ms the class will be removed*/ 
    })
})

/* Button Ripple Effect ends     */


//Emre's Code ends