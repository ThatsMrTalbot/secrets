import {Provider} from './index'

export class MemoryProvider implements Provider {
    constructor(private values : Object) {}

    async get(key : string) : Promise<Buffer>;
    async get(key : string, encoding : string) : Promise<string>;
    async get(key : string, encoding? : string) : Promise<Buffer | string> {
        let value = this.values[key];
        if (encoding) {
            return value;
        } else {
            return new Buffer(value);
        }
    }
}

export default MemoryProvider