import { Chat } from ".";

export default {
  title: "Components/Chat",
  component: Chat,
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
    chat: "/img/chat-2.svg",
    divClassName: {},
    text: "Chat Pengelola",
  },
};
