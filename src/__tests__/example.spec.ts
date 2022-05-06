import { describe, expect, it } from "vitest";
import { getHelloWorld } from "..";

describe("example test", () => {
  it("test 1", () => {
    const helloWorld = getHelloWorld();
    expect(helloWorld).toBeDefined();
    expect(helloWorld.message).toBe("Hello World");
  });
});
