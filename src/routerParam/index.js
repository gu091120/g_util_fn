/**
 *
 * @description 获取url参数，转成对象
 * @export
 * @param {String} url
 * @returns {Object}
 */
export function routerParam(url) {
    if (typeof url !== "string") {
        throw new Error("url必须字符串");
    }
    const obj = {};
    const param = url.split("?")[1];
    if (param) {
        param.split("&").map(v => {
            let [key, value] = v.split("=");
            obj[encodeURIComponent(key)] = encodeURIComponent(value);
        });
    }
    return obj;
}
