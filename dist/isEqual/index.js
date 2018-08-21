"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEqual = isEqual;
/**
 *
 * @description 判读个对象的值是否相等
 * @export
 * @param {any} obj1
 * @param {any} obj2
 * @returns {Boolean}
 */
function isEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (var i = 0; i < key1.length; i++) {
        if (obj1[key1[i]] !== obj2[key2[i]]) {
            if (Object.keys(obj1[key1[i]]).length > 0 && Object.keys(obj2[key2[i]]).length > 0) {
                if (!isEqual(obj1[key1[i]], obj2[key2[i]])) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}