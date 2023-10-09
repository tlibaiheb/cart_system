import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  devices: {
    sizes: {
      small: 320,
      medium: 768,
      large: 1024,
      xlarge: 1440,
    },
  },
  colors: {
    white: '#FFFFFF',
    blue: '#1057fb',
    black: '#000',
    darkBlue: '#1d5ebd',
    lightGray: '#dadada',
    anthracite: '#7d7d7d',
    primary: '#25003c',
    secondary: '#f1f3f5',
    cardShadow: 'rgba(0, 0, 0, 0.1) 0 0 10px 0',
  },
};

export default myTheme;
