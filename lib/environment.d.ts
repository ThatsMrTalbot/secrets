/// <reference types="node" />
import { Provider } from './index';
export declare class EnvironmentProvider implements Provider {
    get(key: string): Promise<Buffer>;
    get(key: string, encoding: string): Promise<string>;
    has(key: string): Promise<boolean>;
}
export default EnvironmentProvider;
