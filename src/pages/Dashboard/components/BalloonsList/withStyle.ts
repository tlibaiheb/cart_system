import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  min-height: 80vh;
  justify-content: center;
  margin-top: 2rem;

  .balloons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    flex: 1 0 calc(31% - 10px);
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    max-width: 400px;
    min-height: 300px;
    box-sizing: border-box;
  }

  .see-more {
    width: 100%;
    text-align: center;

    > button {
      margin: 2rem 0;
    }
  }

  @media (max-width: ${themeGet('devices.sizes.large')}px) {
    width: 100%;
    .balloons-container {
      .item {
        flex: 1 0 calc(49% - 10px);
      }
    }
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    width: 100%;
    .balloons-container {
      .item {
        flex: 1 0 100%;
      }
    }
  }

  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export default Component;
