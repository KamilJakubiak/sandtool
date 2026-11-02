import { Page } from "./ui/container.ts";
export type Area = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type Theme = "auto" | "dark" | "light";
export type Tool = {
    view: HTMLElement;
    panel: HTMLElement;
    pane: Page;
    theme: Theme;
    hidden: boolean;
    onThemeChange: (listener: (theme: Theme) => void) => void;
    freeArea: () => Area;
    onFreeAreaChange: (listener: (area: Area) => void) => void;
};
export declare function createTool(): Tool;
