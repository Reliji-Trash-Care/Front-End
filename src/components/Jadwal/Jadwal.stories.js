import { Jadwal } from ".";

export default {
  title: "Components/Jadwal",
  component: Jadwal,
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
    hasCalendar: true,
    divClassName: {},
    text: "Jadwal Sampah",
    calendar: "/img/calendar-2.svg",
  },
};
