import { describe, expect, it } from "vitest";
import { getMessage } from "..";

describe("Hello World", () => {
  it("should return message", () => {
    const msg = getMessage();
    expect(msg).toBe("Hallo von der Softwarequalität API.");
  });
});
