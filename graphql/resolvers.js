import { getMovies } from '../database';

const resolvers = {
  Query: {
    movies: () => getMovies(),
   },
};

export default resolvers;