import {
  ApolloClient, ApolloLink, createHttpLink, InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { IncomingHttpHeaders } from 'http';
import { useLogger } from '@/controllers/logger/logger.hooks/useLogger';

// TODO: Make it better
const getApiLink = () => 'http://localhost:4000/graphql';

export const initApolloClient = (headers?: IncomingHttpHeaders) => {
  const logger = useLogger({
    name: 'Apollo Client',
  });

  const httpLink = createHttpLink({
    uri: getApiLink(),
    credentials: 'include',
    headers,
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

  const apiLink = ApolloLink.from([
    errorLink,
    httpLink,
  ]);

  return new ApolloClient({
    link: apiLink,
    cache: new InMemoryCache(),
  });
};
