import { TimeUnit } from "enums/time-unit";

export class TimeDuration {
    private duration: number;
    private unit: TimeUnit;

    constructor(duration: number, unit: TimeUnit){
        this.duration = duration;
        this.unit = unit;
    }

    getValue() {
        return `${this.duration}${this.unit}`
    }
}