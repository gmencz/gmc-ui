const { resolve } = require('path');

module.exports = {
  setupFilesAfterEnv: ['./test/setup.ts'],
  moduleNameMapper: {
    '\\.css$': resolve(__dirname, './test/styles-mock.js'),
  },
};
