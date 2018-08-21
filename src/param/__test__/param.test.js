import { param } from "..";
test("param", () => {
    expect(param({ name: 1, age: 2 })).toBe("name=1&age=2");
    try {
        param(213123123123);
    } catch (e) {
        expect(e).toEqual(new Error("参数必须是有效对象"));
    }
});
