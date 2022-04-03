#! /usr/bin/env node

const chalk = require('chalk');
const prompts = require('prompts');
const {
  FRAMEWORKS,
  frameworkQues,
  themeQues,
  reactQues,
  STATE_MANAGERS,
  stateManagerQues,
  middlewareQues,
} = require('../cliOptions');

(async () => {
  const frameworkResp = await prompts(frameworkQues);
  const { framework } = frameworkResp;
  if (framework === FRAMEWORKS.REACT) {
    const themeResp = await prompts(themeQues);
    const reactResp = await prompts(reactQues);
    const stateManagerResp = await prompts(stateManagerQues);
    const { stateManager } = stateManagerResp;
    let middlewareResp = {};
    if (stateManager === STATE_MANAGERS.REACT_REDUX) {
      middlewareResp = await prompts(middlewareQues);
    }
    console.log(chalk.cyan.bold('\nYour Chosen Tech Stack ::'), {
      ...frameworkResp,
      ...themeResp,
      ...reactResp,
      ...stateManagerResp,
      ...middlewareResp,
    });
  }
})();

// var options = {
//   framework: {
//     react: {
//       withRouter: 'false | <true || false>',
//       jestTest: 'true | <true || false>',
//       reactRedux: {
//         reduxThunk: {},
//         reeduxSaga: {},
//       },
//       apolloClient: {},
//     },
//     angular: {},
//     vue: {},
//   },
// };
