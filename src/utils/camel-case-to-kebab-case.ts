function camelCaseToKebabCase(camelCaseStr: string) {
  return camelCaseStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export { camelCaseToKebabCase };
