import { people, getById } from '../database';

const resolvers = {
  Query: {
    person: () => people,
    people: (_, { id }) => getById(id),
  },
};

export default resolvers;