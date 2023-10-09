import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  display: flex;
  flex-direction: row;
  height: 12vh;
  padding: 0 4%;
  align-items: center;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.08);

  font-weight: lighter;
`;

export default Component;
