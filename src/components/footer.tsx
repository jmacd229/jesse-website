import React, { ReactElement } from 'react';
import '../styles/footer.scss';

const Footer = (): ReactElement => {
  return (
    <footer className='p-3 d-flex flex-column align-items-center'>
      <div className='light-text'>
        A personal website built by and for Jesse MacDougall
      </div>
      <div className='light-text text-center'>
        V{process.env.VERSION}
        <br />
        Last Updated: { new Date(process.env.RELEASE_DATE).toDateString()}
      </div>
    </footer>
  );
};

export default Footer;
