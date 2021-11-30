import {
  ApolloClient, ApolloLink, createHttpLink, InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useLogger } from '@/controllers/logger/logger.hooks/useLogger';

// TODO: Make it better
const getApiLink = () => 'http://localhost:4000/graphql';

export const initApolloClient = () => {
  const logger = useLogger({
    name: 'Apollo Client',
  });

  const httpLink = createHttpLink({
    uri: getApiLink(),
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, path }) => {
        logger.error('[GRAPHQL ERROR]', {
          message,
          path,
        });
      });
    }

    if (networkError) {
      logger.error('[NETWORK ERROR]', {
        Message: networkError.message,
        Stack: networkError.stack,
      });
    }
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const apiLink = ApolloLink.from([
    errorLink,
    authLink,
    httpLink,
  ]);

  return new ApolloClient({
    link: apiLink,
    cache: new InMemoryCache(),
  });
};
