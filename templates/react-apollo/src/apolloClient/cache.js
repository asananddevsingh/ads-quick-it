import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        counter: {
          read: () => {
            return counterVar();
          },
        },
      },
    },
  },
});

export const defaultCount = 0;
export const counterVar = makeVar(defaultCount);
