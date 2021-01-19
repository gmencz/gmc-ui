import React, { HTMLAttributes, ReactChild, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
type ThingProps = {
  children: ReactNode;
};

export function Thing({ children }: ThingProps) {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
}
