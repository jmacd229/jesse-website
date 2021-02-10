import React, { ReactElement } from 'react';
import { Page } from 'enums/pages.enum';
import './header.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import home from '../../../animations/home.json';
import { Position } from 'enums/position.enum';
import AnimatedButton from '@shared/animated-button/animated-button';

const Header = (): ReactElement => {
  const getHomeLink = ({ isCurrent }) => {
    return isCurrent ? { className: 'd-none', tabIndex: -1 } : {};
  };

  return (
    <header>
      <div className='ml-4 mr-auto'>
        <AnimatedButton
          id='home'
          animation={home}
          text='Home'
          iconPosition={Position.LEFT}
          link={Page.HOME}
          textOnHover={true}
          getProps={getHomeLink}
        />
      </div>
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
      className='hover-btn'
      direction='left'
      to={props.page}>
      {getPageName(props.page)}
    </AniLink>
  );
};

export default Header;
