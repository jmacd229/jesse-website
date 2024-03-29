import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { OutboundLink } from 'gatsby-plugin-google-gtag';
import spacing from 'styles/spacing';
import linkedIn_image from 'assets/linkedin.svg';
import { SmallText } from 'styles/typography';
import { FadeIn } from '@shared/fade-in/fade-in';
import Animation from '@shared/Animation';
import media from 'styles/media';
import logoGradient from 'styles/logoGradient';
import createLineGradient from 'styles/lineGradient';
import { Position } from 'model/enums/position.enum';
import box_animation from '../../animations/under-construction.json';

const LINKEDIN_DIMENSIONS = css`
  width: ${spacing(19)};
  height: ${spacing(3)};
`;

const LinkedIn = styled(OutboundLink)`
  display: flex;
  width: fit-content;
  ${LINKEDIN_DIMENSIONS}
  margin-top: ${spacing(2)};
  ${logoGradient(linkedIn_image, LINKEDIN_DIMENSIONS)}
`;

const ReadMore = styled(SmallText)`
  margin-left: ${spacing(6)};
  text-decoration: underline;
  ${media.medium} {
    margin-left: 0;
  }
`;

const UnderConstructionContainer = styled.div`
  display: grid;
  grid-template-areas:
    'icon message'
    'accordion accordion';
  grid-template-columns: ${spacing(4)} 1fr;
  grid-column-gap: ${spacing(2)};
  grid-row-gap: ${spacing(0.5)};
  ${media.medium} {
    grid-template-columns: ${spacing(4)} ${spacing(66)};
    grid-template-areas:
      'icon message'
      'icon accordion';
  }
`;

const PackageIcon = styled(Animation).attrs({ data: box_animation })`
  grid-area: icon;
  height: fit-content;
`;

const Message = styled.div`
  grid-area: message;
`;

const AccordionContainer = styled.div`
  grid-area: accordion;
`;

const AccordionDetailsWithGradient = styled(AccordionDetails)`
  ${createLineGradient(Position.ABOVE)}
`;

const panelContent: React.ReactElement[] = [
  <SmallText key='0'>
    Unfortunately, while this website has been an enjoyable personal project of
    mine, it can still be difficult to find time to work on it.
  </SmallText>,
  <SmallText key='1'>
    I work as a full-time developer throughout the week, while also working on
    the occasional side project. This site was originally developed when I had
    little experince with React, and I have devoted a fair amount of time into
    refactoring it with more performant and maintainable/readable solutions.
  </SmallText>,
  <SmallText key='2'>
    I will continue to make updates as often as I can, and if you&apos;d like to
    check in on the progress, you can view&nbsp;
    <OutboundLink
      href='https://github.com/jmacd229/jesse-website'
      target='_blank'
      rel='noreferrer'
    >
      the public GitHub repo
    </OutboundLink>
    &nbsp;for this site.
  </SmallText>,
  <SmallText key='3'>
    Finally, if you&apos;d like to read more about me and my work history, or to
    contact me, please visit my LinkedIn profile:
  </SmallText>,
  <LinkedIn
    key='4'
    href='https://www.linkedin.com/in/jesse-macdougall-6709b7114'
    aria-label="Navigate to Jesse MacDougall's LinkedIn profile"
    target='_blank'
    rel='noreferrer'
  ></LinkedIn>,
];

const UnderConstruction = (): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  return (
    <UnderConstructionContainer>
      <PackageIcon />
      <Message>
        Sorry, this site is <em>still</em> in progress - please check back later
        for updates!
      </Message>
      <AccordionContainer>
        <Accordion
          expanded={expanded}
          onChange={(_, isExpanded) => setExpanded(isExpanded)}
          elevation={0}
          TransitionProps={{ timeout: 2000 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='underConstruction-content'
            id='underConstruction-header'
          >
            <ReadMore noMargin>Read More</ReadMore>
          </AccordionSummary>
          <AccordionDetailsWithGradient>
            <FadeIn
              isVisible={expanded}
              forwards={{ initialDelay: 750, delay: 100 }}
              reverse={{ delay: 150 }}
            >
              {panelContent}
            </FadeIn>
          </AccordionDetailsWithGradient>
        </Accordion>
      </AccordionContainer>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;
