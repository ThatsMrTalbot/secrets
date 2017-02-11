import * as fs from 'fs'
import {Provider} from './index'

export class FileProvider implements Provider {

    constructor(private directory : string) {}
    get(key : string) : Promise<Buffer>;
    get(key : string, encoding : string) : Promise<string>;
    get(key : string, encoding? : string) : Promise<Buffer | string> {
        let path = `/${this.directory}/${key}`;
        return new Promise((res, rej) => {
            fs.readFile(path, (err, buffer) => {
                if (err) {
                    rej(err);
                } else if(encoding) {
                    res(buffer.toString(encoding));
                } else {
                    res(buffer);
                }
            })
        })
    }
}

export default FileProvider