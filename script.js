// Functie om het hamburgermenu te activeren/deactiveren
function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active'); // Voeg of verwijder de 'active' klasse van het menu
    }
}

// Event listener om de toggleMenu-functie aan te roepen wanneer er op het hamburgermenu wordt geklikt
var menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}
