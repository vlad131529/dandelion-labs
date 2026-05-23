import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/shared/ui/kit/Button";
import Heading from "@/shared/ui/typography/Heading";
import Text from "@/shared/ui/typography/Text";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md space-y-4">
      <Heading level={3}>AI-powered analytics</Heading>

      <Text variant="muted">
        Track business metrics and monitor growth in real time with modern
        dashboards.
      </Text>

      <Button>Learn more</Button>
    </Card>
  ),
};

export const Highlight: Story = {
  render: () => (
    <Card variant="highlight" className="max-w-md space-y-4">
      <Heading level={3}>Smart automation</Heading>

      <Text variant="muted">
        Automate repetitive workflows and save hours every week.
      </Text>

      <Button variant="secondary">Get started</Button>
    </Card>
  ),
};

export const Muted: Story = {
  render: () => (
    <Card variant="muted" className="max-w-md space-y-4">
      <Heading level={3}>Team collaboration</Heading>

      <Text variant="muted">
        Work together with your team in one shared workspace.
      </Text>

      <Button variant="ghost">Read more</Button>
    </Card>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <Card padding="lg" className="max-w-md space-y-4">
      <Heading level={3}>Enterprise security</Heading>

      <Text variant="muted">
        Built with modern security standards and scalable infrastructure.
      </Text>

      <Button>Contact sales</Button>
    </Card>
  ),
};
