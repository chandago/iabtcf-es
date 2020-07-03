import { GetTCDataCommand } from './GetTCDataCommand';
export declare class AddEventListenerCommand extends GetTCDataCommand {
    protected success(): Promise<void>;
}
