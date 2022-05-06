import { describe, expect, it } from "vitest";
import { helloWorld } from "..";

describe("example test", () => {
  it("test 1", () => {
    expect(helloWorld).toBeDefined();
    expect(helloWorld.message).toBe("Hello World");
  });
});
