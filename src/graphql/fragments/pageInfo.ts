import { gql } from '@urql/core';

const PAGE_INFO_FRAGMENT = gql`
  fragment PageInfoFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`;

export default PAGE_INFO_FRAGMENT;
