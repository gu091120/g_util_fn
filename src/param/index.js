/**
 *
 * @description 对象专成url的形式
 * @export
 * @param {Object} obj
 * @returns {String}
 */
export function param(obj) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
        throw new Error("参数必须是有效对象");
    }
    const arr = [];
    for (let key in obj) {
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join("&");
}
