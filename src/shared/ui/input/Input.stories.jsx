import { within, userEvent } from "@storybook/testing-library";

import { Input as ProjectInput } from "./";

export default {
  title: "UI",
  component: Input,
  parameters: {
    layout: "centered"
  }
};

export const Input = args => <ProjectInput data-testid="input" {...args} />;
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
Input.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = canvas.getByTestId("input");
  userEvent.type(loginButton, "hey, how're u ?");
};
