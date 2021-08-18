import {Dimensions} from 'react-native';

const msp = (dim, limit) => {
  return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
};

export const isPortrait = element => {
  const dim = Dimensions.get(element);
  return dim.height >= dim.width;
};

export const isLandscape = element => {
  const dim = Dimensions.get(element);
  return dim.width >= dim.height;
};

export const isTablet = element => {
  const dim = Dimensions.get(element);
  return (
    (dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900))
  );
};

export const isPhone = () => {
  return !isTablet();
};
