import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/misc/footer/footer';
import Home from '../components/pages/home/home';
import { Page } from '../enums/pages.enum';
import NotFound from '../components/pages/notFound/notFound';
import { Helmet } from 'react-helmet';
import Header from '../components/misc/header/header';
import '../styles/style.scss';

export const pagePadding = 25;

export interface IndexState {
  currentPage: ReactElement;
}

export class Index extends React.Component<
  Record<string, unknown>,
  IndexState
> {
  constructor(props?: Record<string, unknown>) {
    super(props);
    this.state = { currentPage: <Home /> };
    if (window.location.hash) {
      this.state = { currentPage: Page[window.location.hash.substr(1)] };
    }
  }

  componentDidMount(): void {
    window.addEventListener('hashchange', this.setCurrentPage.bind(this));
    this.setCurrentPage();
  }

  componentWillUnmount(): void {
    window.removeEventListener('hashchange', this.setCurrentPage);
  }

  setCurrentPage(): void {
      let page = <Home />;
      if (window.location.hash) {
        switch (Page[window.location.hash.substr(1)]) {
          case Page.NOT_FOUND:
          default:
            page = <NotFound />;
            break;
        }
      }
      this.setState({ currentPage: page });
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
        {this.state.currentPage}
        <Footer />
      </div>
    );
  }
}

export default Index;
