import { Tagihan } from ".";

export default {
  title: "Components/Tagihan",
  component: Tagihan,
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
    wallet: "/img/wallet-2.svg",
    divClassName: {},
    text: "Tagihan Iuran",
  },
};
