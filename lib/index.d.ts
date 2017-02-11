/// <reference types="node" />
export interface Provider {
    get(key: string): Promise<Buffer>;
    get(key: string, encoding: string): Promise<string>;
}
export declare function use(provider: Provider): void;
export declare function get(key: string): Promise<Buffer>;
export declare function get(key: string, encoding: string): Promise<string>;
