class Storage {
  static deleteAllFilmsFromStorage() {
    let films = this.getFilmsFromStorage();
    films = [];
    localStorage.setItem("films", JSON.stringify(films));
  }

  static deleteFilmFromStorage(filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (item, index) {
      if (item.title === filmTitle) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();

    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
  }
}
