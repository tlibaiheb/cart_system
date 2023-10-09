import getEnv from '@utils/getEnv';

const url = getEnv('REACT_APP_SERVER', 'https://balloons.thetc.se');

function formatImage(img: string): string {
  return `${url}${img}`;
}

export default formatImage;
