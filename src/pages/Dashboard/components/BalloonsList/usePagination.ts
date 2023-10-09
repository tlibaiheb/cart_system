import { useCallback, useRef, useState } from 'react';

interface Pagination {
  paginationVars: Object;
  onResponse: (pageInfo: PageInfo) => void;
  nextPage: () => void;
  previousPage: () => void;
  reset: () => void;
}

const usePagination = (): Pagination => {
  const startCursor = useRef(undefined);
  const endCursor = useRef(undefined);
  const [paginationVars, setPaginationVars] = useState<Object>({});

  const reset = useCallback(() => {
    setPaginationVars({});
  }, []);

  const onResponse = useCallback(pageInfo => {
    startCursor.current = pageInfo.startCursor;
    endCursor.current = pageInfo.endCursor;
  }, []);

  const nextPage = useCallback(() => setPaginationVars({ after: endCursor.current }), []);
  const previousPage = useCallback(() => setPaginationVars({ before: startCursor.current }), []);
  return { paginationVars, onResponse, nextPage, previousPage, reset };
};

export default usePagination;
