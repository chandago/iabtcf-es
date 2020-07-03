import { TCDataCallback } from './callback';
export declare class EventListenerQueue {
    private eventQueue;
    private queueNumber;
    add(tcDataCallback: TCDataCallback): number;
    remove(listenerId: number): boolean;
    exec(): void;
    clear(): void;
    get size(): number;
}
