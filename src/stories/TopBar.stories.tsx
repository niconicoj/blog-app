import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {TopBar} from './TopBar';

export default {
  title: 'Example/TopBar',
  component: TopBar,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story = () => {
  return (
    <TopBar />
  )
}

export const SimpleTopBar = Template.bind({});
SimpleTopBar.args = {};

