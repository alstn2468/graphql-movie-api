import { people, getById } from '../database';

const resolvers = {
  Query: {
    person: () => people,
    people: (id) => getById(id),
  },
};

export default resolvers;