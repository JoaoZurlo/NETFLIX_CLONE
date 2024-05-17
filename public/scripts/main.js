import { fetchGenresList, fetchMoviesListByGenres } from './apiService.js';
import { makeCategoryElement } from './domUtils.js';

const main = document.querySelector(".main");

async function initializeApp() {
  try {
    const genres = await fetchGenresList();
    console.log('Genres fetched:', genres);
    for (const genre of genres) {
      const movies = await fetchMoviesListByGenres(genre.id);
      console.log(`Movies fetched for genre ${genre.name}:`, movies);
      makeCategoryElement(main, genre.name, movies);
    }
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();
