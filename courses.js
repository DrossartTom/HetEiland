function isValidEmail(email) {
    // Reguliere expressie voor het valideren van e-mailadressen
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    // Verzamel formuliergegevens
    var voornaam = document.getElementById('voornaam').value;
    var naam = document.getElementById('naam').value;
    var adres = document.getElementById('adres').value;
    var email = document.getElementById('email').value;
    var cursus = document.getElementById('cursus').value;
    var commentaar = document.getElementById('commentaar').value;

    // Controleer of alle verplichte velden zijn ingevuld en of het e-mailadres geldig is
    if (voornaam === '' || naam === '' || adres === '' || email === '' || cursus === '') {
        // Toon een melding dat alle verplichte velden moeten worden ingevuld
        var melding = document.getElementById('melding');
        melding.innerText = 'Alle verplichte velden moeten worden ingevuld';
        melding.style.display = 'block';
        // Verberg de melding na 5 seconden
        setTimeout(function () {
            melding.style.display = 'none';
        }, 5000);
        return; // Stop de functie als niet alle velden zijn ingevuld
    } else if (!isValidEmail(email)) {
        // Toon een melding dat het e-mailadres ongeldig is
        var melding = document.getElementById('melding');
        melding.innerText = 'Ongeldig e-mailadres';
        melding.style.display = 'block';
        // Verberg de melding na 5 seconden
        setTimeout(function () {
            melding.style.display = 'none';
        }, 5000);
        return; // Stop de functie als het e-mailadres ongeldig is
    }

    // Maak een object met de verzamelde gegevens
    var formData = {
        voornaam: voornaam,
        naam: naam,
        adres: adres,
        email: email,
        cursus: cursus,
        commentaar: commentaar
    };

    // Haal eerst de bestaande gegevens op uit localStorage
    var opgeslagenData = localStorage.getItem('contactData');
    var contactGegevens = opgeslagenData ? JSON.parse(opgeslagenData) : [];

    // Voeg de nieuwe gegevens toe aan de bestaande gegevens
    contactGegevens.push(formData);

    // Sla de geüpdatete gegevens op in localStorage
    localStorage.setItem('contactData', JSON.stringify(contactGegevens));

    // Leeg de velden van het formulier
    document.getElementById('voornaam').value = '';
    document.getElementById('naam').value = '';
    document.getElementById('adres').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cursus').value = '';
    document.getElementById('commentaar').value = '';

    // Toon de melding dat de inschrijving is gelukt
    var melding = document.getElementById('melding');
    melding.innerText = 'Inschrijving gelukt';
    melding.style.display = 'block';

    // Verberg de melding na 5 seconden
    setTimeout(function () {
        melding.style.display = 'none';
    }, 5000);
}
