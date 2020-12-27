import { getMovies } from '../database';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
   },
};

export default resolvers;