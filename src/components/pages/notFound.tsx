import React, { ReactElement } from 'react';
import '../../styles/pages/notFound.scss';

const NotFound = (): ReactElement => {
  return (
    <main className='notFound'>
      <h1>404</h1>
      <h2>
        Sorry, you&apos;ve managed to stumble upon a page that doesn&apos;t
        exist.
      </h2>
    </main>
  );
};

export default NotFound;
