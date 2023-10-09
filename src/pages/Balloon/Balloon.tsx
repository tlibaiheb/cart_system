import React, { useContext } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import withStyle from './withStyle';
import useBalloon from '@pages/Balloon/useBalloon';
import formatImage from '@utils/formatImage';
import Badge from '@components/atoms/Badge';
import Button from '@components/atoms/Button';
import { CartContext } from '@shared/cart';
import { DrawerContext } from '@shared/Layout/LayoutContext';
import { Icon } from '@components/icons';
import { getVariantLogo } from '@pages/Balloon/utils';
import PageLoading from '@pages/Balloon/components/PageLoading';
import Error from '@pages/Error';

interface Props {
  className?: string;
}

const Balloon: React.FunctionComponent<Props> = ({ className }) => {
  const params = useParams();
  const { add } = useContext(CartContext);
  const { openDrawer } = useContext(DrawerContext);
  const balloonId = get(params, 'balloonId', '');
  const { balloon, fetching, error } = useBalloon(balloonId);

  const addItemToCart = (balloon: Balloon) => {
    add(balloon);
    openDrawer();
  };

  if (fetching) return <PageLoading />;

  if (error || !balloon) return <Error />;

  return (
    <div className={className}>
      <div className='image-container'>
        <img src={formatImage(balloon.imageUrl)} alt={balloon.id} />
        <div className='details'>
          <h1 className={`name`}>{balloon.name}</h1>
          <h3 className='price'>${balloon.price}</h3>
        </div>
      </div>

      <div className='details-container'>
        <Link to='/' className='back' type='button'>
          <button className='back' type='button'>
            <Icon name='LeftArrow' />
          </button>
        </Link>

        <div className='section'>
          <h3 className='title'>Color</h3>
          <Badge background={balloon.color as string} />
        </div>

        <div className='section'>
          <h3 className='title'>Variant</h3>
          <Badge content={<Icon name={getVariantLogo(balloon.variant as string)} />} />
          <h5 className='variant-type'>{balloon.variant}</h5>
        </div>

        <div className='section'>
          <h3 className='title'>Description</h3>
          <p>{balloon.description}</p>
        </div>

        <div className='section'>
          <h3 className='title'>Added to store on</h3>
          <p>{new Date(balloon.availableSince).toDateString()}</p>
        </div>

        <Button
          content='ADD TO CART'
          width='12rem'
          className='add-cart'
          onClick={() => addItemToCart(balloon)}
        />
      </div>
    </div>
  );
};

export default withStyle(Balloon);
