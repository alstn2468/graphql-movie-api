export const people =  [
  {
    id: "0",
    name: 'minsu',
    age: 22,
    gender: 'male',
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Japan Guy",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "moondaddi",
    age: 18,
    gender: "male"
  },
  {
    id: "6",
    name: "flynn",
    age: 18,
    gender: "male"
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople.length !== 0 ? filteredPeople[0] : null;
};