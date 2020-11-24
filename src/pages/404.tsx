import { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';

const NotFound = (): ReactElement => {
    window.location.href = '/#NOT_FOUND';
  return null;
};

export default NotFound;
