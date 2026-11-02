import { Control } from "./control.ts";
export type ButtonOptions = {
    title: string;
};
export declare class Button extends Control<void> {
    private readonly button;
    constructor(options: ButtonOptions);
    get title(): string;
    set title(title: string);
}
export declare class ButtonRow extends Control<number> {
    readonly buttons: HTMLButtonElement[];
    constructor(titles: string[]);
}
