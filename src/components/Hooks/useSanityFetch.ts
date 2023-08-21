import { client } from "../../client";
import { useState, useEffect } from "react";

type SanityData = any; // You can define a more specific type if needed.

function useSanityFetch(query: string): [SanityData, boolean, Error | null] {
  const [data, setData] = useState<SanityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((results: any) => {
        setData(results);
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err);
        setLoading(false);
      });
  }, [query]);

  return [data, loading, error];
}

export default useSanityFetch;
