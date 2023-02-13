const { FRAMEWORKS, STATE_MANAGERS, MIDDLEWARES } = require('../cliOptions');
const chalk = require('chalk');
const {
  makeAppDirectory,
  writeAppContent,
  postProcess,
  showSuccessMessage,
  getGitIgnoreEntries,
} = require('./helperUtils');
const paths = require('./pathUtils');

const configureTemplate = (techStack) => {
  const { appName, framework, stateManager, middleware } = techStack;
  let templateName = 'react';
  if (framework === FRAMEWORKS.REACT) {
    if (stateManager) {
      switch (stateManager) {
        case STATE_MANAGERS.APOLLO_CLIENT:
          templateName += '-apollo';
          break;
        case STATE_MANAGERS.REACT_REDUX:
          if (middleware) {
            switch (middleware) {
              case MIDDLEWARES.REDUX_THUNK:
                templateName += '-redux-thunk';
                break;
              case MIDDLEWARES.REDUX_SAGA:
                templateName += '-redux-saga';
                break;
              default:
                break;
            }
          } else {
            console.log(chalk.yellow('CREATING APPLICATION WITHOUT MIDDLEWARE'));
          }
          break;
        default:
          break;
      }
    } else {
      console.log(chalk.red('WITHOUT STATE MANAGER'));
    }
  }
  if (framework === FRAMEWORKS.ANGULAR) {
    templateName = 'angular';
  } else {
    console.log(chalk.red('NOT SUPPORTED FRAMEWORK'));
  }

  if (appName) {
    createApp(templateName, appName);
  } else {
    console.log(chalk.red(`\n[NO_APP_NAME]:: Application name not found, please retry.`));
  }
};

const createApp = (templateName, appName) => {
  const templatePath = paths.getTemplatePath(templateName);
  const tartgetPath = paths.getAppTargetPath(appName);
  const options = { appName, templateName, templatePath, tartgetPath };

  if (!makeAppDirectory(tartgetPath)) {
    return;
  }

  const gitIgnorePath = paths.getGitIgnorePath(templatePath);
  const gitIgnoreEntries = getGitIgnoreEntries(gitIgnorePath);

  // Adding .gitignore to the list as this file is not getting published to npm.
  writeAppContent(templatePath, appName, [...gitIgnoreEntries, '.gitignore']);

  if (!postProcess(options)) {
    return;
  }

  showSuccessMessage(options);
};

module.exports = {
  configureTemplate,
};
