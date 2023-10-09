/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, CombinedError } from 'urql';
import { get } from 'lodash';
import { GET_BALLOONS } from '@graphql/queries';
import usePagination from '@pages/Dashboard/components/BalloonsList/usePagination';
import { useEffect } from 'react';

interface BalloonsHook {
  balloons: Balloon[];
  fetching: boolean;
  error?: CombinedError;
  hasNextPage: boolean;
  nextPage: () => void;
}

const useBalloons = (filters: Filters): BalloonsHook => {
  const { onResponse, nextPage, reset, paginationVars } = usePagination();
  const [{ data, fetching, error }] = useQuery({
    query: GET_BALLOONS,
    variables: {
      ...paginationVars,
      filter: {
        ...(filters.variant ? { variant: filters.variant } : {}),
        ...(filters.color ? { color: filters.color } : {}),
      },
      ...(filters.sort ? { sort: filters.sort } : {}),
    },
  });

  useEffect(() => {
    reset();
  }, [filters]);

  useEffect(() => {
    data?.balloons && onResponse(data?.balloons?.pageInfo);
  }, [data?.balloons]);

  const balloonsEdges = get(data, 'balloons.edges', []);
  const hasNextPage = get(data, 'balloons.pageInfo.hasNextPage', false);

  const balloons = balloonsEdges.map((balloonEdge: BalloonEdge) => balloonEdge.node);

  return {
    balloons,
    fetching,
    error,
    hasNextPage,
    nextPage,
  };
};

export default useBalloons;
