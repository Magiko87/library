import "./stile.css";

//---> Crea l'elemento footer
const footer = document.createElement("footer");
footer.textContent = "Daniele Camodeca-© Copyright";
const footerContainer = document.getElementById("footer-container");
footerContainer.appendChild(footer);

//---> Seleziono elementi
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const loading = document.querySelector(".loading");
const btnSearch = document.querySelector(".btn-primary");
const listItems = document.querySelectorAll(".list-item");
const content = document.querySelector('.modal .recipe-content');
//---> Eventi
btnClose.addEventListener("click", () => toggleModal(false));
btnSearch.addEventListener("click", search); // Esegui la ricerca quando viene cliccato il pulsante di ricerca
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
//--->Funzioe makeAPIrequest al click delle liste
// Seleziona il nodo padre che contiene tutti gli elementi .list-item
const listContainer = document.getElementById("list-container");

// Aggiungi un unico event listener al nodo padre per il click sugli elementi .list-item
listContainer.addEventListener("click", (event) => {
  // Verifica se l'elemento cliccato ha la classe .list-item
  if (event.target.classList.contains("list-item")) {
    loading.classList.remove("hidden");
    const categoria = event.target.getAttribute("data-categoria");
    makeAPIRequest(categoria);
  }
});


function toggleModal(force = null) {
  const modal = document.querySelector(".modal");
  const modalDescription = document.querySelector(".modal-description");

  if (typeof force === 'boolean') {
    // Vogliamo forzare l'aggiunta o la rimozione del modal
    modal.classList.toggle("hidden", !force); // Aggiunge o rimuove la classe 'hidden' in base al valore booleano di 'force'
  } else {
    // Se il parametro 'force' non è fornito, il comportamento predefinito è invertire lo stato del modal
    modal.classList.toggle("hidden"); 
  }

    // Se il modal è nascosto, svuota il contenuto della descrizione
    if (modal.classList.contains("hidden")) {
      modalDescription.textContent = "";
    }
}
const form = document.getElementById("search-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("form1").value;
  search(searchTerm);
});
//--->Funzione controllo modale loading e esecuzione ricerca API con il termine immesso nella barra di ricerca
function search(searchTerm) {
  loading.classList.remove("hidden");
  makeAPIRequest(searchTerm);

}
//--->Funzione che gestisce la chiesta API usando un termine specificato,genera html,e gestisce gli errori
function makeAPIRequest(searchTerm) {
  const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
      const results = data.docs;

      const resultsHTML = results
        .map((result) => {
          const title = result.title;
          const author = result.author_name ? result.author_name[0] : "Unknown Author";
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
      
      if (resultsHTML === "") {
        content.innerHTML = `<div class="empty-message">No results found.</div>`;
      } else {
        content.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
      }
      loading.classList.add("hidden");
      modal.classList.remove("hidden"); 

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
const modalDescription = document.querySelector(".modal-description");
  modalDescription.textContent = "";

//--->Funzione per la gestione delle descrizioni dei libri dall'API utilizzando la key del libro
let description = "";
function getBookDescription(bookKey) {
  const apiUrl = `https://openlibrary.org${bookKey}.json`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let description = "No description available";

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