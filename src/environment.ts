import {Provider} from './index'

export class EnvironmentProvider implements Provider {
    async get(key : string) : Promise<Buffer>;
    async get(key : string, encoding : string) : Promise<string>;
    async get(key : string, encoding? : string) : Promise<Buffer | string> {
        let value = process.env[`SECRET_${key.toUpperCase()}`];
        if (encoding) {
            return value;
        } else {
            return new Buffer(value);
        }
    }
}

export default EnvironmentProvider