import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import resolvers from './graphql/resolvers'

dotenv.config({ path: `/env/${process.env.NODE_ENV}` });

const options = {
  port: process.env.PORT || 4000,
  endpoint: process.env.ENDPOINT || '/graphql',
  playground: process.env.PLAYGROUND || false,
};

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start(
  options, 
  () => {
    console.log('GraphQL Server Running on localhost:4000');
    console.log(`Running options :${JSON.stringify(options)}`);
  },
);