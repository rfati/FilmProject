const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.querySelectorAll("#clear-films")[0];

//Tüm Evenları Oluşturma

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });

  cardBody.addEventListener("click", deleteFilm);
  clearFilms.addEventListener("click", deleteAllFilms);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    UI.showAlert("warning", "Boş alan bırakmayınız");
  } else {
    const newFilm = new Film(title, director, url);

    UI.addFilmToUI(newFilm); // Arayüze film ekleme
    UI.clearInputs(titleElement, directorElement, urlElement);
    Storage.addFilmToStorage(newFilm);

    UI.showAlert("success", "Film başarıyla eklendi");
  }

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.showAlert("success", "Silme İşlemi Başarılı");
  }
}

function deleteAllFilms() {
  let films = Storage.getFilmsFromStorage();
  if (films.length >= 1) {
    UI.deleteAllFilmsFromUI();
    Storage.deleteAllFilmsFromStorage();
    UI.showAlert("success", "Tüm Filmler Başarıyla Silindi");
  } else {
    UI.showAlert("warning", "Silecenek Film Yok");
  }
}
