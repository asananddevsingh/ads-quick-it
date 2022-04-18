import { useQuery } from '@apollo/client';
import { QUERY_COUNTRIES } from './countriesQuery';

export const Countries = () => {
  const { loading, error, data } = useQuery(QUERY_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h4>Apollo Query - List of Countries: </h4>
      {data.countries.map(({ code, name, emoji }) => (
        <div key={code}>
          <span>
            {name}: {emoji}
          </span>
        </div>
      ))}
    </>
  );
};
