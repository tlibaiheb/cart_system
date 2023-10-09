import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;

  .filters-container {
    width: 18%;
    height: 100%;
    position: sticky;
    top: 0;
  }

  .balloons-list-container {
    width: 64%;
  }

  .sort-container {
    width: 18%;
    height: 100%;
    position: sticky;
    top: 0;
  }

  .drop-downs {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    > * {
      margin-top: 20px;
    }
  }

  @media (max-width: ${themeGet('devices.sizes.medium')}px) {
    flex-direction: column;
    align-items: center;

    .balloons-list-container {
      width: 100%;
    }
  }
`;

export default Component;
