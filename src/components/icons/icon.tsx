import React from 'react';
import IconLogo from './logo';
import BalloonLogo from './balloon';
import CloseCart from './close';
import Buy from './buy';
import Delete from './delete';
import Arrow from './arrow';
import LeftArrow from './left-arrow';
import Star from './star';
import Heart from './heart';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
  switch (name) {
    case 'Logo':
      return <IconLogo />;
    case 'Balloon':
      return <BalloonLogo />;
    case 'Close':
      return <CloseCart />;
    case 'Buy':
      return <Buy />;
    case 'Delete':
      return <Delete />;
    case 'Arrow':
      return <Arrow />;
    case 'LeftArrow':
      return <LeftArrow />;
    case 'Star':
      return <Star />;
    case 'Heart':
      return <Heart />;

    default:
      return <IconLogo />;
  }
};

export default Icon;
