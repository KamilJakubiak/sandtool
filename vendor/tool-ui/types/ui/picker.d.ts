export declare class ColorPicker {
    private readonly owner;
    private readonly label;
    private readonly read;
    private readonly write;
    readonly element: HTMLElement;
    onClose: () => void;
    private hsb;
    private known;
    private readonly chosen;
    private readonly field;
    private readonly hue;
    private readonly values;
    private bars;
    private code;
    private anchor;
    private sample;
    private panel;
    private open_;
    private readonly watchPanel;
    constructor(owner: {
        readonly disabled: boolean;
    }, label: string, read: () => string, write: (hex: string) => void);
    get isOpen(): boolean;
    open(anchor: HTMLElement, sample: HTMLElement, byKeyboard: boolean): void;
    close(): void;
    refresh(): void;
    private readonly onPressOutside;
    private readonly onEscape;
    private readonly onMove;
    private setHSB;
    private setHex;
    private paint;
    private build;
    private setHSL;
    private place;
}
export declare function typedHex(text: string): string | null;
