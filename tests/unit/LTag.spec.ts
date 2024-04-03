import { shallowMount } from "@vue/test-utils";
import LTag from "@/components/LTag";
import { defaultTextComponentProps } from "@/types/component";

describe("LTag.vue", () => {
  const location = window.location;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });
  afterEach(() => {
    window.location = location;
  });
  it("test props.text and no tag", () => {
    const msg = "this is msg";
    // shallowMount 函数可以在测试中浅渲染 Vue 组件
    const wrapper = shallowMount(LTag, {
      props: { ...defaultTextComponentProps, text: msg },
    });
    expect(wrapper.text()).toMatch(msg);
    expect(wrapper.element.tagName).toBe("DIV");
  });
  it("test props.style and tag", () => {
    const wrapper = shallowMount(LTag, {
      props: { ...defaultTextComponentProps, tag: "p" },
    });
    expect(wrapper.element.tagName).toBe("P");
    const style = wrapper.attributes().style;
    // toBeTruthy 是 Jest 中的一个断言，用于验证某个值是否为真值（在布尔上下文中被视为 true 的值）
    expect(style.includes("font-size")).toBeTruthy();
    // toBeFalsy 断言来验证一个值是否为假值（即在布尔上下文中被视为 false 的值）。如果断言的值是假值，则测试通过；如果值不是假值，则测试失败
    expect(style.includes("url")).toBeFalsy();
  });
  it("test props.url", async () => {
    const url = "https://baidu.com/";
    const wrapper = shallowMount(LTag, {
      props: { ...defaultTextComponentProps, url },
    });
    await wrapper.trigger("click");
    expect(window.location.href).toBe(url);
  });
  it("test props.url isEditer", async () => {
    const url = "https://baidu.com/";
    const wrapper = shallowMount(LTag, {
      props: { ...defaultTextComponentProps, url, isEditer: true },
    });
    await wrapper.trigger("click");
    expect(window.location.href).not.toBe(url);
  });
});
