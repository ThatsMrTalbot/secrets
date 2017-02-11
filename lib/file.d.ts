/// <reference types="node" />
import { Provider } from './index';
export declare class FileProvider implements Provider {
    private directory;
    constructor(directory: string);
    get(key: string): Promise<Buffer>;
    get(key: string, encoding: string): Promise<string>;
    has(key: string): Promise<boolean>;
}
export default FileProvider;
