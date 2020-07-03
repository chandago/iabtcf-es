import { Command } from './Command';
export declare class PingCommand extends Command {
    protected success(): Promise<void>;
}
