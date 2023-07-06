import "./stile.css";

// Crea l'elemento footer
const footer = document.createElement("footer");
footer.textContent = "Daniele Camodeca-© Copyright";

// Ottieni il riferimento al contenitore dell'immagine e del footer
const footerContainer = document.getElementById("footer-container");

// Aggiungi l'immagine e il footer ai rispettivi contenitori
footerContainer.appendChild(footer);

// Seleziono elementi
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const loading = document.querySelector(".loading");
const btnSearch = document.querySelector(".btn-primary");
const listItems = document.querySelectorAll(".list-item");
const content = document.querySelector('.modal .recipe-content');
// Eventi
btnClose.addEventListener("click", close);
btnSearch.addEventListener("click", search);
window.addEventListener("keypress", function(event) {
  // Verifica se il tasto premuto è il tasto Invio (codice 13)
  if (event.keyCode === 13) {
    search();
  }
});
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    loading.classList.remove("hidden");
    const categoria = item.getAttribute("data-categoria");
    makeAPIRequest(categoria);
  });
});

function close() {
  modal.classList.add("hidden");
  const modalDescription = document.querySelector(".modal-description");
  description = "";
  modalDescription.textContent = description;
}
function search() {
  loading.classList.remove("hidden");
  const searchTerm = document.getElementById("form1").value;

  setTimeout(function() {
    loading.classList.add("hidden");
    makeAPIRequest(searchTerm);
    content.classList.remove("hidden");
  }, 3000);
}
function makeAPIRequest(searchTerm) {
  const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
  loading.classList.remove("hidden");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
      const results = data.docs;

      const resultsHTML = results
        .map((result) => {
          const title = result.title;
          const author = result.author_name ? result.author_name[0] : "Autore sconosciuto";
          const coverUrl = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;
          const bookKey = result.key;
          const coverImage = result.cover_i ? `<img src="${coverUrl}" alt="Copertina del libro" data-key="${bookKey}">` : `<img src="https://picsum.photos/seed/picsum/200/300" data-key="${bookKey}">`;


          return `<div class="result" data-key="${bookKey}">
                  <h3>${title}</h3>
                  <p class="author">Autore: ${author}</p>
                  <div class="cover-container">
                    ${coverImage}
                  </div>
                 </div>`;
        })
        .join("");

      const content = document.querySelector(".modal .recipe-content");
      content.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
      if (resultsHTML === "") {
        content.innerHTML = `<div class="empty-message">Nessun risultato trovato.</div>`;
      } else {
        content.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
      }
      loading.classList.add("hidden");
      modal.classList.remove("hidden"); // Mostra la modale con i risultati

      const coverImages = document.querySelectorAll(".modal .recipe-content .cover-container img");
      coverImages.forEach((coverImage) => {
        coverImage.addEventListener("click", () => {
          const bookKey = coverImage.getAttribute("data-key");
          getBookDescription(bookKey);
        });
      });
    })
    .catch((error) => {
      console.error(error);
      loading.classList.add("hidden");
    });
}
let description = "";
function getBookDescription(bookKey) {
  const apiUrl = `https://openlibrary.org${bookKey}.json`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let description = "Nessuna descrizione disponibile";

      if (data.description) {
        if (typeof data.description === "object") {
          description = data.description.value || description;
        } else if (typeof data.description === "string") {
          description = data.description || description;
        }
      }

      modal.classList.remove("hidden");

      const modalDescription = document.querySelector(".modal-description");
      modalDescription.textContent = description;
    })
    .catch((error) => {
      console.error(error);
    });
}