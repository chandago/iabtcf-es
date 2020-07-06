/* eslint-disable @typescript-eslint/no-explicit-any */
import {CommandMap} from './command/CommandMap';
import {CmpApiModel} from './CmpApiModel';
import {Callback, ErrorCallback} from './callback';
import {TCFCommands} from './command/TCFCommands';
import {DisabledCommand} from './command/DisabledCommand';
import {CustomCommands} from './CustomCommands';
import {SupportedVersions} from './SupportedVersions';

type TcfApiArgs = [string, number, Callback, ...any[]];
type GetQueueFunction = () => TcfApiArgs[];
type PageCallHandler = (
  command: string,
  version: number,
  callback: (response?: any, success?: any) => void,
  ...param: any
) => void;

export class CallResponder {

  private callQueue: TcfApiArgs[];
  private readonly API_FUNCTION_NAME: string = '__tcfapi';
  private readonly customCommands: CustomCommands;

  public constructor(customCommands?: CustomCommands) {

    if (customCommands) {

      this.customCommands = {};
      this.populateCustomCommands(customCommands);

    }

    /**
     * Attempt to grab the queue – we could call ping and see if it is the stub,
     * but instead we'll just a feature-detection method of just trying to get
     * a queue by calling the function with no parameters and see if we get a
     * queue back. If there is no stub or the stub doesn't return the queue by
     * calling with no arguments, then we'll just move on and create our
     * function.
     */
    try {

      // get queued commands
      this.callQueue = (window[this.API_FUNCTION_NAME] as GetQueueFunction)();

    } catch (err) {

      this.callQueue = [];

    } finally {

      window[this.API_FUNCTION_NAME] = this.apiCall.bind(this);

    }

    this.purgeQueuedCalls();

  }

  /**
   * Handler for all page call commands
   * @param {string} command
   * @param {number} version
   * @param {CallbackFunction} callback
   * @param {any} [param]
   */
  public apiCall(command: string, version: number, callback: Callback, ...params: any): void | never {

    if (typeof command !== 'string') {

      (callback as ErrorCallback)(null, false);

    } else if (!SupportedVersions.has(version)) {

      /**
       * Loosely checking version here on purpose.  If a string is passed
       * that's probably ok, we don't need strict adherence here.
       */

      (callback as ErrorCallback)(null, false);

    } else if (typeof callback !== 'function') {

      throw new Error('invalid callback function');

    } else if (CmpApiModel.disabled) {

      new DisabledCommand(callback);

    } else if (!this.isKnownCommand(command)) {

      /**
       * This check is here just because the call shouldn't be queued if it's
       * something we know isn't going to work.  It's kind of like breaking off a bad
       * relationshipthe instant you know things are not going to work out
       * instead of letting it linger.
       */

      (callback as ErrorCallback)(null, false);

    } else if (command === TCFCommands.PING) {

      /**
       * if it's a ping we always respond right away regardless of our tcModel
       * status or other things.
       */
      new CommandMap[command](callback, params[0]);

    } else if (this.customCommands && this.customCommands[command]) {

      this.customCommands[command](callback, ...params);

    } else if (CmpApiModel.tcModel === undefined) {

      /**
       * If we are still waiting for the TC data to be set we can push this
       * onto the queue that we have and once the model is set it'll be called
       */
      this.callQueue.push([command, version, callback, ...params]);

    } else {

      /**
       * at this point we know the command exists and we are free to call it
       */

      new CommandMap[command](callback, params[0]);

    }

  }

  /**
   * purgeQueuedCalls - if there have been calls that are queued up this method
   * will go through and call them in a FIFO order
   *
   * @return {void}
   */
  public purgeQueuedCalls(): void {

    const apiCall = this.apiCall.bind(this);
    const queueCopy: TcfApiArgs[] = this.callQueue;

    this.callQueue = [];
    queueCopy.forEach((args: TcfApiArgs): void => {

      apiCall(...args);

    });

  }

  /**
   * Allow user to wrap built-in commands with custom ones
   * @param  {CustomCommands} customCommands?
   */
  private populateCustomCommands(customCommands?: CustomCommands): void {

    Object.keys(customCommands || {}).forEach((customCommand) => {

      if (Object.values(TCFCommands).includes(customCommand)) {

        this.customCommands[customCommand] = function(...args): any {

          return customCommands[customCommand](CommandMap[customCommand], ...args);

        };

      } else {

        this.customCommands[customCommand] = customCommands[customCommand];

      }

    });

  };

  /**
   * Checks to see if the command exists in either the set of TCF Commands or
   * if custom commands
   *
   * @param {string} command - command to check
   * @return {boolean} - whether or not this command is known
   */
  private isKnownCommand(command: string): boolean {

    return ((this.customCommands !== undefined && this.customCommands[command] !== undefined) ||
      (CommandMap[command] !== undefined));

  }

}
