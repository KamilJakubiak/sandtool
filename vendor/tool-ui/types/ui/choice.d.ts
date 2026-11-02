import { Control } from "./control.ts";
export type ChoiceOptions<V> = {
    label: string;
    options: Record<string, V>;
};
export type SegmentsOptions<V> = ChoiceOptions<V> & {
    icons?: Record<string, string>;
};
export declare class Menu<V> extends Control<V> {
    private readonly target;
    private readonly key;
    private readonly options;
    private readonly titles;
    private readonly values;
    private readonly button;
    private readonly shown;
    private readonly list;
    private pointer;
    constructor(target: Record<string, V>, key: string, options: ChoiceOptions<V>);
    get hidden(): boolean;
    set hidden(hidden: boolean);
    refresh(): void;
    dispose(): void;
    private toggle;
}
export declare class Segments<V> extends Control<V> {
    private readonly target;
    private readonly key;
    private readonly values;
    private readonly buttons;
    private readonly thumb;
    private readonly track;
    constructor(target: Record<string, V>, key: string, options: SegmentsOptions<V>);
    refresh(): void;
    private chosen;
}
export declare function placeThumb(thumb: HTMLElement, chosen: HTMLElement | null): void;
