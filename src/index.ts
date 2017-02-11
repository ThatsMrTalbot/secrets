import * as fs from 'fs'

let _provider : Provider;

export interface Provider {
    get(key : string) : Promise<Buffer>;
    get(key : string, encoding : string) : Promise<string>;
}

export function use(provider : Provider) {
    _provider = provider;
}

export function get(key : string) : Promise<Buffer>;
export function get(key : string, encoding : string) : Promise<string>;
export function get(key : string, encoding? : string) : Promise<string | Buffer> {
    if (_provider) {
        return _provider.get(key, encoding);
    }else{
        return Promise.reject(
            new Error("No provider specified")
        );
    }
}