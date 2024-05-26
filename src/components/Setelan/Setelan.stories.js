import { Setelan } from ".";

export default {
  title: "Components/Setelan",
  component: Setelan,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    setting: "/img/setting-2.svg",
    divClassName: {},
  },
};
