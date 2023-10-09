import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: ${themeGet('colors.secondary')};
  display: flex;
  flex-direction: column;
  padding: 0 2%;
  height: 100vh;
  width: 26vw;

  .drawer-header {
    display: flex;
    height: 12%;
    flex-direction: column;
    width: 100%;
    border-bottom: solid 1px ${themeGet('colors.lightGray')};

    &-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      height: 65%;

      .close-icon-btn {
        border: none;
        outline: none;
        background: none;
        > svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .my-cart {
      font-weight: bold;
    }
  }

  .drawer-content {
    height: 68%;
    overflow-y: auto;
    border-bottom: solid 1px ${themeGet('colors.lightGray')};
  }
  .empty {
    display: flex;
    align-items: center;
    place-content: center;
  }

  .drawer-footer {
    display: flex;
    flex-direction: column;
    height: 19%;
    justify-content: space-between;

    .total-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > h3 {
        margin-top: 6%;
        font-weight: bold;
      }
    }
  }

  @media (max-width: ${themeGet('devices.sizes.large')}px) {
    width: 58vw;
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    width: 70vw;
  }

  @media (max-width: ${themeGet('devices.sizes.small')}px) {
    width: 88vw;
  }
`;

export default Component;
