import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 80vh;

  .image-container {
    width: 50%;
    position: relative;
    max-height: 80vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .details {
      position: absolute;
      top: 5%;
      left: 5%;
      height: 100%;

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
    }
  }

  .details-container {
    width: 50%;
    padding: 2% 4% 2% 4%;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    height: inherit;

    .back {
      background: none;
      border: none;
      outline: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      svg {
        width: 22px;
        height: 22px;
      }

      &:hover {
        background: ${themeGet('colors.primary')};
        svg {
          fill: ${themeGet('colors.white')};
        }
      }
    }

    .title {
      margin-bottom: 1rem;
      margin-top: 1rem;
      font-weight: bold;
    }

    .variant-type {
      margin-top: 3px;
      margin-left: 3px;
    }

    .section {
      margin-top: 1rem;
    }

    .add-cart {
      margin-top: auto;
    }
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    flex-direction: column;
    .image-container {
      width: 100%;
      height: 50vh;
    }
    .details-container {
      width: 100%;
      .add-cart {
        margin-top: 2rem;
      }
    }
  }
`;

export default Component;
