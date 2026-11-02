import { Control } from "./control.ts";
export type ItemOptions = {
    title: string;
    detail?: string;
};
export declare class Item extends Control<void> {
    private readonly frame;
    private readonly canvas;
    private readonly titleText;
    private readonly detailLine;
    private readonly detailText;
    private readonly ring;
    private readonly arc;
    private done;
    constructor(options: ItemOptions);
    get pressable(): boolean;
    set pressable(pressable: boolean);
    get progress(): number | null;
    set progress(progress: number | null);
    get chosen(): boolean;
    set chosen(chosen: boolean);
    get title(): string;
    set title(title: string);
    get detail(): string;
    set detail(detail: string);
    private showDetailLine;
    setPicture(picture: ImageBitmap | HTMLCanvasElement | null): void;
}
