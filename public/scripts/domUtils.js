import { apiConfig } from './apiConfig.js';
import { setupScrolling } from './scroll.js';

export function makeCategoryElement(main, category, data) {
  const categoryHTML = `
    <div class="movie-list">
      <button class="pre-btn">
        <img src="images/prev.png" alt="previous button">
      </button>
      <h1 class="movie-category">${category.replace("_", " ")}</h1>
      <div class="movie-container" id="${category.replace(" ", "_")}"></div>
      <button class="next-btn">
        <img src="images/next.png" alt="next button">
      </button>
    </div>
  `;
  main.innerHTML += categoryHTML;
  makeCards(category, data);
}

export function makeCards(category, data) {
  const movieContainer = document.getElementById(category.replace(" ", "_"));

  data.forEach((item, index) => {
    if (!item.backdrop_path) {
      item.backdrop_path = item.poster_path;
      if (!item.backdrop_path) {
        return;
      }
    }

    const movieHTML = `
      <div class="movie">
        <img src="${apiConfig.imgUrl}${item.backdrop_path}" alt="poster">
        <p class="movie-title">${item.title}</p>
      </div>
    `;
    movieContainer.innerHTML += movieHTML;

    if (index === data.length - 1) {
      setTimeout(() => {
        setupScrolling();
      }, 100);
    }
  });
}
