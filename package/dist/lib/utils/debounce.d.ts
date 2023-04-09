export declare const debounce: (func: {
    apply: (arg0: undefined, arg1: any[]) => void;
}, wait?: number) => {
    (...args: any[]): void;
    clear(): void;
};
