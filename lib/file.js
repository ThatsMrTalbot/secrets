"use strict";
var fs = require("fs");
var FileProvider = (function () {
    function FileProvider(directory) {
        this.directory = directory;
    }
    FileProvider.prototype.get = function (key, encoding) {
        var path = "/" + this.directory + "/" + key;
        return new Promise(function (res, rej) {
            fs.readFile(path, function (err, buffer) {
                if (err) {
                    rej(err);
                }
                else if (encoding) {
                    res(buffer.toString(encoding));
                }
                else {
                    res(buffer);
                }
            });
        });
    };
    FileProvider.prototype.has = function (key) {
        var path = "/" + this.directory + "/" + key;
        return new Promise(function (res, rej) {
            fs.access(path, fs.constants.R_OK, function (err) {
                res(!err);
            });
        });
    };
    return FileProvider;
}());
exports.FileProvider = FileProvider;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileProvider;
//# sourceMappingURL=file.js.map