import { gql } from '@urql/core';
import { Balloon, PageInfoFragment } from '@graphql/fragments';

const getBalloons = gql`
  query balloons($filter: FilterInput, $sort: SortInput, $after: ID, $before: ID) {
    balloons(filter: $filter, sort: $sort, after: $after, before: $before) {
      edges {
        node {
          ...Balloon
        }
        cursor
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${Balloon}
  ${PageInfoFragment}
`;

export default getBalloons;
