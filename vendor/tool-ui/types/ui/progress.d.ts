import { Control } from "./control.ts";
export type ProgressOptions = {
    label: string;
};
export declare class Progress extends Control<void> {
    private readonly fill;
    private readonly percent;
    private readonly bar;
    constructor(options: ProgressOptions);
    set(fraction: number): void;
}
