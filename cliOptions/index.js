const appNameExports = require('./appNameQues');
const frameworkExports = require('./frameworkQues');
const middlewareExports = require('./middlewareQues');
const reactExports = require('./reactQues');
const stateManagerExports = require('./stateManagerQues');
const themeExports = require('./themeQues');
const jestExports = require('./jestQues');

module.exports = {
  ...appNameExports,
  ...frameworkExports,
  ...middlewareExports,
  ...reactExports,
  ...stateManagerExports,
  ...themeExports,
  ...jestExports,
};
