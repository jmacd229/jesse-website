export enum Position {
  LEFT = 'left',
  RIGHT = 'right',
  ABOVE = 'above',
  BELOW = 'below',
}

// Used to determine if the position describes placement on the vertical plane (y-axis)
export const isPositionOnVerticalPlane = (position: Position): boolean =>
  position === Position.ABOVE || position === Position.BELOW;
