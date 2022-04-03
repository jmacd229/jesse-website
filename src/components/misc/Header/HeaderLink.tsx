import React, { ReactElement } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Page } from 'model/enums/pages.enum';
import spacing from 'styles/spacing';
import Color from 'styles/color';

function getPageName(page: Page): string {
  switch (page) {
    case Page.WORK:
      return 'Work';
    case Page.HOME:
      return 'Home';
    default:
      return page;
  }
}

const StyledLink = styled(AniLink)`
  color: ${Color.WHITE};
  margin: 0 ${spacing(1)};
  text-decoration: none;
`;

export interface HeaderLinkProps {
  page: Page;
}

const HeaderLink = ({ page, ...rest }: HeaderLinkProps): ReactElement => (
  <StyledLink swipe direction='left' to={page} {...rest}>
    {getPageName(page)}
  </StyledLink>
);

export default HeaderLink;
