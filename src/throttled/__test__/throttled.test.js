import { throttled } from "..";

let num = 0,
    callback;

beforeEach(() => {
    num = 0;
    callback = jest.fn();
});
test("调用次数 ", done => {
    var waitfun = throttled(callback, 300);
    function runCode() {
        if (num < 3) {
            num++;
            setTimeout(() => {
                waitfun();
                runCode();
            }, 200);
        } else {
            expect(callback.mock.calls.length).toBe(2);
            done();
        }
    }
    runCode();
});
test("调用次数 isTrailing=true", done => {
    var waitfun = throttled(callback, 300, true);
    function runCode() {
        if (num < 3) {
            num++;
            setTimeout(() => {
                waitfun();
                runCode();
            }, 200);
        } else {
            expect(callback.mock.calls.length).toBe(3);
            done();
        }
    }
    runCode();
});
test("调用次数 params=2", done => {
    var waitfun = throttled(callback, 300);
    function runCode() {
        if (num < 3) {
            num++;
            setTimeout(() => {
                waitfun(2);
                runCode();
            }, 200);
        } else {
            expect(callback.mock.calls[0][0]).toBe(2);
            done();
        }
    }
    runCode();
});
