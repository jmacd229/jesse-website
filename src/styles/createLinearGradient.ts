import { css } from 'styled-components';

const createLinearGradient = (
  angle: number,
  ...colorStops: Array<Array<string> | string>
) =>
  css`linear-gradient(${angle}deg, ${colorStops
    .map(stop => {
      if (stop instanceof Array) {
        return (stop as Array<string>).join(' ');
      }
      return stop;
    })
    .join(', ')});`;

export default createLinearGradient;
