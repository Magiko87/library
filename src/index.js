import axios from "axios";
import './stile.css';


const keyword = document.getElementById("keyword");
const submit = document.getElementById("submit");
const result = document.querySelector(".result");
const categories = document.querySelector("nav");
const categoriesList = document.querySelectorAll("nav li");
const loader = document.querySelector(".loading");

class Book {
  constructor(title, cover, author, description) {
    this.title = title;
    this.cover = cover;
    this.author = author;
    this.description = description;
  }
}

function draw(className, elToAppend, type) {
  let newEl = document.createElement(type);
  newEl.classList.add(className);
  elToAppend.append(newEl);
  return newEl;
}

async function callApi(subject) {
  result.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const response = await axios.get(
      `https://openlibrary.org/subjects/${subject}.json`
    );

    if (response.data.work_count === 0) {
      const message = draw("msg", result, "p");
      message.innerHTML =
        "Sorry! Nothing found, try to use different words...";
      loader.classList.add("hidden");
      return;
    }

    const allTheBook = await Promise.all(
      response.data.works.map(async (work) => {
        return await createObjFromData(work);
      })
    );

    loader.classList.add("hidden");
    renderBooks(allTheBook);
  } catch (error) {
    console.error(error.message);
    alert(`Sorry something goes wrong, try again: ${error.message}`);
  }
}

const getData = (e) => {
  e.preventDefault();
  const searchData = keyword.value.toLowerCase().trim().split(" ").join("_");
  callApi(searchData);
};

const categoriesData = (e) => {
  categoriesList.forEach((el) => el.classList.remove("active"));
  if (e.target === categories) {
    return;
  }
  e.target.classList.toggle("active");
  const subject = e.target.dataset.categoria;
  callApi(subject);
};

submit.addEventListener("click", getData);
categories.addEventListener("click", categoriesData);

async function createObjFromData(work) {
  const book = new Book(work.title, "", "", "");
  const res = await axios.get(`https://openlibrary.org${work.key}.json`);
  const bookInfo = res.data;

  const hasCover = bookInfo.covers && bookInfo.covers !== null;
  book.cover = hasCover
    ? `url(https://covers.openlibrary.org/b/id/${
        bookInfo.covers.filter((n) => n != -1)[0]
      }-M.jpg)`
    : `url(/assets/Cover-not-found.png)`;

  book.description =
    bookInfo.description?.value ||
    bookInfo.description ||
    `Sorry! We don't have any description about this title`;

  const hasAuthor = bookInfo.authors && bookInfo.authors !== null;
  if (hasAuthor) {
    const authorsRes = await axios.get(
      `https://openlibrary.org${bookInfo.authors[0].author.key}.json`
    );
    book.author = authorsRes.data.name;
  } else {
    book.author = "No author found";
  }
  return book;
}

function renderBook(book) {
  const cardBook = draw("card-book", result, "div");
  const title = draw("title", cardBook, "h4");
  const author = draw("author", cardBook, "h3");
  const cover = draw("book-img", cardBook, "div");
  title.innerText = book.title;
  author.innerText = book.author;
  cover.style.backgroundImage = book.cover;

  cardBook.addEventListener("click", (e) => {
    showModule(e, book);
  });
}

function renderBooks(arrBook) {
  arrBook.forEach((book) => renderBook(book));
}

function showModule(e, book) {
  const thisBook = e.target;
  const infoModule = draw("info", result, "div");
  const closeBtn = draw("close", infoModule, "button");
  const titleModule = draw("module-title", infoModule, "p");
  const textModule = draw("module-text", infoModule, "p");
  closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6.062 14.708-.77-.77L9.229 10 5.292 6.062l.77-.77L10 9.229l3.938-3.937.77.77L10.771 10l3.937 3.938-.77.77L10 10.771Z"/></svg>`;
  titleModule.innerHTML = "Description:";
  textModule.innerHTML = book.description;

  if (infoModule.scrollHeight > window.innerHeight) {
    infoModule.style.maxHeight = "80vh";
    infoModule.style.overflowY = "scroll";
  }

  closeBtn.addEventListener("click", infoModule.remove);

  document.addEventListener("click", (e) => {
    const hasClickedOutsideTheModule =
      e.target != infoModule &&
      e.target != thisBook &&
      e.target != titleModule &&
      e.target != textModule;
    if (hasClickedOutsideTheModule) {
      infoModule.remove();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      infoModule.remove();
    }
  });
}
