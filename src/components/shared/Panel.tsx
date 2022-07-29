import { Position } from 'model/enums/position.enum';
import React, { ReactElement, DOMAttributes } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { color, spacing } from 'styles';
import createLineGradient from 'styles/lineGradient';
import { getFlipConfig } from 'styles/animations/spring/flip';

const PanelContainer = styled(animated.div)<{ $isOpen: boolean }>`
  color: ${({ $isOpen }) => (!$isOpen ? 'transparent' : color.WHITE)};
  background-color: ${color.DARKEST_GREY};
  padding: ${spacing(1)};
  ${createLineGradient(Position.LEFT)}
`;

export interface PanelProps extends DOMAttributes<Element> {
  isOpen?: boolean;
}

const Panel = ({
  children,
  isOpen = false,
  ...rest
}: PanelProps): ReactElement => {
  const backgroundTransition = useTransition(isOpen, {
    ...getFlipConfig({ start: { height: '0%' }, end: { height: '100%' } }),
    reverse: !isOpen,
  });

  const contentTransition = useTransition(children, {
    key: item => item,
    ...getFlipConfig({
      start: { position: 'absolute' },
      end: { position: 'relative' },
    }),
  });

  return backgroundTransition(
    (flipStyles, panel) =>
      panel && (
        <PanelContainer $isOpen={isOpen} style={flipStyles} {...rest}>
          {contentTransition((fadeStyles, item) => (
            <animated.div style={fadeStyles}>{item}</animated.div>
          ))}
        </PanelContainer>
      )
  );
};

export default Panel;
