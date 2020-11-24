import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../components/pages/home';
import { Page } from '../enums/pages.enum';
import NotFound from '../components/pages/notFound';
import { Helmet } from 'react-helmet';

export const pagePadding = 25;


export interface IndexState {
  currentPage: Page;
}

export class Index extends React.Component<
  Record<string, unknown>,
  IndexState
> {
  constructor(props?: Record<string, unknown>) {
    super(props);
    if (window.location.hash) {
      this.state = { currentPage: Page[window.location.hash.substr(1)] };
    } else {
      this.state = { currentPage: Page.HOME };
    }
    this.getCurrentPage.bind(this);
  }

  getCurrentPage(): ReactElement {
    switch (this.state.currentPage) {
      case Page.HOME:
        return <Home />;
      case Page.NOT_FOUND:
      default:
        return <NotFound />;
    }
  }

  render(): ReactElement {
    return (
      <div className='main'>
        {/*eslint-disable-next-line react/jsx-no-undef*/}
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet='utf-8' />
          <title>Jesse MacDougall - Full-stack Web Developer</title>
          <link rel='canonical' href='https://jessemacdougall.ca' />
        </Helmet>
        <Header />
        {this.getCurrentPage()}
        <Footer />
      </div>
    );
  }
}

export default Index;
