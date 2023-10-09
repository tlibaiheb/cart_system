import { gql } from '@urql/core';
import { Balloon } from '@graphql/fragments';

const getBalloon = gql`
  query balloon($id: String!) {
    balloon(id: $id) {
      ...Balloon
    }
  }
  ${Balloon}
`;

export default getBalloon;
