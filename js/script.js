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
/*Nav bar ends*/

/*Auto heading
06/12/2022*/ 
const homeh1 = document.querySelector('.hm-h1') //Calling the class from html
const visah1 = document.querySelector('.visa-h1') //Calling the visa h1 tag
const heading = 'Welcome to KometCare .. .' 
const headingg = 'Visa Requirement.  .'
let idx = 1 
let speed = 175 // rewrite speed

writeText()
writeText2()

function writeText() {
    homeh1.innerText = heading.slice(0, idx)
    idx++
    if(idx > heading.length) { //condition to check if function exceeds the indecx number
        idx = 1
    }
    setTimeout(writeText, speed)  /*runs spesific function in the spesicif time which is passed by paramater*/
}

function writeText2() {
    visah1.innerText = headingg.slice(0, idx)
    idx++
    if(idx > headingg.length) { //condition to check if function exceeds the indecx number
        idx = 1
    }
    setTimeout(writeText2, speed)  /*runs spesific function in the spesicif time which is passed by paramater*/
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
/** Nav Bar in mobile device ends*/

/*Pictures in the home page*/

const panels = document.querySelectorAll('.hm-panel') /*we can choose all clases named panel*/ 

console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('mouseover', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

/*Pictures in the home page ends*/

//Emre's Code ends

