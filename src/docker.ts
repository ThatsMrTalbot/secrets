import {Provider} from './index'
import {FileProvider} from './file'

export class DockerProvider extends FileProvider implements Provider {
    constructor() {
        super("/run/secrets");
    }
}

export default DockerProvider