import { Profil } from ".";

export default {
  title: "Components/Profil",
  component: Profil,
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
    openartImage: "/img/openart-image-nfswrdqc-1711466557108-raw-2-2.png",
    text: "Sopia",
    arrowDown: "/img/arrow-down-2-1.svg",
  },
};
