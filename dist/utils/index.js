export var findEntryByCode = function (source, code) {
    if (code && source != null) {
        var codex = source.findIndex(function (c) {
            return c.isoCode === code;
        });
        return codex !== -1 ? source[codex] : undefined;
    }
    return undefined;
};
export var findStateByCodeAndCountryCode = function (source, code, countryCode) {
    if (code && countryCode && source != null) {
        var codex = source.findIndex(function (c) {
            return c.isoCode === code && c.countryCode === countryCode;
        });
        return codex !== -1 ? source[codex] : undefined;
    }
    return undefined;
};
export var compare = function (a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
};
