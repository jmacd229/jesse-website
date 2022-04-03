import { config } from 'react-spring';

interface AdditionalFlipStyles {
  start: { [key: string]: unknown };
  end: { [key: string]: unknown };
}

export const getFlipConfig = (
  additionalProps: AdditionalFlipStyles = { start: {}, end: {} }
) => {
  return {
    from: {
      opacity: 0,
      transform: `perspective(600px) rotateX(180deg)`,
      ...additionalProps.start,
    },
    enter: {
      opacity: 1,
      transform: `perspective(600px) rotateX(0deg)`,
      ...additionalProps.end,
    },
    leave: {
      opacity: 0,
      transform: `perspective(600px) rotateX(180deg)`,
      ...additionalProps.start,
    },
    config: config.gentle,
  };
};
