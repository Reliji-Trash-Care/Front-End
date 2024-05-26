import { SideBar } from ".";

export default {
  title: "Components/SideBar",
  component: SideBar,
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
    home: "/img/home-2.svg",
    divClassName: {},
  },
};
