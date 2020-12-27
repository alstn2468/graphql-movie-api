import { API_URL } from '../config';
import fetch from 'node-fetch';

if (!API_URL) {
  throw new Error('API_URL does not exist at .env file.');
}

export const getMovies = async (limit, rating) => {
  try {
    let params = '';
    if (limit > 0) {
      params += `?limit=${limit}`;
    }
    if (rating > 0) {
      params += `&minimum_rating=${rating}`;
    }
    const response = await fetch(API_URL + params);
    const jsonResponse = await response.json();
    return jsonResponse.data.movies;
  } catch (error) {
    console.error(error);
  }
}