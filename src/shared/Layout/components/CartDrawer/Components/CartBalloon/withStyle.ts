import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  min-height: 120px;
  margin-top: 10%;

  .horizontal-container {
    display: flex;
    flex-direction: row;

    img {
      width: 18%;
    }

    .details {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      width: 70%;
      padding-left: 5%;

      a {
        text-decoration: none;
        color: inherit;
      }

      .name {
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
      .color {
        margin-top: 3%;
        color: ${themeGet('colors.anthracite')};
      }

      .quantities {
        display: flex;
        flex-direction: row;
        margin-top: auto;
        align-items: center;

        button {
          border: none;
          background: none;
          outline: none;
          font-size: 1.6rem;
          color: ${themeGet('colors.anthracite')};
          border-radius: 50%;
          width: 30px;
          height: 30px;

          &:hover {
            color: ${themeGet('colors.white')};
            background: ${themeGet('colors.primary')};
          }
        }
        > * {
          margin-right: 5px;
        }
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;

      .remove-icon {
        border-radius: 50%;
        border: none;
        background: none;
        width: 40px;
        height: 40px;
        outline: none;

        svg {
          width: 24px;
          height: 24px;
        }
        &:hover {
          background-color: ${themeGet('colors.primary')};
          svg {
            fill: ${themeGet('colors.white')};
          }
        }
      }
    }
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    .horizontal-container {
      img {
        width: 25%;
      }
    }

    .details {
      width: 63%;
    }
  }
`;

export default Component;
