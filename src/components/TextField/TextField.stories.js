import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    style: {
      options: ["outlined"],
      control: { type: "select" },
    },
    state: {
      options: ["enabled", "focused", "hovered", "error", "disabled"],
      control: { type: "select" },
    },
    textConfigurations: {
      options: ["input-text", "label-text", "placeholder-text"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    supportingText: true,
    supportingText1: "Supporting text",
    label: "Label",
    input: "Input",
    style: "outlined",
    state: "enabled",
    textConfigurations: "input-text",
    leadingIcon: true,
    trailingIcon: true,
    className: {},
    textFieldClassName: {},
    inputTextClassName: {},
    hasLabelText: true,
    inputType: "text",
    inputType1: "text",
    inputType2: "text",
  },
};
