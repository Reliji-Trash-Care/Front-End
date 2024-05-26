import { Berita } from ".";

export default {
  title: "Components/Berita",
  component: Berita,
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
    paper: "/img/paper-2.svg",
    divClassName: {},
  },
};
