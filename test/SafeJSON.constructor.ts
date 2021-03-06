import { Any } from "../lib/Any";
import { Type } from "../lib/Type";
import assert from "assert";

describe("SafeAny.constructor", () => {
  it("should return null-wrapping instance", () => {
    const sj = Any.parseJSON("invalid json");
    assert.deepStrictEqual(sj.type, Type.null);
  });
});
