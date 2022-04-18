import { gql } from '@apollo/client';

export const CACHE_COUNTER = gql`
  {
    counter @client
  }
`;
