import { ApolloClient, HttpLink } from '@apollo/client';
import { cache } from './cache';

const link = new HttpLink({ uri: 'https://countries.trevorblades.com/graphql' });
export const client = new ApolloClient({
  cache,
  link,
});
