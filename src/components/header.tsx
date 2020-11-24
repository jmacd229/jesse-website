import React, { DOMAttributes, ReactElement } from 'react';
import { Page } from '../enums/pages.enum';
import '../styles/header.scss';

const Header = (): ReactElement => {
  return <header>{getLinks()}</header>;
};

function getLinks() {
  if (!process.env.IS_UNDER_CONSTRUCTION) {
    return Object.values(Page).map((link, i) =>
      link !== Page.HOME ? <HeaderLink key={i}>{link}</HeaderLink> : null
    );
  } else {
    return <div className='light-text mr-4'>More coming soon...</div>;
  }
}

const HeaderLink = (props: DOMAttributes<string>): ReactElement => {
  function test(event) {
    console.log(event);
  }

  return (
    <button className='btn' onClick={test}>
      {props.children}
      <div className='underline'></div>
    </button>
  );
};

export default Header;
