import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloProvider,
} from '@apollo/client';
import { initApolloClient } from '../controllers/apollo/apollo.client';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = initApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
