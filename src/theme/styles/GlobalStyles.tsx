import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import reset from './reset';

const globalStyles = createGlobalStyle`
  ${reset}
  
  h1 {
    font-size: 2rem;
    font-weight:bold;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: .9rem;
  }

  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }
  
  #root {
    position: relative;
    background-color: ${themeGet('colors.white')};
  }
`;

export default memo(globalStyles);
