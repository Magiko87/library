import "./stile.css";

// Crea l'elemento footer
const footer = document.createElement("footer");
footer.textContent = "Daniele Camodeca-© Copyright";

// Ottieni il riferimento al contenitore dell'immagine e del footer
const imageContainer = document.getElementById("image-container");
const footerContainer = document.getElementById("footer-container");

// Aggiungi l'immagine e il footer ai rispettivi contenitori
footerContainer.appendChild(footer);

// Seleziono elementi
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const btnSearch = document.querySelector(".btn-primary");
const loading = document.querySelector(".loading");
const modalContent = document.querySelector(".modal .recipe-content");
const listItems = document.querySelectorAll(".list-item");

// Eventi
btnClose.addEventListener("click", close);
btnSearch.addEventListener("click", search);
window.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    search();
  }
});

modal.addEventListener("click", function (event) {
  const resultElement = event.target.closest(".result");
  const coverElement = event.target.closest("img");

  if (resultElement) {
    const bookKey = resultElement.getAttribute("data-key");
    getBookDescription(bookKey);
  } else if (coverElement) {
    const bookKey = coverElement.getAttribute("data-key");
    getBookDescription(bookKey);
  }
});

// Function
function close() {
  modal.classList.add("hidden");
}

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    loading.classList.remove("hidden");
    const categoria = item.getAttribute("data-categoria");
    makeAPIRequest(categoria);
    modal.classList.remove("hidden");

    fetch(`https://openlibrary.org/subjects/${categoria}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        loading.classList.add("hidden");
      })
      .catch((error) => {
        console.error(error);
        loading.classList.add("hidden");
      });
  });
});

function search() {
  loading.classList.remove("hidden");
  const searchTerm = document.getElementById("form1").value;

  setTimeout(function () {
    loading.classList.add("hidden");
    makeAPIRequest(searchTerm);
    modalContent.classList.remove("hidden");
    modalDescription.classList.remove("hidden");
  }, 3000);
}

function makeAPIRequest(searchTerm) {
  const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const results = data.docs;

      const resultsHTML = results
        .map((result) => {
          const title = result.title;
          const author = result.author_name
            ? result.author_name[0]
            : "Autore sconosciuto";
          const coverUrl = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;
          const bookKey = result.key;

          return `<div class="result" data-key="${bookKey}">
          <h3>${title}</h3>
          <p class="author">Autore: ${author}</p>
          <div class="cover-container">
            <img src="${coverUrl}" alt="Copertina del libro" data-key="${bookKey}">
          </div>
        </div>`;
        

        })
        .join("");

      const content = document.querySelector(".modal .recipe-content");
      content.innerHTML = `<div class="results-container">${resultsHTML}</div>`;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getBookDescription(bookKey) {
  const apiUrl = `https://openlibrary.org${bookKey}.json`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const description = data.description
        ? data.description.value
        : "Nessuna descrizione disponibile";
      const modal = document.querySelector(".modal");
      modal.classList.remove("hidden");
      const modalDescription = document.querySelector(".modal .recipe-content .description");

if (modalDescription) {
  modalDescription.textContent = description;
} else {
  console.error("Element with class 'description' not found.");
}

    })
    .catch((error) => {
      console.error(error);
    });
}

