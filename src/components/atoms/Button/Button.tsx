import React from 'react';
import {
  border,
  fontSize,
  BorderProps,
  FontSizeProps,
  color,
  ColorProps,
  height,
  HeightProps,
  BackgroundProps,
  background,
  width,
  WidthProps,
} from 'styled-system';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

interface ContainerProps extends React.HTMLAttributes<HTMLButtonElement> {
  wide?: boolean;
  hoverColor?: string;
  hoverBackgroundColor?: string;
}

type Props = ContainerProps &
  HeightProps &
  ColorProps &
  BackgroundProps &
  FontSizeProps &
  WidthProps &
  BorderProps & {
    content: string;
  };

const Container = styled.button<ContainerProps>`
  width: ${props => props.wide && '100%'};
  ${height};
  ${width};
  ${background};
  ${color};
  ${border};
  font-weight: bold;
  ${fontSize};

  &:hover {
    background-color: ${props => themeGet(`colors.${props.hoverBackgroundColor}`)};
    color: ${props => themeGet(`colors.${props.hoverColor}`)};
    border: solid 1px ${props => themeGet(`colors.${props.hoverColor}`)};
  }
`;

const Button: React.FC<Props> = ({ content, ...props }) => {
  return (
    <Container type='button' {...props}>
      {content}
    </Container>
  );
};

Button.defaultProps = {
  color: 'white',
  wide: false,
  hoverBackgroundColor: 'white',
  hoverColor: 'black',
  background: 'black',
  height: '50px',
  fontSize: '1rem',
  border: 'none',
};

export default Button;
