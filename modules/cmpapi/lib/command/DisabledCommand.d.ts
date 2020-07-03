import { Command } from './Command';
export declare class DisabledCommand extends Command {
    protected success(): Promise<void>;
}
