import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  height,
  HeightProps,
  BackgroundProps,
  background,
  width,
  WidthProps,
} from 'styled-system';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

type Props = ContainerProps &
  HeightProps &
  ColorProps &
  BackgroundProps &
  WidthProps &
  BorderProps & {
    content?: ReactNode;
  };

const Container = styled.div<ContainerProps>`
  ${height};
  ${width};
  ${background};
  ${color};
  ${border};
  font-weight: bold;
  border-radius: 50%;
  padding: 1%;
`;

const Badge: React.FC<Props> = ({ content, ...props }) => {
  return <Container {...props}>{content}</Container>;
};

Badge.defaultProps = {
  color: 'black',
  background: 'white',
  height: '48px',
  width: '48px',
  border: 'solid 1px rgb(229, 231, 235)',
};

export default Badge;
