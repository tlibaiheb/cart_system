import { useQuery, CombinedError } from 'urql';
import { get } from 'lodash';
import { GET_BALLOON } from '@graphql/queries';

interface ReturnType {
  balloon: Balloon;
  fetching: boolean;
  error?: CombinedError;
}

const useBalloon = (id: string): ReturnType => {
  const [{ data, fetching, error }] = useQuery({
    query: GET_BALLOON,
    variables: {
      id,
    },
  });

  const balloon = get(data, 'balloon', {});

  return {
    balloon,
    fetching,
    error,
  };
};

export default useBalloon;
