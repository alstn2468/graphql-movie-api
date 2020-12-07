const minsu =  {
  name: 'minsu',
  age: 22,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => minsu,
  },
};

export default resolvers;