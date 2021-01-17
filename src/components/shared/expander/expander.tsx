import { FadeIn } from '@shared/fade-in/fade-in';
import menu from 'animations/menu.json';
import lottie, { AnimationDirection } from 'lottie-web';
import React, {
  createRef,
  DOMAttributes,
  ReactElement,

  useEffect,
  useState
} from 'react';
import './expander.scss';


export interface ExpanderProps extends DOMAttributes<Element> {
  propId: string;
  label: string;
  maxWidth: number;
  maxHeight: number;
  buttonMargin?: number;
  isExpanded(isExpanded: boolean);
}

const pagePadding = 25;

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
        height: `${expanded ? props.maxHeight : pagePadding}px`,
        width: `${expanded ? width : 0}px`,
      }}>
      <button
        className='btn p-0 expander-trigger small-text'
        onClick={expand}
        aria-expanded={expanded}
        aria-controls={props.propId}
        aria-label={expanded ? `Close ${props.label} section` : null}
        style={{
          transform: `translateX(${
            expanded ? width - (30 + props.buttonMargin) : 0
          }px)`,
          marginTop: `${expanded ? 20 : 0}px`,
          marginLeft: `${props.buttonMargin}px`,
        }}>
        <div className='expander-label'>{props.label}</div>
        <div className='icon-wrapper flex-shrink-0'>
          <div className='icon-small'>
            <div className='animation-container' ref={animation.container} />
          </div>
        </div>
      </button>
      <div
        className='expander-panel'
        style={{
          height: `${expanded ? props.maxHeight : 0}px`,
          width: `${width}px`,
        }}>
        <div
          id={props.propId}
          className='expander-panel-content small-text'
          tabIndex={expanded ? 0 : -1}
          aria-hidden={!expanded}
          style={{
            height: `${expanded ? props.maxHeight : 0}px`,
          }}>
          <FadeIn
            isVisible={expanded}
            forwards={{ initialDelay: 750, delay: 100 }}
            reverse={{ delay: 50 }}>
            {props.children}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
