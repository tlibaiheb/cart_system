import React from 'react';
import withStyle from './withStyle';
import FiltersDrawer from '@pages/Dashboard/components/FiltersDrawer';
import BalloonsList from '@pages/Dashboard/components/BalloonsList';
import FiltersContext from '@pages/Dashboard/components/FiltersContext';
import useWindowSize from '@shared/hooks/useWindowSize';
import { sort, variants, colors } from '@utils/constants';
import FilterSelector from '@pages/Dashboard/components/FilterSelector';

interface Props {
  className?: string;
}

const Dashboard: React.FunctionComponent<Props> = ({ className }) => {
  const { width } = useWindowSize();

  const isTablet = width <= 768;

  return (
    <div className={className}>
      <FiltersContext>
        <>
          {isTablet && (
            <div className='drop-downs'>
              <FilterSelector type='variant' title='select balloon variant' options={variants} />
              <FilterSelector type='color' title='select balloon color' options={colors} />
              <FilterSelector type='sort' title='sort by' options={sort} />
            </div>
          )}

          {!isTablet && (
            <div className='filters-container'>
              <FiltersDrawer options={variants} type={'variant'} title='all variants' />
              <FiltersDrawer options={colors} type={'color'} title='all colors' />
            </div>
          )}
          <div className='balloons-list-container'>
            <BalloonsList />
          </div>

          {!isTablet && (
            <div className='sort-container'>
              <FiltersDrawer options={sort} type={'sort'} title='relevance' />
            </div>
          )}
        </>
      </FiltersContext>
    </div>
  );
};

export default withStyle(Dashboard);
