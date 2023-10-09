import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  padding: 8% 11%;

  .title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .container {
    list-style: none;
    padding: 0;

    .filter-item {
      margin-bottom: 15px;
      color: ${themeGet('colors.anthracite')};
      cursor: pointer;
    }

    .selected {
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export default Component;
