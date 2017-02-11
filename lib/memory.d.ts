/// <reference types="node" />
import { Provider } from './index';
export declare class MemoryProvider implements Provider {
    private values;
    constructor(values: Object);
    get(key: string): Promise<Buffer>;
    get(key: string, encoding: string): Promise<string>;
    has(key: string): Promise<boolean>;
}
export default MemoryProvider;
