class UI {
  static deleteAllFilmsFromUI() {
    const films = document.querySelectorAll("#films");
    films.forEach(function (film) {
      film.remove();
    });
  }

  static deleteFilmFromUI(target) {
    target.parentElement.parentElement.remove();
  }

  static addFilmToUI(newfilm) {
    const filmList = document.querySelector("#films");

    filmList.innerHTML += `
  <tr>
      <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newfilm.title}</td>
      <td>${newfilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>   
  `;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  static showAlert(alertType, message) {
    const cardBody = document.querySelectorAll(".card-body")[0];
    const div = document.createElement("div");
    div.className = `alert alert-${alertType}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2500);
  }

  static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
      UI.addFilmToUI(film);
    });
  }
}
