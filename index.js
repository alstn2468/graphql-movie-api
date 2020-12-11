import { GraphQLServer } from 'graphql-yoga';
import { serverOptions } from './config';
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start(
  serverOptions,
  () => {
    console.log('GraphQL Server Running on localhost:4000');
    console.log(`Running options :${JSON.stringify(serverOptions)}`);
  },
);