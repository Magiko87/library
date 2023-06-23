import bookImage from './componenti/logo/book.jpeg';
import './componenti/logo/stile.css';

// Crea l'elemento immagine
const image = new Image();
image.src = bookImage;
image.id = 'dynamic-image';
image.className = 'centered-image'; // Aggiungi una classe per centrare l'immagine con CSS
image.style.marginBottom = '20px'; // Aggiungi 20px di spazio sotto l'immagine

// Crea l'elemento footer
const footer = document.createElement('footer');
footer.textContent = 'Daniele Camodeca-© Copyright';

// Ottieni il riferimento al contenitore dell'immagine e del footer
const imageContainer = document.getElementById('image-container');
const footerContainer = document.getElementById('footer-container');

// Aggiungi l'immagine e il footer ai rispettivi contenitori
imageContainer.appendChild(image);
footerContainer.appendChild(footer);


//--->Seleziono elementi
const btnClose = document.querySelector(".btn-close")
const modal = document.querySelector('.modal');
const btnSearch = document.querySelector(".btn-primary");
const loading = document.querySelector(".loading");
const content = document.querySelector('.modal');
const valueSearch = document.getElementById("form1");

//--->Eventi
btnClose.addEventListener("click",close);
btnSearch.addEventListener("click",search);



//--->Function
function close(){
    modal.classList.add('hidden');
    
};

function search(){
    loading.classList.remove("hidden");
    setTimeout(function() {
        loading.classList.add("hidden");
        content.classList.remove("hidden");
      }, 3000);

}