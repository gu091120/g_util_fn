import { routerParam } from "..";
test("routerParam", () => {
    expect(routerParam("http://www.baidu.com?name=1&age=2")).toEqual({
        name: "1",
        age: "2"
    });
    expect(routerParam("http://www.baidu.com")).toEqual({});
    try {
        routerParam(213123123123);
    } catch (e) {
        expect(e).toEqual(new Error("url必须字符串"));
    }
});
