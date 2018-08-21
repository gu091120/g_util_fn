"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttled = throttled;
/**
 *
 *  函数节流
 * @export
 * @param {function} fun 调用方法
 * @param {number} time 间隔时间
 * @param {boole} isTrailing 最后一次是否有执行
 * @returns
 */
function throttled(fun, time, isTrailing) {
    var pretime = null,
        timeout,
        content,
        remaining,
        arg;
    function later() {
        fun.apply(content, arg);
    }
    return function () {
        var now = new Date().getTime();
        arg = arguments;
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        if (!pretime || time < now - pretime) {
            pretime = new Date().getTime();
            later();
        } else if (isTrailing) {
            remaining = time - (now - pretime);
            timeout = setTimeout(function () {
                later();
            }, remaining);
        }
    };
}