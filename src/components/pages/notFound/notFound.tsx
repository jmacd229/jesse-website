import React, { ReactElement } from 'react';
import './notFound.scss';
import AnimatedButton from '../../shared/animated-button/animated-button';
import animation from '../../../animations/arrow.json';
import { Position } from '../../../enums/position.enum';

const NotFound = (): ReactElement => {
  return (
    <main className='notFound'>
      <h1>404</h1>
      <h2>
        Sorry, you&apos;ve managed to stumble upon a page that doesn&apos;t
        exist.
      </h2>
      <AnimatedButton animation={animation} text="Back to home page" iconPosition={Position.RIGHT}/>
    </main>
  );
};

export default NotFound;
