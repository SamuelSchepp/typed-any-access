import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.arrayOrNull()", () => {
  it("should return null from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("shoule return null from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from boolean", () => {
    const sj = new Any(true);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from Boolean", () => {
    const sj = new Any(Boolean(true));
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return [\"hello\", \"world\"] from array", () => {
    const sj = new Any(["hello", "world"]);
    const a = sj.arrayOrNull();
    if (a === null) {
      assert.fail();
    } else {
      assert.deepStrictEqual(a[0].stringOrNull(), "hello");
      assert.deepStrictEqual(a[1].stringOrNull(), "world");
    }
  });
  it("should return null from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
  it("should return null from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.arrayOrNull(), null);
  });
});
