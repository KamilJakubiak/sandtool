export type Listener<T> = (value: T) => void;
export declare abstract class Control<T = unknown> {
    readonly element: HTMLElement;
    private readonly listeners;
    private off;
    private gone;
    constructor(kind: string);
    get hidden(): boolean;
    set hidden(hidden: boolean);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    on(_event: "change" | "click", listener: Listener<T>): this;
    refresh(): void;
    dispose(): void;
    protected emit(value: T): void;
}
export declare function labelElement(text: string): HTMLElement;
export declare function valueInput(): HTMLInputElement;
export declare function withUnit(input: HTMLInputElement): {
    element: HTMLElement;
    showUnit: (shown: string) => void;
};
export declare function onTyped(input: HTMLInputElement, commit: (text: string | null) => void): void;
