import React, { DOMAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import Animation from '@shared/Animation';
import { spacing, media } from 'styles';

import box_animation from '../.././animations/under-construction.json';

const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${spacing(4)} ${spacing(2)};

  ${media.medium} {
    flex-direction: row;
    padding: ${spacing(5)};
  }
`;

const AnimatedBox = styled(Animation).attrs({ data: box_animation })`
  max-width: 5rem;
  max-height: 5rem;
  margin-bottom: ${spacing(3)};

  ${media.medium} {
    margin-right: ${spacing(3)};
  }
`;

const InProgress = ({
  children,
}: DOMAttributes<ReactElement>): ReactElement => (
  <InProgressContainer>
    <AnimatedBox />
    {children}
  </InProgressContainer>
);

export default InProgress;
