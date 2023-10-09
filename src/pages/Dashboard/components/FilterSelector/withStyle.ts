import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  width: 100%;
  .dropdown-menu-title {
    color: ${themeGet('colors.anthracite')};
    background-color: ${themeGet('colors.white')};
    border: solid 1px ${themeGet('colors.lightGray')};
    text-transform: capitalize;
    outline: none;
    height: 50px;
    width: 100%;

    > svg {
      fill: ${themeGet('colors.anthracite')};
      margin-left: 5px;
      width: 9px;
      height: 9px;
    }
  }
  .--opened {
    > svg {
      transform: rotate(180deg);
      transition: transform 0.5s;
    }
  }
`;

export default Component;
