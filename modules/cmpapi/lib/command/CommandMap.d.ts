import { PingCommand } from './PingCommand';
import { GetTCDataCommand } from './GetTCDataCommand';
import { GetInAppTCDataCommand } from './GetInAppTCDataCommand';
import { GetVendorListCommand } from './GetVendorListCommand';
import { AddEventListenerCommand } from './AddEventListenerCommand';
import { RemoveEventListenerCommand } from './RemoveEventListenerCommand';
import { TCFCommands } from './TCFCommands';
export declare class CommandMap {
    static [TCFCommands.PING]: typeof PingCommand;
    static [TCFCommands.GET_TC_DATA]: typeof GetTCDataCommand;
    static [TCFCommands.GET_IN_APP_TC_DATA]: typeof GetInAppTCDataCommand;
    static [TCFCommands.GET_VENDOR_LIST]: typeof GetVendorListCommand;
    static [TCFCommands.ADD_EVENT_LISTENER]: typeof AddEventListenerCommand;
    static [TCFCommands.REMOVE_EVENT_LISTENER]: typeof RemoveEventListenerCommand;
}
