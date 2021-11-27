const path = require('path');

module.exports = {
  passWithNoTests: true,
  rootDir: path.resolve(__dirname),
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
