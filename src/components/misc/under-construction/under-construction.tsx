import React, { useEffect, createRef, ReactElement, useState } from 'react';

import lottie from 'lottie-web';
import animation from '../../../animations/under-construction.json';
import './under-construction.scss';
import { Expander } from '../../shared/expander/expander';

const UnderConstruction = (): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const animationContainer = createRef<HTMLDivElement>();

  const panelContent: React.ReactElement[] = [
    <p key='0'>
      Unfortunately, while this website has been an enjoyable personal project
      of mine, it can still be difficult to find time to work on it.
    </p>,
    <p key='1'>
      This is my first time working with React and I&apos;ve been doing my best
      to teach myself the framework. While it has been fairly easy and fun to
      learn, I typically work in Angular, so my progress has been hindered
      slightly. Additionally, I do still continue to work as a full-time
      developer through the week, which does occupy much of my time.
    </p>,
    <p key='2'>
      I&apos;ll try to make updates often, but if you&apos;d like to check in on
      the progress, you can view&nbsp;
      <a
        href='https://github.com/jmacd229/jesse-website'
        target='_blank'
        rel='noreferrer'
        tabIndex={expanded ? 0 : -1}>
        the public GitHub repo
      </a>
      &nbsp;for this site.
    </p>,
    <p key='3'>
      Finally, if you&apos;d like to read more about me and my work history, or
      to contact me, please visit my LinkedIn profile:
    </p>,
    <a
      className='linkedIn'
      key='4'
      href='https://www.linkedin.com/in/jesse-macdougall-6709b7114'
      aria-label="link to navigate to Jesse MacDougall's LinkedIn profile"
      target='_blank'
      rel='noreferrer'
      tabIndex={expanded ? 0 : -1}>
      <div></div>
    </a>,
  ];

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex align-items-end'>
        <div className='icon mr-2 flex-shrink-0'>
          <div className='animation-container' ref={animationContainer} />
        </div>
        <div className='d-flex flex-column mt-3'>
          <div>
            Sorry, this site is still in progress - please check back later for
            updates!
          </div>
        </div>
      </div>
      <Expander
        id='under-construction'
        label='More info'
        buttonMargin={40}
        maxWidth={530}
        maxHeight={280}
        isExpanded={setExpanded}>
        {panelContent}
      </Expander>
    </div>
  );
};

export default UnderConstruction;
