"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.routerParam = routerParam;
/**
 *
 * @description 获取url参数，转成对象
 * @export
 * @param {String} url
 * @returns {Object}
 */
function routerParam(url) {
    if (typeof url !== "string") {
        throw new Error("url必须字符串");
    }
    var obj = {};
    var param = url.split("?")[1];
    if (param) {
        param.split("&").map(function (v) {
            var _v$split = v.split("="),
                _v$split2 = _slicedToArray(_v$split, 2),
                key = _v$split2[0],
                value = _v$split2[1];

            obj[encodeURIComponent(key)] = encodeURIComponent(value);
        });
    }
    return obj;
}