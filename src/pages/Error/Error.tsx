import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import withStyle from './withStyle';
import Button from '@components/atoms/Button';

interface Props {
  className?: string;
}

const Error: React.FunctionComponent<Props> = ({ className }) => {
  const history = useHistory();
  return (
    <div className={className}>
      <h1>Something went wrong ...</h1>
      <Link to='/' type='button'>
        <Button
          content='GO BACK'
          width='12rem'
          className='add-cart'
          onClick={() => history.goBack}
        />
      </Link>
    </div>
  );
};

export default withStyle(Error);
