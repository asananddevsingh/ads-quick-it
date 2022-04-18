import { useQuery } from '@apollo/client';
import { counterVar, defaultCount } from '../../apolloClient';
import { CACHE_COUNTER } from './counterQuery';

export const Counter = () => {
  const { loading, error, data } = useQuery(CACHE_COUNTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h4>Apollo Cache - Count: {data.counter}</h4>
      <button onClick={() => counterVar(data.counter + 1)}>Increment</button>
      <button onClick={() => counterVar(data.counter - 1)}>Decrement</button>
      <button onClick={() => counterVar(defaultCount)}>Reset</button>
    </>
  );
};
