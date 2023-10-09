import React from 'react';
import withStyle from './withStyle';

interface Props {
  className?: string;
}

const PageLoading: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className='image-container'>
        <div className='image' />
      </div>
      <div className='details-container'>
        <div className='h2' />
        <div className='h3' />
        <div className='h3' />
        <div className='h4' />
      </div>
    </div>
  );
};

export default withStyle(PageLoading);
