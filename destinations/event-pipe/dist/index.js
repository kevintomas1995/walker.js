"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Globals
var w = window;
var defaultAPI = 'https://moin.p.elbwalkerapis.com/lama';
var destination = {
    config: { custom: { projectId: '' } },
    init: function () {
        var config = this.config;
        // Require projectId
        if (!config.custom.projectId)
            return false;
        return true;
    },
    push: function (event, mapping) {
        if (mapping === void 0) { mapping = {}; }
        var config = this.config;
        var href = excludeParameters(location.href, config.custom.exclusionParameters);
        var referrer = excludeParameters(document.referrer, config.custom.exclusionParameters);
        // Custom check for default the page view event with search parameter
        if (event.event === 'page view' && event.data && event.data.search) {
            var origin_1 = location.origin;
            var search = excludeParameters(origin_1 + event.data.search, config.custom.exclusionParameters);
            event.data.search = search.substring(origin_1.length + 1);
        }
        var payload = __assign(__assign({}, event), { projectId: config.custom.projectId, source: {
                type: 'web',
                id: href,
                referrer: referrer,
                version: '3',
            } });
        var xhr = new XMLHttpRequest();
        xhr.open('POST', config.custom.api || defaultAPI, true);
        xhr.setRequestHeader('Content-type', 'text/plain; charset=utf-8');
        xhr.send(JSON.stringify(payload));
    },
};
function excludeParameters(href, exclusionParameters) {
    if (exclusionParameters === void 0) { exclusionParameters = []; }
    if (!exclusionParameters.length)
        return href;
    try {
        var url = new URL(href);
        var searchParams_1 = url.searchParams;
        exclusionParameters.map(function (parameter) {
            if (searchParams_1.has(parameter))
                searchParams_1.set(parameter, 'xxx');
        });
        url.search = searchParams_1.toString();
        return url.toString();
    }
    catch (e) {
        return '';
    }
}
exports.default = destination;
