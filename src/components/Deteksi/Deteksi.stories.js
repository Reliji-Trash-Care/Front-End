import { Deteksi } from ".";

export default {
  title: "Components/Deteksi",
  component: Deteksi,
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
    deteksi: "/img/deteksi-2.svg",
  },
};
