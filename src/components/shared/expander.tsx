import React, { createRef, DOMAttributes, RefObject } from 'react';

import lottie, { AnimationDirection, AnimationItem } from 'lottie-web';
import animation from '../../animations/menu.json';
import '../../styles/shared/expander.scss';
import { FadeIn } from './fade-in';
import { pagePadding } from '../layout';

export interface ExpanderProps extends DOMAttributes<Element> {
  id: string;
  label: string;
  maxWidth: number;
  maxHeight: number;
  buttonMargin?: number;
  isExpanded(isExpanded: boolean);
}

export interface ExpanderState {
  isExpanded: boolean;
  width: number;
  height: number;
}

export class Expander extends React.Component<ExpanderProps, ExpanderState> {
  animationContainer: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  fadeInContent: RefObject<FadeIn> = createRef<FadeIn>();
  anim: AnimationItem;

  constructor(props?: ExpanderProps) {
    super(props);
    this.state = { isExpanded: false, width: 0, height: 0 };
    this.expand = this.expand.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions(): void {
    this.setState({
      width: Math.min(window.innerWidth - pagePadding * 2, this.props.maxWidth),
      height: this.props.maxHeight,
    });
  }

  expand(): void {
    this.anim.play();
    this.anim.setDirection(
      (this.anim.playDirection * -1) as AnimationDirection
    );
    this.setState({ isExpanded: this.anim.playDirection === 1 }, () => {
      this.fadeInContent.current.changeVisibility(this.state.isExpanded);
      this.props.isExpanded(this.state.isExpanded);
    });
  }

  componentDidMount(): void {
    this.anim = lottie.loadAnimation({
      container: this.animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animation,
    });
    this.anim.setSpeed(0.75);
    this.anim.setDirection(-1);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render(): React.ReactElement {
    return (
      <div
        className={'expander' + (this.state.isExpanded ? ' expanded' : '')}
        style={{
          height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
          width: `${this.state.isExpanded ? this.state.width : 0}px`,
        }}>
        <button
          className='btn p-0 expander-trigger small-text'
          onClick={this.expand}
          aria-expanded={this.state.isExpanded}
          aria-controls={this.props.id}
          aria-label={
            this.state.isExpanded ? `Close ${this.props.label} section` : null
          }
          style={{
            transform: `translateX(${
              this.state.isExpanded
                ? this.state.width - (30 + this.props.buttonMargin)
                : 0
            }px)`,
            marginTop: `${this.state.isExpanded ? 20 : 0}px`,
            marginLeft: `${this.props.buttonMargin}px`,
          }}>
          <div className='expander-label'>{this.props.label}</div>
          <div className='icon-wrapper flex-shrink-0'>
            <div className='icon-small'>
              <div
                className='animation-container'
                ref={this.animationContainer}
              />
            </div>
          </div>
        </button>
        <div
          className='expander-panel'
          style={{
            height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
            width: `${this.state.width}px`,
          }}>
          <div
            id={this.props.id}
            className='expander-panel-content small-text'
            tabIndex={this.state.isExpanded ? 0 : -1}
            aria-hidden={!this.state.isExpanded}
            style={{
              height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
            }}>
            <FadeIn
              forwards={{ initialDelay: 750, delay: 100 }}
              reverse={{ delay: 50 }}
              ref={this.fadeInContent}>
              {this.props.children}
            </FadeIn>
          </div>
        </div>
      </div>
    );
  }
}
