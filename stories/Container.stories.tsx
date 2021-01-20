import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from '../src/components';
import '../index.css';

const meta: Meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Rows: Story<ContainerProps> = Template.bind({});
Rows.args = {
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
    </>
  ),
};

export const Columns: Story<ContainerProps> = Template.bind({});
Columns.args = {
  row: true,
  children: (
    <>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </>
  ),
};

export const Gaps: Story<ContainerProps> = Template.bind({});
Gaps.args = {
  gap: 2,
  children: (
    <>
      <div>Row 1</div>
      <div>Row 2</div>
      <div>Row 3</div>
      <div>Row 4</div>
    </>
  ),
};
