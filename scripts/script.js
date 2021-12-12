
/*************************/ 
/* HAMBURGER*/
/*************************/ 
var hamburgerButton = document.querySelector("nav button");

hamburgerButton.addEventListener("click", hamburgermenu);

function hamburgermenu() {
document.body.classList.toggle("opendicht");
}


/*************************/ 
/* FADE*/
/*************************/ 
const allAnimationItems = document.querySelectorAll('.animate')


const options = {
    rootMargin: "20px",
    threshold: 0.2
}


function callbackFunction(entries) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade')   
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, options)

allAnimationItems.forEach(item => {
    observer.observe(item)
})