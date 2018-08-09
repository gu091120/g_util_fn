import { isEqual, param, routerParam } from "../util";

describe("util test", () => {
    const obj = {
        a: [1, 2],
        b: 2,
        c: { a: 1 }
    };
    const obja = {
        a: [1, 2],
        b: 2,
        c: { a: 1 }
    };

    const objb = {
        a: [1, 3],
        b: 2,
        c: { a: 1 }
    };

    const objc = {
        a: [1, 2, 3],
        b: 3,
        c: { a: 1 }
    };
    const objd = {
        a: [1, 2, 3],
        b: 3,
        c: { a: 2 }
    };

    test("isEqual", () => {
        expect(isEqual(obj, obja)).toBe(true);
        expect(isEqual(obj, objb)).toBe(false);
        expect(isEqual(obj, objc)).toBe(false);
        expect(isEqual(obj, objd)).toBe(false);
    });
    test("param", () => {
        expect(param({ name: 1, age: 2 })).toBe("name=1&age=2");
        try {
            param(213123123123);
        } catch (e) {
            expect(e).toEqual(new Error("参数必须是有效对象"));
        }
    });

    test("routerParam", () => {
        expect(routerParam("http://www.baidu.com?name=1&age=2")).toEqual({
            name: "1",
            age: "2"
        });
        try {
            routerParam(213123123123);
        } catch (e) {
            expect(e).toEqual(new Error("url必须字符串"));
        }
    });
});
