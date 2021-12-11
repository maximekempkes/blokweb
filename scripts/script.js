var hamburgerButton = document.querySelector("nav button");

hamburgerButton.addEventListener("click", hamburgermenu);

function hamburgermenu() {
document.body.classList.toggle("opendicht");
}

// OBSERVER
//haal de elementen op die je wilt laten animeren, in dit geval de items met de 'animate' class
const allAnimationItems = document.querySelectorAll('.animate')

// de opties - 
// rootMargin: vanaf welk punt hij gaat checken, dus als deze op 20px staat moet hij eerst sowieso 20px in beeld zijn
// threshold: hoeveel van het item moet in beeld zijn om het event te triggeren
const options = {
    rootMargin: "20px",
    threshold: 0.2
}

// de callback functie is de functie die uitgevoerd wordt wanneer het element in of uit beeld gaat
function callbackFunction(entries) {
    // loop over alle elementen
    entries.forEach(entry => {
        // check of het element in beeld is
        if (entry.intersectionRatio > 0) {
          //voeg de class toe wanneer deze in beeld is
            entry.target.classList.add('fade')   
        }
    })
}

// maak de observer aan en geef deze de callback functie mee en de opties
const observer = new IntersectionObserver(callbackFunction, options)

//loop over alle elementen heen die je wilt laten observeren
allAnimationItems.forEach(item => {
    //observeer het element
    observer.observe(item)
})