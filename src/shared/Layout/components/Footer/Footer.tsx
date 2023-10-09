import React from 'react';
import withStyle from './withStyle';

interface Props {
  className?: string;
}

const Footer: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h6>© {new Date().getFullYear()} Balloons Inc™. ALL RIGHTS RESERVED.</h6>
    </div>
  );
};

export default withStyle(Footer);
