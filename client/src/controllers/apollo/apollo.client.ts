import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

// TODO: Make it better
const getApiLink = () => 'http://localhost:3000/graphql';

export const initApolloClient = () => {
  const client = new ApolloClient({
    uri: getApiLink(),
    cache: new InMemoryCache(),
  });

  return client;
};
