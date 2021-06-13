import { useState, useEffect } from "react";
import useIsMounted from "./IsMounted";

function useFetch(fetchFn, fetchOnQ = false, withoutLoadingOnMount = false) {
  const setStateIfMounted = useIsMounted();
  const [shouldFetch, setShouldFetch] = useState(!fetchOnQ);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!withoutLoadingOnMount && !fetchOnQ);

  useEffect(() => {
    async function asyncFetch() {
      if (shouldFetch) {
        try {
          setLoading(true);
          const response = await fetchFn();
          if (response.data) {
            setStateIfMounted(setData, response.data);
          }
        } catch (e) {
        } finally {
          setStateIfMounted(setLoading, false);
          setStateIfMounted(setShouldFetch, false);
        }
      }
    }
    asyncFetch();
  }, [shouldFetch]); // eslint-disable-line react-hooks/exhaustive-deps

  return [data, loading, setShouldFetch.bind(null, true), setData];
}

export default useFetch;
