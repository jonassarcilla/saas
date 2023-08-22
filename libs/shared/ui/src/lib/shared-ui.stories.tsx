import type { Meta, StoryObj } from '@storybook/react';
import { SharedUi } from './shared-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedUi> = {
  component: SharedUi,
  title: 'SharedUi',
};
export default meta;
type Story = StoryObj<typeof SharedUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedUi!/gi)).toBeTruthy();
  },
};
