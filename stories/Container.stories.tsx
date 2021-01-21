import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from '../src/components';
import { colors } from '../src/design';
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

export const Spacing: Story<ContainerProps> = Template.bind({});
Spacing.args = {
  row: true,
  spacing: 'space-4x',
  styles: { backgroundColor: colors.light['highlight-magenta'] },
  children: <p>Hello!</p>,
};

export const Flexboxes: Story<ContainerProps> = Template.bind({});
Flexboxes.args = {
  row: true,
  gap: 2,
  children: (
    <>
      <Container
        styles={{ flex: 1, backgroundColor: colors.light['highlight-magenta'] }}
      >
        Flex = 1
      </Container>
      <Container
        styles={{ flex: 2, backgroundColor: colors.light['highlight-magenta'] }}
      >
        Flex = 2
      </Container>
      <Container
        styles={{ flex: 3, backgroundColor: colors.light['highlight-magenta'] }}
      >
        Flex = 3
      </Container>
      <Container
        styles={{
          flex: '0 0 50px',
          backgroundColor: colors.light['highlight-magenta'],
        }}
      >
        50px
      </Container>
    </>
  ),
};

export const Mix: Story<ContainerProps> = Template.bind({});
Mix.args = {
  gap: 1,
  row: true,
  align: 'start',
  children: (
    <>
      <Container
        styles={{ backgroundColor: colors.light['highlight-magenta'] }}
      >
        Container
      </Container>
      <Container
        styles={{ flex: 2, backgroundColor: colors.light['highlight-magenta'] }}
      >
        Container
      </Container>
      <Container gap={1} styles={{ flex: 3 }}>
        <Container
          styles={{
            flex: 1,
            backgroundColor: colors.light['highlight-magenta'],
          }}
        >
          Container
        </Container>
        <Container
          styles={{
            flex: 1,
            backgroundColor: colors.light['highlight-magenta'],
          }}
        >
          Container
        </Container>
        <Container
          gap={1}
          row
          styles={{
            flex: 1,
          }}
        >
          <Container
            styles={{
              flex: 1,
              backgroundColor: colors.light['highlight-magenta'],
            }}
          >
            Container
          </Container>
          <Container
            styles={{
              flex: 1,
              backgroundColor: colors.light['highlight-magenta'],
            }}
          >
            Container
          </Container>
        </Container>
      </Container>
    </>
  ),
};

export const Gaps: Story<ContainerProps> = Template.bind({});
Gaps.args = {
  gap: 1,
  children: (
    <>
      <div>Row 1</div>
      <div>Row 2</div>
      <div>Row 3</div>
      <div>Row 4</div>
    </>
  ),
};

export const Alignments: Story<ContainerProps> = Template.bind({});
Alignments.args = {
  gap: 1,
  align: 'center',
  children: (
    <>
      <div>Row 1</div>
      <div>Row 2</div>
      <div>Row 3</div>
      <Container
        row
        gap={1}
        styles={{
          alignSelf: 'flex-start',
          justifyContent: 'space-between',
          flex: 1,
          width: '100%',
        }}
      >
        <div>Row 1</div>
        <div>Row 2</div>
      </Container>
    </>
  ),
};
