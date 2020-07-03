export interface CustomCommands {
    [commandName: string]: (callback: (...params: any[]) => void, ...param: any) => void;
}
