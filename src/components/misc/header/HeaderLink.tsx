import React, { ReactElement } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Page } from 'enums/pages.enum';
import spacing from 'styles/spacing';
import color from 'styles/color';

function getPageName(page: Page): String {
  switch (page) {
    case Page.WORK:
      return 'Work';
    default:
      return page;
  }
}

const StyledLink = styled(AniLink)`
  color: ${color.white};
  margin: 0 ${spacing(1)};
  text-decoration: none;
`;

export default ({ page }): ReactElement => (
  <StyledLink swipe direction='left' to={page}>
    {getPageName(page)}
  </StyledLink>
);
