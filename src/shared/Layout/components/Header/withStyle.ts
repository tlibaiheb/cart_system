import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  display: flex;
  flex-direction: row;
  height: 8vh;
  padding: 0 2%;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  justify-content: space-between;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    text-decoration: none;
    color: inherit;

    > svg {
      width: 25px;
      height: 25px;
    }
    > h6 {
      font-style: italic;
    }
  }
`;

export default Component;
