import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../Card.vue";

describe("Patient Card", () => {
  test("Only name field exists", () => {
    const testCard = {
      name: "xianglun",
    };
    const wrapper = mount(Card, { props: { card: testCard } });
    expect(wrapper.find(".genderParagraph").exists()).toBeFalsy();
    expect(wrapper.find(".birthDateParagraph").exists()).toBeFalsy();
    expect(wrapper.find(".addressParagraph").exists()).toBeFalsy();
    wrapper.unmount();
  });

  test("Name field does not exist", () => {
    const testCard = {
      gender: "male",
      birthDate: "13/7/21",
      address: "123, Lorong Pisang",
    };
    const wrapper = mount(Card, { props: { card: testCard } });
    expect(wrapper.find(".nameParagraph").text()).toBe("Name: defaultName");
    expect(wrapper.find(".genderParagraph").exists()).toBeTruthy();
    expect(wrapper.find(".birthDateParagraph").exists()).toBeTruthy();
    expect(wrapper.find(".addressParagraph").exists()).toBeTruthy();
    wrapper.unmount();
  });
});
