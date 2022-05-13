import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("should render message", () => {
    const props = {
      msg: "This is a test",
    };

    const wrapper = mount(HelloWorld, { props });

    expect(wrapper.text()).toContain(props.msg);
  });
});
