import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  .cart {
    position: relative;
    border: none;
    outline: none;
    background: none;

    > svg {
      width: 30px;
      height: 30px;
    }

    .items {
      background-color: ${themeGet('colors.primary')};
      border-radius: 50%;
      position: absolute;
      top: 14px;
      left: -5px;
      color: ${themeGet('colors.white')};
      width: 20px;
      height: 20px;
      text-align: -webkit-center;
    }
  }
`;

export default Component;
