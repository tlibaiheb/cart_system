import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  color: initial;
  text-decoration: none;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover .name,
  &:hover .price {
    border: solid 10px ${themeGet('colors.primary')};
    background-color: ${themeGet('colors.primary')};
    color: ${themeGet('colors.white')};
  }

  &:hover .cart {
    background-color: ${themeGet('colors.primary')};
    svg {
      fill: ${themeGet('colors.white')};
    }
  }

  .details {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .main-details {
      max-width: 70%;
    }
  }

  .cart {
    background-color: ${themeGet('colors.white')};
    outline: none;
    height: 43px;
    border: none;
    padding: 6px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .name,
  .price {
    border: solid 10px ${themeGet('colors.white')};
    background-color: ${themeGet('colors.white')};
    width: fit-content;
    text-transform: uppercase;
  }
  .name {
    font-weight: bold;
  }

  .selected {
    background-color: ${themeGet('colors.primary')};
    svg {
      fill: ${themeGet('colors.white')};
    }
  }

  .name-selected {
    color: ${themeGet('colors.primary')};
  }
`;

export default Component;
