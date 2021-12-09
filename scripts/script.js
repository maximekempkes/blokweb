var hamburgerButton = document.querySelector("nav button");

hamburgerButton.addEventListener("click", hamburgermenu);

function hamburgermenu() {
document.body.classList.toggle("opendicht");
}