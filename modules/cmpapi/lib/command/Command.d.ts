import { Callback } from '../callback';
/**
 * Base command class holds basic command parameters and has functionality to
 * handle basic validation.
 */
export declare abstract class Command {
    protected versionString: string;
    protected callback: Callback;
    protected listenerId: number;
    protected param?: any;
    constructor(callback: Callback, param?: any, listenerId?: number);
    protected isValid(): boolean;
    protected abstract success(): Promise<void>;
    protected fail(): void;
}
