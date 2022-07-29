import { warn } from 'utilities/logging';

const IMPLEMENTED_UNITS = {
  rem: 8,
};

export function toPx(size: string): number {
  if (size.includes('rem')) {
    return parseInt(size, 10) * IMPLEMENTED_UNITS.rem;
  }
  warn(
    "You've attempted to parse a non-standard or non-implemented size. Currently only the following are implemented: " +
      Object.keys(IMPLEMENTED_UNITS).join(',')
  );
  return NaN;
}
