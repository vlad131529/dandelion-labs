import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {
  args: {
    variant: "body",
    children: "We help startups build scalable digital products.",
    as: "p",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Secondary text used for descriptions and helper content.",
    as: "p",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Test caption",
    as: "p",
  },
};
