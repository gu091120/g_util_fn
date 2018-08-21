"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.param = param;
/**
 *
 * @description 对象专成url的形式
 * @export
 * @param {Object} obj
 * @returns {String}
 */
function param(obj) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
        throw new Error("参数必须是有效对象");
    }
    var arr = [];
    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }
    return arr.join("&");
}