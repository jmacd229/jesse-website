import React, { createRef, ReactElement, useEffect } from 'react';
import { Page } from 'enums/pages.enum';
import './header.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import lottie, { AnimationItem } from 'lottie-web';
import home from '../../../animations/home.json';

const Header = (): ReactElement => {
  const animationContainer = createRef<HTMLDivElement>();
  let anim: AnimationItem;

  const getHomeLink = ({ isCurrent }) => {
    return isCurrent ? { className: 'd-none', tabIndex: -1 } : {};
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: home,
    });
  }, []);

  return (
    <header>
      <AniLink
        getProps={getHomeLink}
        swipe
        className='btn ml-4 mr-auto'
        direction='left'
        to={Page.HOME}>
        <div className='icon'>
          <div className='animation-container' ref={animationContainer}></div>
        </div>
      </AniLink>
      {getLinks()}
    </header>
  );
};

function getLinks() {
  if (!process.env.IS_UNDER_CONSTRUCTION) {
    // return Object.values(Page).map((link, i) =>
    //   link !== Page.HOME ? <HeaderLink key={i}>{link}</HeaderLink> : null
    // );
  } else {
    return (
      <>
        <HeaderLink page={Page.WORK}></HeaderLink>
        <div className='small-text light-text mx-5'>
          More pages coming soon...
        </div>
      </>
    );
  }
}

const HeaderLink = (props: { page: Page }): ReactElement => {
  function getPageName(page: Page): String {
    switch (page) {
      case Page.WORK:
        return 'Work';
      default:
        return page;
    }
  }

  return (
    <AniLink
      activeClassName='active'
      swipe
      className='btn'
      direction='left'
      to={props.page}>
      {getPageName(props.page)}
    </AniLink>
  );
};

export default Header;
