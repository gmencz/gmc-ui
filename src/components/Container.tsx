import React, { CSSProperties, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { parseStyle } from '../utils';

type Direction = 'column' | 'row';
type Alignment = 'start' | 'center' | 'end';

type Props = Partial<{
  /**
   * Aligns the container's items on the specified position.
   */
  align: Alignment;

  /**
   * Turns the container into a row, can be used with `wrap` to have a responsive container.
   * Setting this will take precedence over `directions`.
   */
  row: boolean;

  /**
   * Makes the container take up as much space as the content, by default, the container
   * will take up as much space as possible.
   */
  inline: boolean;

  /**
   * Defines the gap between the direct items inside the container (uses the CSS `rem` unit).
   */
  gap: number;

  /**
   * Sets the direction of the container on each {@link https://tailwindcss.com/docs/breakpoints breakpoint}.
   * ```js
   * <Container directions={['column', 'row', 'column', 'row', 'row]} />
   * ```
   * The breakpoints follow an ascending order.
   */
  directions: Direction[];

  /**
   * Wraps the container's items if they don't fit on the screen.
   */
  wrap: boolean;

  /**
   * Overrides the container's CSS properties with the provided ones, use it just like
   * you would use React's `style` prop with the difference that the styles won't be
   * applied via the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style style HTML attribute}
   * so you don't have to worry about specificity.
   * ```js
   * <Container styles={{ position: 'fixed', top: 0, right: 0 }} />
   * ```
   */
  styles: CSSProperties;
  children: ReactNode;
}>;

const TwContainer = styled.div<Omit<Props, 'children'>>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${({ inline }) =>
    inline &&
    css`
      display: inline-flex;
    `}
  ${({ wrap, gap }) =>
    (wrap || gap) &&
    css`
      flex-wrap: wrap;
    `}

  ${({ align }) =>
    align &&
    (align === 'start'
      ? css`
          align-items: flex-start;
          justify-content: flex-start;
        `
      : align === 'center'
      ? css`
          align-items: center;
          justify-content: center;
        `
      : css`
          align-items: flex-end;
          justify-content: flex-end;
        `)}

  ${({ directions }) =>
    directions &&
    (directions[0] === 'column'
      ? css`
          @media (min-width: 640px) {
            flex-direction: column;
          }
        `
      : css`
          @media (min-width: 640px) {
            flex-direction: row;
          }
        `)}

  ${({ directions }) =>
    directions &&
    (directions[1] === 'column'
      ? css`
          @media (min-width: 768px) {
            flex-direction: column;
          }
        `
      : css`
          @media (min-width: 768px) {
            flex-direction: row;
          }
        `)}

  ${({ directions }) =>
    directions &&
    (directions[2] === 'column'
      ? css`
          @media (min-width: 1024px) {
            flex-direction: column;
          }
        `
      : css`
          @media (min-width: 1024px) {
            flex-direction: row;
          }
        `)}

  ${({ directions }) =>
    directions &&
    (directions[3] === 'column'
      ? css`
          @media (min-width: 1280px) {
            flex-direction: column;
          }
        `
      : css`
          @media (min-width: 1280px) {
            flex-direction: row;
          }
        `)}

  ${({ directions }) =>
    directions &&
    (directions[4] === 'column'
      ? css`
          @media (min-width: 1536px) {
            flex-direction: column;
          }
        `
      : css`
          @media (min-width: 1536px) {
            flex-direction: row;
          }
        `)}

  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `}

  ${({ gap }) =>
    gap &&
    css`
      --gap: ${gap}rem;
      margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
      width: calc(100% + var(--gap));

      & > * {
        margin: var(--gap) 0 0 var(--gap);
      }
    `}

  ${({ styles }) =>
    styles &&
    css`
      ${parseStyle(styles)}
    `}
`;

function Container({ children, ...props }: Props) {
  return <TwContainer {...props}>{children}</TwContainer>;
}

export { Container, Props as ContainerProps };
