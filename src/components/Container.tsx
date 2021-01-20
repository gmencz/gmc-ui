import React, { CSSProperties, ReactNode } from 'react';
import tw, { css, styled } from 'twin.macro';
import { parseStyle } from '../utils';

type Gap = 'sm' | 'md' | 'lg';
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
   * Makes the container take up as much space as the content takes up, by default, the container
   * will take up as much space as possible.
   */
  inline: boolean;

  /**
   * Defines the gap between the direct items inside the container.
   */
  gap: Gap;

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
  ${tw`flex flex-col flex-nowrap`}

  ${({ inline }) => inline && tw`inline-flex`}
  ${({ wrap, gap }) => (wrap || gap) && tw`flex-wrap`}

  ${({ align }) =>
    align &&
    (align === 'start'
      ? css`
          ${tw`items-start justify-start`}
        `
      : align === 'center'
      ? css`
          ${tw`items-center justify-center`}
        `
      : css`
          ${tw`items-end justify-end`}
        `)}

  ${({ directions }) =>
    directions &&
    (directions[0] === 'column' ? tw`sm:flex-col` : tw`sm:flex-row`)}

  ${({ directions }) =>
    directions &&
    (directions[1] === 'column' ? tw`md:flex-col` : tw`md:flex-row`)}

  ${({ directions }) =>
    directions &&
    (directions[2] === 'column' ? tw`lg:flex-col` : tw`lg:flex-row`)}

  ${({ directions }) =>
    directions &&
    (directions[3] === 'column' ? tw`xl:flex-col` : tw`xl:flex-row`)}

  ${({ directions }) =>
    directions &&
    (directions[4] === 'column' ? tw`2xl:flex-col` : tw`2xl:flex-row`)}

  ${({ row }) => row && tw`flex-row`}

  ${({ gap }) =>
    gap &&
    (gap === 'sm'
      ? css`
          --gap: 1rem;
          margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
          width: calc(100% + var(--gap));

          & > * {
            margin: var(--gap) 0 0 var(--gap);
          }
        `
      : gap === 'md'
      ? css`
          --gap: 2rem;
          margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
          width: calc(100% + var(--gap));

          & > * {
            margin: var(--gap) 0 0 var(--gap);
          }
        `
      : css`
          --gap: 3rem;
          margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
          width: calc(100% + var(--gap));

          & > * {
            margin: var(--gap) 0 0 var(--gap);
          }
        `)}

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
