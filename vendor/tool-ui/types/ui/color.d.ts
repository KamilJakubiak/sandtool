import { Control } from "./control.ts";
export type ColorOptions = {
    label: string;
};
export declare class ColorField extends Control<string> {
    private readonly target;
    private readonly key;
    private readonly sample;
    private readonly code;
    private readonly picker;
    constructor(target: Record<string, string>, key: string, options: ColorOptions);
    get hidden(): boolean;
    set hidden(hidden: boolean);
    refresh(): void;
    dispose(): void;
    private set;
}
