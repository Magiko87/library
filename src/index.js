import "./stile.css";
// Crea l'elemento footer
const footer = document.createElement("footer");
footer.textContent = "Daniele Camodeca-© Copyright";

// Ottieni il riferimento al contenitore dell'immagine e del footer
const imageContainer = document.getElementById("image-container");
const footerContainer = document.getElementById("footer-container");

// Aggiungi l'immagine e il footer ai rispettivi contenitori

footerContainer.appendChild(footer);

//--->Seleziono elementi
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const btnSearch = document.querySelector(".btn-primary");
const loading = document.querySelector(".loading");
const content = document.querySelector(".modal");
const valueSearch = document.getElementById("form1").value;
const listItems = document.querySelectorAll(".list-item");
//--->Eventi
btnClose.addEventListener("click", close);
btnSearch.addEventListener("click", search);
window.addEventListener("keypress", function (event) {
  // Verifica se il tasto premuto è il tasto Invio (codice 13)
  if (event.keyCode === 13) {
    search();
  }
});

//--->Function
function close() {
  modal.classList.add("hidden");
}
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Ottieni la categoria dalla lista cliccata
    const categoria = item.getAttribute("data-categoria");

    // Esegui la chiamata API
    fetch(`https://openlibrary.org/subjects/${categoria}.json`)
      .then((response) => response.json())
      .then((data) => {
        // Gestisci i dati della risposta API qui
        console.log(data);
      })
      .catch((error) => {
        // Gestisci eventuali errori durante la chiamata API
        console.error(error);
      });
  });
});
function search() {
  loading.classList.remove("hidden");
  const searchTerm = document.getElementById("form1").value;

  setTimeout(function () {
    loading.classList.add("hidden");
    makeAPIRequest(searchTerm);
    content.classList.remove("hidden");
  }, 3000);
}

function makeAPIRequest(searchTerm) {
  const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Elabora i dati ottenuti dalla risposta
      const results = data.docs; // Esempio: ottieni la lista dei risultati

      // Crea il markup HTML per i risultati
      const resultsHTML = results
        .map((result) => {
          const title = result.title;
          const author = result.author_name
            ? result.author_name[0]
            : "Autore sconosciuto";

          return `<div class="result">
                    <h3>${title}</h3>
                    <p>Autore: ${author}</p>
                  </div>`;
        })
        .join("");

      // Aggiorna il contenuto con i risultati
      const content = document.querySelector(".recipe-content");
      content.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
    })
    .catch((error) => {
      console.error(error);
      // Gestisci eventuali errori
    });
}
