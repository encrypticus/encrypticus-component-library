import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MobileMenu, MobileMenuProps } from '../src/components/MobileMenu';

const meta: Meta = {
  title: 'Mobile Menu',
  component: MobileMenu,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MobileMenuProps> = (args) => <MobileMenu {...args} />;
export const Default = Template.bind({});

Default.args = {};
