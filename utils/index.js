const templateUtils = require('./templateUtils');
const githubUtils = require('./githubUtils');
const helperUtils = require('./helperUtils');
const pathUtils = require('./pathUtils');

module.exports = {
  ...templateUtils,
  ...githubUtils,
  ...helperUtils,
  ...pathUtils,
};
