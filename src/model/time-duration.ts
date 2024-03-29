import { TimeUnit } from 'model/enums/time-unit';

export class TimeDuration {
  private duration: number;
  private unit: TimeUnit;

  constructor(duration: number, unit: TimeUnit) {
    this.duration = duration;
    this.unit = unit;
  }

  getValue(): string {
    return `${this.duration}${this.unit}`;
  }
}
