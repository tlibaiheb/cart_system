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

  .image,
  .h2,
  .h4,
  .h3 {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image-container {
    width: 50%;
    position: relative;
    max-height: 80vh;

    .image {
      height: 100%;
      width: 100%;
    }
  }

  .details-container {
    width: 50%;
    padding: 2% 4% 2% 4%;
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: center;

    .h2 {
      height: 20px;
    }

    .h3 {
      margin-top: 25px;
      height: 10px;
      width: 60%;
    }

    .h4 {
      margin-top: 35px;
      height: 10px;
      width: 80%;
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
      margin-top: 10%;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export default Component;
