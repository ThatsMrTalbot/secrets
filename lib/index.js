"use strict";
var _provider;
function use(provider) {
    _provider = provider;
}
exports.use = use;
function get(key, encoding) {
    if (_provider) {
        return _provider.get(key, encoding);
    }
    else {
        return Promise.reject(new Error("No provider specified"));
    }
}
exports.get = get;
function has(key) {
    if (_provider) {
        return _provider.has(key);
    }
    else {
        return Promise.resolve(false);
    }
}
exports.has = has;
//# sourceMappingURL=index.js.map