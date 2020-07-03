import { Command } from './Command';
export declare class GetTCDataCommand extends Command {
    protected success(): Promise<void>;
    protected isValid(): boolean;
}
