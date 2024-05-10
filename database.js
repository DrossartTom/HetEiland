document.addEventListener('DOMContentLoaded', function () {
    // Haal opgeslagen gegevens op
    var opgeslagenData = localStorage.getItem('contactData');
    var contactGegevens = opgeslagenData ? JSON.parse(opgeslagenData) : [];

    // Referentie naar tbody element
    var tbody = document.getElementById('contactDataBody');

    // Loop door elke set gegevens en voeg ze toe aan de tabel
    contactGegevens.forEach(function (data, index) {
        var row = document.createElement('tr');

        var voornaamCell = document.createElement('td');
        voornaamCell.textContent = data.voornaam;
        row.appendChild(voornaamCell);

        var naamCell = document.createElement('td');
        naamCell.textContent = data.naam;
        row.appendChild(naamCell);

        var adresCell = document.createElement('td');
        adresCell.textContent = data.adres;
        row.appendChild(adresCell);

        var emailCell = document.createElement('td');
        emailCell.textContent = data.email;
        row.appendChild(emailCell);

        var cursusCell = document.createElement('td');
        cursusCell.textContent = data.cursus;
        row.appendChild(cursusCell);

        var commentaarCell = document.createElement('td');
        commentaarCell.textContent = data.commentaar;
        row.appendChild(commentaarCell);

        // Voeg een knop toe om deze specifieke rij te verwijderen
        var deleteButtonCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijderen';
        deleteButton.addEventListener('click', function () {
            removeRow(index);
        });
        deleteButtonCell.appendChild(deleteButton);
        row.appendChild(deleteButtonCell);

        tbody.appendChild(row);
    });

    // Voeg een eventlistener toe aan de knop om de tabel leeg te maken
    document.getElementById('clearButton').addEventListener('click', clearTable);
});

function clearTable() {
    // Haal de referentie naar de tbody op
    var tbody = document.getElementById('contactDataBody');
    // Verwijder alle rijen in de tbody
    tbody.innerHTML = '';
    // Verwijder ook de gegevens uit de localStorage
    localStorage.removeItem('contactData');
}

function removeRow(index) {
    var contactData = JSON.parse(localStorage.getItem('contactData'));
    contactData.splice(index, 1); // Verwijder de rij op de gegeven index
    localStorage.setItem('contactData', JSON.stringify(contactData));
    location.reload(); // Vernieuw de pagina om de wijzigingen weer te geven
}
