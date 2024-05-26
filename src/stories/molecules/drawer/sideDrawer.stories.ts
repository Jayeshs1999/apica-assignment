import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SideDrawer from "./SideDrawer";

const meta = {
  title: "Example/SideDrawer",
  component: SideDrawer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    setOpen: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof SideDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    open: true,
  },
};

// export const LoggedOut: Story = {};
