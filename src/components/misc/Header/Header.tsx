import React, { ReactElement } from 'react';
import { ClickAwayListener, Paper, Tooltip } from '@mui/material';
import styled from 'styled-components';
import { Page } from 'model/enums/pages.enum';
import { spacing, zIndex } from 'styles';
import HeaderLink from '@misc/Header/HeaderLink';
import createLineGradient from 'styles/lineGradient';
import { Position } from 'model/enums/position.enum';
import Animation from 'components/shared/Animation';
import bricks from 'animations/bricks.json';
import useCurrentUrl from 'hooks/useCurrentUrl';

const HeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: ${spacing(6)};
  padding: 0 ${spacing(4)};
  z-index: ${zIndex.HEADER};
  flex-shrink: 0;
  ${createLineGradient(Position.BELOW)}
`;

const InProgress = styled(Animation).attrs({
  data: bricks,
  loop: false,
  autoplay: false,
  onHover: true,
})`
  width: ${spacing(5)};
`;

const BackToHomeLink = styled(HeaderLink)`
  margin-right: auto;
`;

const getLinks = () => {
  const availableLinks = JSON.parse(process.env.AVAILABLE_LINKS);
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => setOpen(false);
  const handleTooltipOpen = () => setOpen(true);

  return (
    <>
      {availableLinks.map(pageName => (
        <HeaderLink page={Page[pageName]} key={pageName} />
      ))}
      {/* Subtract 1 since the Page enum contains 'HOME' */}
      {availableLinks.length < Object.keys(Page).length && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              title='More pages are currently in progress'
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
            >
              <button
                onClick={handleTooltipOpen}
                onMouseEnter={handleTooltipOpen}
                onFocus={handleTooltipOpen}
                onMouseLeave={handleTooltipClose}
                onBlur={handleTooltipClose}
              >
                <InProgress />
              </button>
            </Tooltip>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};

const Header = (): ReactElement => {
  const currentUrl = useCurrentUrl();
  return (
    <HeaderContainer elevation={3} role='banner'>
      {currentUrl !== Page.HOME && <BackToHomeLink page={Page.HOME} />}
      {getLinks()}
    </HeaderContainer>
  );
};

export default Header;
