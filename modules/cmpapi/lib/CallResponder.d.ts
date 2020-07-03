import { Callback } from './callback';
import { CustomCommands } from './CustomCommands';
export declare class CallResponder {
    private callQueue;
    private readonly API_FUNCTION_NAME;
    private readonly customCommands;
    constructor(customCommands?: CustomCommands);
    /**
     * Handler for all page call commands
     * @param {string} command
     * @param {number} version
     * @param {CallbackFunction} callback
     * @param {any} [param]
     */
    apiCall(command: string, version: number, callback: Callback, ...params: any): void | never;
    /**
     * purgeQueuedCalls - if there have been calls that are queued up this method
     * will go through and call them in a FIFO order
     *
     * @return {void}
     */
    purgeQueuedCalls(): void;
    /**
     * Allow user to wrap built-in commands with custom ones
     * @param  {CustomCommands} customCommands?
     */
    private populateCustomCommands;
    /**
     * Checks to see if the command exists in either the set of TCF Commands or
     * if custom commands
     *
     * @param {string} command - command to check
     * @return {boolean} - whether or not this command is known
     */
    private isKnownCommand;
}
