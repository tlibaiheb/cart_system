import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Component = (component: React.ComponentProps<any>): StyledComponent<any, any> => styled(
  component,
)`
  box-shadow: ${themeGet('colors.cardShadow')};
  height: 100%;

  .content {
    padding: 20px 30px;
  }

  .image,
  .h2,
  .h4,
  .h3 {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 120px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .h2 {
    height: 20px;
  }

  .h3 {
    margin-top: 15px;
    height: 10px;
    width: 60%;
  }

  .h4 {
    margin-top: 25px;
    height: 10px;
    width: 80%;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export default Component;
