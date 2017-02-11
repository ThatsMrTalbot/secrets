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
//# sourceMappingURL=index.js.map