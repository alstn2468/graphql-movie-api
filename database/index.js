import fetch from 'node-fetch';

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error('API_URL does not exist at .env file.');
}

const getMovies = (limit, minimumRating) => {
  fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.data.movies)
    .catch((error) => console.log(error));
}