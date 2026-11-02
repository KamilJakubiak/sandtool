import { Button, ButtonRow, type ButtonOptions } from "./button.ts";
import { Menu, Segments, type ChoiceOptions, type SegmentsOptions } from "./choice.ts";
import { ColorField, type ColorOptions } from "./color.ts";
import { Item, type ItemOptions } from "./item.ts";
import { Note, NumberField, TextArea, TextField, Value, type FieldOptions, type NumberOptions, type TextOptions } from "./fields.ts";
import { Progress, type ProgressOptions } from "./progress.ts";
import { PointField, Slider, type PointOptions, type SliderOptions } from "./slider.ts";
import { Toggle, type ToggleOptions } from "./toggle.ts";
type Refreshable = {
    refresh(): void;
};
export declare abstract class Container {
    protected readonly children: Refreshable[];
    protected abstract rowHost(): HTMLElement;
    addSlider<T extends Record<K, number>, K extends string>(target: T, key: K, options: SliderOptions): Slider;
    addToggle<T extends Record<K, boolean>, K extends string>(target: T, key: K, options: ToggleOptions): Toggle;
    addMenu<V, T extends Record<K, V>, K extends string>(target: T, key: K, options: ChoiceOptions<V>): Menu<V>;
    addSegments<V, T extends Record<K, V>, K extends string>(target: T, key: K, options: SegmentsOptions<V>): Segments<V>;
    addColor<T extends Record<K, string>, K extends string>(target: T, key: K, options: ColorOptions): ColorField;
    addText<T extends Record<K, string>, K extends string>(target: T, key: K, options: TextOptions): TextField;
    addTextArea<T extends Record<K, string>, K extends string>(target: T, key: K, options: TextOptions): TextArea;
    addNumber<T extends Record<K, number>, K extends string>(target: T, key: K, options: NumberOptions): NumberField;
    addPoint<T extends Record<K, {
        x: number;
        y: number;
    }>, K extends string>(target: T, key: K, options: PointOptions): PointField;
    addValue<T extends Record<K, string>, K extends string>(target: T, key: K, options: FieldOptions): Value;
    addNote(text?: string): Note;
    addItem(options: ItemOptions): Item;
    addButton(options: ButtonOptions): Button;
    addButtons(titles: string[]): ButtonRow;
    addProgress(options: ProgressOptions): Progress;
    refresh(): void;
    private adopt;
}
export type GroupOptions = {
    folded?: boolean;
};
export declare class Group extends Container {
    readonly element: HTMLElement;
    private readonly heading;
    private readonly titleText;
    private gone;
    private shut;
    constructor(title: string, options?: GroupOptions);
    get title(): string;
    set title(title: string);
    get folded(): boolean;
    set folded(folded: boolean);
    get hidden(): boolean;
    set hidden(hidden: boolean);
    dispose(): void;
    protected rowHost(): HTMLElement;
}
export declare class Page {
    readonly element: HTMLElement;
    private readonly children;
    constructor();
    addGroup(title: string, options?: GroupOptions): Group;
    addTabs(titles: string[]): Tabs;
    refresh(): void;
}
export declare class Tabs {
    readonly element: HTMLElement;
    readonly pages: Page[];
    private readonly buttons;
    private readonly thumb;
    private readonly listeners;
    private index;
    constructor(titles: string[]);
    get selected(): number;
    select(index: number): void;
    on(_event: "select", listener: (index: number) => void): this;
    get hidden(): boolean;
    set hidden(hidden: boolean);
    refresh(): void;
}
export {};
