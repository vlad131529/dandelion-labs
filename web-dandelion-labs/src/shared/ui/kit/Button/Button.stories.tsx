import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Get started",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Learn more",
    variant: "secondary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Read more",
    variant: "ghost",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
  },
};
