import { apiConfig } from './apiConfig.js';

export async function fetchGenresList() {
  const url = apiConfig.genresListHttp + new URLSearchParams({ api_key: apiConfig.apiKey });
  const response = await fetch(url);
  const data = await response.json();
  return data.genres;
}

export async function fetchMoviesListByGenres(id) {
  const url = apiConfig.movieGenresHttp + new URLSearchParams({
    api_key: apiConfig.apiKey,
    with_genres: id,
    page: Math.floor(Math.random() * 3) + 1
  });
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
