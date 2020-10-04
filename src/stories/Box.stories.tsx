import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import './box.custom.css';
import { Box, BoxProps } from './Box';

export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <div> Hello there !</div>
    </Box>
  )
}

export const SimpleBox = Template.bind({});
SimpleBox.args = {};

export const BorderedBox = Template.bind({});
BorderedBox.args = {border: 'single'};

export const DoubleBorderedBox = Template.bind({});
DoubleBorderedBox.args = {border: 'double'};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: {
    color: '#7daea3',
  },
  border: 'single'
}

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'custom-box',
  border: 'single'
}
