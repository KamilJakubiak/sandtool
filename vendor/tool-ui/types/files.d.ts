export declare function createFilePicker(accept: string, multiple: boolean, onFiles: (files: File[]) => void): HTMLInputElement;
export declare function acceptDrops(target: HTMLElement, onFiles: (files: File[]) => void): void;
export declare function download(file: Blob, name: string): void;
