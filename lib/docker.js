"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_1 = require("./file");
var DockerProvider = (function (_super) {
    __extends(DockerProvider, _super);
    function DockerProvider() {
        return _super.call(this, "/run/secrets") || this;
    }
    return DockerProvider;
}(file_1.FileProvider));
exports.DockerProvider = DockerProvider;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DockerProvider;
//# sourceMappingURL=docker.js.map