import { getMovies, getById } from '../database';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
};

export default resolvers;