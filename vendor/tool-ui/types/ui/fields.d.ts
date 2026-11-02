import { Control } from "./control.ts";
export type FieldOptions = {
    label: string;
};
export type TextOptions = FieldOptions & {
    placeholder?: string;
};
export declare function fieldBox(...parts: HTMLElement[]): HTMLElement;
export declare class TextField extends Control<string> {
    private readonly target;
    private readonly key;
    private readonly input;
    constructor(target: Record<string, string>, key: string, options: TextOptions);
    refresh(): void;
}
export declare class TextArea extends Control<string> {
    private readonly target;
    private readonly key;
    private readonly area;
    constructor(target: Record<string, string>, key: string, options: TextOptions);
    refresh(): void;
    private fit;
}
export type NumberOptions = FieldOptions & {
    format?: (value: number) => string;
};
export declare class NumberField extends Control<number> {
    private readonly target;
    private readonly key;
    private readonly options;
    private readonly input;
    private readonly showUnit;
    constructor(target: Record<string, number>, key: string, options: NumberOptions);
    refresh(): void;
}
export declare class Value extends Control<string> {
    private readonly target;
    private readonly key;
    private readonly text;
    constructor(target: Record<string, string>, key: string, options: FieldOptions);
    refresh(): void;
}
export declare class Note extends Control<string> {
    constructor(text?: string);
    get strong(): boolean;
    set strong(strong: boolean);
    set(text: string): void;
}
