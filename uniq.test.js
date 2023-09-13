const assert = require("assert");
const uniq = require("./uniq");

describe("uniq", () => {
  it("should be a function", () => {
    assert.strictEqual(typeof uniq, "function");
  });

  it("should work", () => {
    assert.deepStrictEqual(
      uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]),
      ["a", "b", "c", "a", "b", "c"]
    );
    assert.deepStrictEqual(
      uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]),
      ["a", "b", "c"]
    );
    assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
    assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
    assert.deepStrictEqual(uniq([undefined]), [undefined]);
    assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
    assert.deepStrictEqual(uniq([""]), [""]);
  });

  it("should not mutate the parameter", () => {
    let test = ["a", "a", "b"];
    uniq(test);
    assert.deepStrictEqual(test, ["a", "a", "b"]);
  });
});
