import { Command } from './Command';
export declare class RemoveEventListenerCommand extends Command {
    protected success(): Promise<void>;
    protected fail(): void;
    protected isValid(): boolean;
}
