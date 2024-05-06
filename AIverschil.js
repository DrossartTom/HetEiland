/*Template elementen*/
const titel = document.querySelector("#Titel")
const alinea = document.querySelector("#Tekst")

console.log(titel)

/* alle buttons voor de bots komen in deze lijst */
const chatgptbutton = document.querySelector("#chatgpt")
/* einde AI lijst */

chatgptbutton.addEventListener('click', () => {
    console.log("clicked")
    
    window.location.href = 'http://127.0.0.1:5500/HetEiland/indexAI.html';
    titel.innerText = "chatgpt";
})