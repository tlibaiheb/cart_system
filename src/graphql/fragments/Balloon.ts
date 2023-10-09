import { gql } from '@urql/core';

const Balloon = gql`
  fragment Balloon on Balloon {
    id
    name
    imageUrl
    description
    color
    variant
    price
    availableSince
  }
`;

export default Balloon;
