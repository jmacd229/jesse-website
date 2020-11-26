import { ReactElement } from 'react';

const NotFound = (): ReactElement => {
    window.location.href = '/#NOT_FOUND';
  return null;
};

export default NotFound;
