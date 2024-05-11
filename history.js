// history.js

document.addEventListener("DOMContentLoaded", function () {
    // Zoek alle titels van de conferenties
    const conferenceTitles = document.querySelectorAll("li>b");

    // Voeg een event listener toe aan elk titel-element
    conferenceTitles.forEach(title => {
        title.addEventListener("click", function () {
            // Verwijder eerst de 'highlighted' klasse van alle titels
            conferenceTitles.forEach(t => {
                t.classList.remove("highlighted");
            });
            // Voeg de 'highlighted' klasse toe aan de aangeklikte titel
            title.classList.add("highlighted");

            // Zoek het artikel waarin de uitleg moet worden ingevoegd
            const uitlegArticle = document.getElementById("uitlegArticle");

            // Voeg de uitleg tekst toe aan het artikel
            switch (title.innerText) {
                case "Dartmouth-conferentie (1956)":
                    uitlegArticle.innerHTML = `
                        <p>Deze conferentie wordt beschouwd als de geboorte van AI, waarbij toonaangevende onderzoekers bijeenkwamen om de mogelijkheden van het creëren van intelligente machines te bespreken.</p>
                        <img src="img/darthmouth.png" alt="Dartmouth-conferentie">
                    `;
                    break;

                case "De Logic Theorist (1956)":
                    uitlegArticle.innerHTML = `
                    <p>Ontwikkeld door Allen Newell, J. C. Shaw en Herbert A. Simon, was dit programma het eerste dat heuristieken gebruikte om problemen op te lossen en wiskundige stellingen te bewijzen.</p>
                    <img src="img/logictheorist.png" alt="Logic-Theorist">
                `;
                    break;
                case "General Problem Solver (GPS) (1957)":
                    uitlegArticle.innerHTML = `
                        <p>
                        De General Problem Solver (GPS) was een computerprogramma ontwikkeld in 1957 door Herbert Simon, J.C. Shaw, en Allen Newell aan de RAND Corporation. Het doel ervan was om problemen op te lossen door middel van logisch redeneren en probleemoplossend vermogen, in plaats van door specifieke instructies te volgen voor elk individueel probleem.</p>
                        
                        <p>GPS was een van de eerste pogingen om kunstmatige intelligentie te creëren. Het werkte door middel van een zoekalgoritme dat probeerde om vanuit een gegeven beginstaat naar een doelstaat te navigeren door middel van het toepassen van operators. Deze operators waren acties die de staat van het probleem veranderden. Het programma zou de mogelijke acties evalueren, de meest veelbelovende kiezen en deze iteratief toepassen totdat het de doelstaat bereikte.</p>
                    `;
                    break;
                case "De Perceptron (1957)":
                    uitlegArticle.innerHTML = `
                        <p>Gemaakt door Frank Rosenblatt, was de perceptron een van de vroegste neurale netwerkmodellen, in staat om eenvoudige taken te leren.</p>
                        <img src="img/perceptron.jpg" alt="Perceptron">
                    `;
                    break;
                case "Shakey de Robot (1966)":
                    uitlegArticle.innerHTML = `
                        <p>Ontwikkeld door SRI International, was Shakey een van de eerste mobiele robots die zijn omgeving kon waarnemen en acties kon ondernemen op basis van die waarneming.</p>
                        <img src="img/shakey.jpg" alt="Shakey">
                    `;
                    break;
                case "Expertsystemen (1970s-1980s)":
                    uitlegArticle.innerHTML = `
                        <p>Expertsystemen, zoals MYCIN en DENDRAL, werden ontwikkeld om menselijke expertise op specifieke gebieden, zoals medische diagnose en chemische analyse, na te bootsen.</p>
                        <p>
                        <b>Mycin:</b>
                        Een expertsystemenproject van Stanford dat medische diagnostiek automatiseerde, vooral voor bloedinfecties. Het gebruikte kennis van medische experts om diagnoses te stellen op basis van symptomen van patiënten.</p>
                        <p>
                        <b>Dendral:</b>
                        Ontwikkeld aan Stanford, analyseerde chemische data om de structuur van organische verbindingen vast te stellen. Het was een vroege demonstratie van computers die complexe probleemoplossingstaken uitvoerden die normaal menselijke expertise vereisen.
                        </p>

                    `;
                    break;
                case "Backpropagation-algoritme (1986)":
                    uitlegArticle.innerHTML = `
                        <p>Deze doorbraak in neurale netwerktraining, ontwikkeld door David Rumelhart, Geoffrey Hinton en Ronald Williams, maakte de training van diepe neurale netwerken mogelijk.</p>
                        <img src="img/backpropagation.jpg" alt="Backpropagation">
                    `;
                    break;
                case "Deep Blue vs. Kasparov (1997)":
                    uitlegArticle.innerHTML = `
                        <p>IBM's Deep Blue versloeg wereldkampioen schaken Garry Kasparov, waardoor het potentieel van AI in complexe besluitvormingstaken werd aangetoond.</p>
                        <img src="img/deepblue.jpg" alt="Deepblue">

                    `;
                    break;
                case "Watson (2011)":
                    uitlegArticle.innerHTML = `
                        <p>IBM's Watson versloeg menselijke kampioenen op de quizshow Jeopardy!, waarmee vooruitgang werd geboekt in natuurlijke taalverwerking en kennisrepresentatie.</p>
                        <img src="img/watson.jpg" alt="Watson">

                    `;
                    break;
                case "AlphaGo (2016)":
                    uitlegArticle.innerHTML = `
                        <p>Ontwikkeld door DeepMind, versloeg AlphaGo wereldkampioen Lee Sedol, waarmee de kracht van reinforcement learning en neurale netwerken bij het beheersen van complexe spellen werd aangetoond.</p>
                        <img src="img/alphago.jpg" alt="Alphago">
                    `;
                    break;
                case "AI-model GPT-3 van OpenAI (2020)":
                    uitlegArticle.innerHTML = `
                        <p>Een geavanceerd AI-model gelanceerd in 2020, dat indrukwekkende prestaties levert in natuurlijke taalverwerking.</p>
                        <img src="img/openai.jpg" alt="OpenAI">
                    `;
                    break;
                default:
                    uitlegArticle.innerHTML = `<p>Hier komt uitleg.</p>`;
                    break;
            }
        });
    });
});
