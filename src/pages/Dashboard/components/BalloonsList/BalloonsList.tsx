import React, { useContext } from 'react';
import withStyle from './withStyle';
import useBalloons from '@pages/Dashboard/components/BalloonsList/useBalloons';
import BalloonCard from '@pages/Dashboard/components/BalloonsList/components/BalloonCard';
import { Context } from '@pages/Dashboard/components/FiltersContext/FiltersContext';
import CardLoading from '@components/molecules/CardLoading';
import Button from '@components/atoms/Button';

interface Props {
  className?: string;
}

const BalloonsList: React.FunctionComponent<Props> = ({ className }) => {
  const { filters } = useContext(Context);
  const { balloons, fetching, error, hasNextPage, nextPage } = useBalloons(filters);

  if (error) {
    return (
      <div className={className}>
        <h1>Something Went Wrong ...</h1>
      </div>
    );
  }

  if (fetching) {
    return (
      <div className={className}>
        <div className='balloons-container'>
          {Array.from({ length: balloons.length + 5 }).map((_, i) => (
            <CardLoading key={i} className='item' />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className='balloons-container'>
        {balloons.length <= 0 && <h1>We couldn't find any balloon</h1>}
        {balloons.map((balloon: Balloon) => (
          <div className='item hvr-grow' key={balloon.id}>
            <BalloonCard balloon={balloon} />
          </div>
        ))}
      </div>
      {hasNextPage && (
        <div className='see-more'>
          <Button content='See more' width='12rem' onClick={nextPage} />
        </div>
      )}
    </div>
  );
};

export default withStyle(BalloonsList);
