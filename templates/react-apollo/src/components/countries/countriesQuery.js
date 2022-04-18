import { gql } from '@apollo/client';

export const QUERY_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
    }
  }
`;
