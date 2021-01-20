import 'twin.macro';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Container } from './components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = () => {
  return (
    <Container gap="sm" align="center">
      <div tw="text-light-foreground">Test</div>
      <div tw="text-light-foreground">Test 2</div>
    </Container>
  );
};

export * from './components';
