#! /usr/bin/env node

import chalk from 'chalk';
import prompts from 'prompts';
import {
  appNameQues,
  FRAMEWORKS,
  frameworkQues,
  themeQues,
  reactQues,
  STATE_MANAGERS,
  stateManagerQues,
  middlewareQues,
  jestQues,
} from '../cliOptions/index.js';

(async () => {
  const appResp = await prompts(appNameQues);
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

    const jestResp = await prompts(jestQues);

    const techStack = {
      ...appResp,
      ...frameworkResp,
      ...themeResp,
      ...reactResp,
      ...stateManagerResp,
      ...middlewareResp,
      ...jestResp,
    };

    console.log(chalk.cyan.bold('\nYour Chosen Tech Stack ::'), techStack);
    // copyTemplate(techStack);
  }
})();

// https://openbase.com/categories/js/best-nodejs-html-templating-engine-libraries
// https://flaviocopes.com/how-to-replace-all-occurrences-string-javascript/
// https://medium.com/@pongsatt/how-to-build-your-own-project-templates-using-node-cli-c976d3109129
// https://github.com/pongsatt/mycli
// Template Engine: https://expressjs.com/en/advanced/developing-template-engines.html
// https://medium.com/ableneo/improve-your-javascript-developer-experience-by-generating-code-d10f7f2e9b6d

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
