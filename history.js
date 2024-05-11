// history.js

document.addEventListener("DOMContentLoaded", function () {
    // Zoek alle titels van de conferenties
    const historyTitles = document.querySelectorAll("li>b");

    // Voeg een event listener toe aan elk titel-element
    historyTitles.forEach(title => {
        title.addEventListener("click", function () {
            // Zoek het artikel waarin de uitleg moet worden ingevoegd
            const uitlegArticle = document.getElementById("uitlegArticle");
            // Voeg de uitleg tekst toe aan het artikel
            switch (title.innerText) {
                case "Dartmouth-conferentie (1956)":
                    uitlegArticle.innerHTML = `
                        <p>Deze conferentie wordt beschouwd als de geboorte van AI, waarbij toonaangevende onderzoekers bijeenkwamen om de mogelijkheden van het creëren van intelligente machines te bespreken.</p>
                    `;
                    break;
                // Voeg cases toe voor andere titels indien nodig
                default:
                    uitlegArticle.innerHTML = `<p>Hier komt uitleg.</p>`;
                    break;
            }
        });
    });
});
