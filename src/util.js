export function isEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (let i = 0; i < key1.length; i++) {
        if (obj1[key1[i]] !== obj2[key2[i]]) {
            if (
                Object.keys(obj1[key1[i]]).length > 0 &&
                Object.keys(obj2[key2[i]]).length > 0
            ) {
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

export function routerParam(url) {
    if (typeof url !== "string") {
        throw new Error("url必须字符串");
    }
    const obj = {};
    const param = url.split("?")[1];
    if (param) {
        param.split("&").map((v, i) => {
            let [key, value] = v.split("=");
            obj[encodeURIComponent(key)] = encodeURIComponent(value);
        });
    }
    return obj;
}
