import { API_URL } from '../config';
import fetch from 'node-fetch';

if (!API_URL) {
  throw new Error('API_URL does not exist at .env file.');
}

export const getMovies = async (limit, minimumRating) => {
  try {
    const response = await fetch(`${API_URL}`)
    const jsonResponse = await response.json();
    return jsonResponse.data.movies;
  } catch (error) {
    console.error(error);
  }
}