import { Control } from "./control.ts";
export type SliderOptions = {
    label: string;
    min: number;
    max: number;
    step?: number;
    format?: (value: number) => string;
    percent?: boolean;
};
export type PointOptions = Omit<SliderOptions, "percent">;
type Point = {
    x: number;
    y: number;
};
export declare class Slider extends Control<number> {
    private readonly bar;
    private readonly range;
    constructor(target: Record<string, number>, key: string, options: SliderOptions);
    setRange(min: number, max: number): void;
    refresh(): void;
}
export declare class PointField extends Control<Point> {
    private readonly bars;
    constructor(target: Record<string, Point>, key: string, options: PointOptions);
    refresh(): void;
}
export declare class SliderBar {
    private readonly options;
    private readonly read;
    private readonly write;
    readonly element: HTMLElement;
    private readonly fill;
    private readonly number;
    private readonly value;
    private readonly typing;
    private readonly showUnit;
    constructor(control: {
        readonly disabled: boolean;
    }, options: SliderOptions, read: () => number, write: (value: number) => void);
    refresh(): void;
    private type;
    private slide;
    private setFromPointer;
    private set;
    private typed;
    private shown;
}
export {};
