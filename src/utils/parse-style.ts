import { CSSProperties } from 'styled-components';
import { camelCaseToKebabCase } from './camel-case-to-kebab-case';

function parseStyle(style: CSSProperties) {
  return Object.keys(style).reduce((properties, property) => {
    const value = style[property as keyof CSSProperties];
    const validProperty = camelCaseToKebabCase(`${property}`);
    return properties + `${validProperty}: ${value};\n`;
  }, '');
}

export { parseStyle };
