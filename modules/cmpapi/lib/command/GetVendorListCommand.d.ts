import { Command } from './Command';
/**
 * Gets a version of the Global Vendors List
 */
export declare class GetVendorListCommand extends Command {
    protected success(): Promise<void>;
    protected isValid(): boolean;
}
