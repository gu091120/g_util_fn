import { isEqual } from "../index";
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
    expect(isEqual(obj, obj)).toBe(true);
});
