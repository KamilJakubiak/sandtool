import { Control } from "./control.ts";
export type ToggleOptions = {
    label: string;
};
export declare class Toggle extends Control<boolean> {
    private readonly target;
    private readonly key;
    private readonly button;
    constructor(target: Record<string, boolean>, key: string, options: ToggleOptions);
    refresh(): void;
}
