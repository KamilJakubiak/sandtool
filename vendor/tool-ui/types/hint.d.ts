export type Hint = {
    show: (text: string) => void;
    hide: () => void;
};
export declare function createHint(view: HTMLElement, text?: string): Hint;
