import _omit from 'lodash/omit';

export const stripeLastEndpoint = string => {
  const strArray = string.split('/');
  const withoutEndFile = _omit(strArray, [strArray.length - 1]).join('/');

  return withoutEndFile;
};
