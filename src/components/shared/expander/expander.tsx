import { FadeIn } from '@shared/fade-in/fade-in';
import menu from 'animations/menu.json';
import lottie, { AnimationDirection } from 'lottie-web';
import React, {
  createRef,
  DOMAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import './expander.scss';
import styled from 'styled-components';
import { animatedGradient } from '../../../styles/animations';

export interface ExpanderProps extends DOMAttributes<Element> {
  id: string;
  label: string;
  maxWidth: number;
  maxHeight: number;
  buttonMargin?: number;
  isExpanded(isExpanded: boolean);
}

const pagePadding = 2.5;

const Panel = styled.div`
  height: ${props => (props.expanded ? props.maxHeight : 0)}rem;
  width: ${props => props.width}rem;
  margin-top: 1.6rem;
  background-color: var(--background-dark);
  position: absolute;
  top: 0;
  transition: height 1s linear;
  &:before {
    content: '';
    position: absolute;
    ${animatedGradient}
    width: 100%;
    height: 0.2rem;
    opacity: ${props => (props.expanded ? 0.8 : 0)};
    transition: opacity 1s linear;
  }
`;

const PanelContent = styled.div.attrs(props => ({
  tabIndex: props.expanded ? 0 : -1,
  'aria-hidden': !props.expanded,
}))`
  height: ${props => (props.expanded ? props.maxHeight : 0)}rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 200;
  padding: ${props =>
    props.expanded ? '0.8rem 0.8rem 0.8rem 0.8rem' : '0rem 0.8rem'};
  transition: height 1s linear, padding 250ms 750ms linear;
  & > div > :first-child {
    padding-right: 3.2rem;
  }
`;

export const Expander = (props: ExpanderProps): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(0);
  const [animation, setAnimation] = useState({
    item: null,
    container: createRef<HTMLDivElement>(),
    data: menu,
  });

  function updateWindowDimensions(): void {
    setWidth(Math.min(window.innerWidth - pagePadding * 2, props.maxWidth));
  }

  function expand(): void {
    const anim = animation.item;
    if (anim) {
      anim.play();
      anim.setDirection((anim.playDirection * -1) as AnimationDirection);
      setExpanded(anim.playDirection === 1);
    }
  }

  useEffect(() => props.isExpanded(expanded), [expanded]);

  useEffect(() => {
    const item = lottie.loadAnimation({
      container: animation.container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: menu,
    });
    item.setSpeed(0.75);
    item.setDirection(-1);
    setAnimation({ ...animation, item });
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div
      className={'expander' + (expanded ? ' expanded' : '')}
      style={{
        height: `${expanded ? props.maxHeight : pagePadding}rem`,
        width: `${expanded ? width : 0}rem`,
      }}>
      <button
        className='btn p-0 expander-trigger small-text'
        onClick={expand}
        aria-expanded={expanded}
        aria-controls={props.id}
        aria-label={expanded ? `Close ${props.label} section` : null}
        style={{
          transform: `translateX(${
            expanded ? width - (3 + props.buttonMargin) : 0
          }rem)`,
          marginTop: `${expanded ? 2 : 0}rem`,
          marginLeft: `${props.buttonMargin}rem`,
        }}>
        <div className='expander-label'>{props.label}</div>
        <div className='icon-wrapper flex-shrink-0'>
          <div className='icon-small'>
            <div className='animation-container' ref={animation.container} />
          </div>
        </div>
      </button>
      <Panel expanded={expanded} maxHeight={props.maxHeight} width={width}>
        <PanelContent
          expanded={expanded}
          maxHeight={props.maxHeight}
          id={props.id}
          className='small-text'>
          <FadeIn
            isVisible={expanded}
            forwards={{ initialDelay: 750, delay: 100 }}
            reverse={{ delay: 50 }}>
            {props.children}
          </FadeIn>
        </PanelContent>
      </Panel>
    </div>
  );
};
