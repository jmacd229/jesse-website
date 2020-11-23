import React, { ReactElement } from 'react';
import '../styles/footer.scss';
import packageJson from '../../package.json'

const Footer = (): ReactElement => {
  return (
    <footer className='p-3 d-flex flex-column align-items-center'>
      <div className='light-text small-text'>
        A personal website built by and for Jesse MacDougall
      </div>
      <div className='light-text text-center tiny-text'>
        V{packageJson.version}
        <br />
        Last Updated: { new Date(packageJson.releaseDate).toDateString()}
      </div>
    </footer>
  );
};

export default Footer;
