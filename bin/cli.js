#! /usr/bin/env node

const chalk = require('chalk');
const prompts = require('prompts');
const {
  appNameQues,
  FRAMEWORKS,
  frameworkQues,
  themeQues,
  reactQues,
  STATE_MANAGERS,
  stateManagerQues,
  middlewareQues,
  jestQues,
} = require('../cliOptions');
const { configureTemplate } = require('../utils');

(async () => {
  const appResp = await prompts(appNameQues);
  const frameworkResp = await prompts(frameworkQues);
  const { framework } = frameworkResp;
  let techStack = {
    ...appResp,
    ...frameworkResp,
  };

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

    techStack = {
      ...techStack,
      ...themeResp,
      ...reactResp,
      ...stateManagerResp,
      ...middlewareResp,
      ...jestResp,
    };

    console.log(chalk.cyan.bold('\nYour Chosen Stack ::'), techStack);
    console.log(chalk.green('\nStarted creating application...'));

    configureTemplate(techStack);
  } else if (framework === FRAMEWORKS.ANGULAR) {
    configureTemplate(techStack);
  }
})();

// https://openbase.com/categories/js/best-nodejs-html-templating-engine-libraries
// https://flaviocopes.com/how-to-replace-all-occurrences-string-javascript/
// https://medium.com/@pongsatt/how-to-build-your-own-project-templates-using-node-cli-c976d3109129
// https://github.com/pongsatt/mycli
// Template Engine: https://expressjs.com/en/advanced/developing-template-engines.html
// https://medium.com/ableneo/improve-your-javascript-developer-experience-by-generating-code-d10f7f2e9b6d
// Plop: https://github.com/malerba118/react-starter-cli
