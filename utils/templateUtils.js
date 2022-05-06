import { FRAMEWORKS, STATE_MANAGERS, MIDDLEWARES } from '../cliOptions';
import chalk from 'chalk';
import { makeAppDirectory, writeAppContent, postProcess, showSuccessMessage, getGitIgnoreEntries } from './helperUtils';
import paths from './pathUtils';

export const configureTemplate = (techStack) => {
  const { appName, framework, stateManager, middleware } = techStack;
  let templateName = "react";
  if (framework === FRAMEWORKS.REACT) {
    if (stateManager) {
      switch (stateManager) {
        case STATE_MANAGERS.APOLLO_CLIENT:
          templateName += "-apollo"
          break;
        case STATE_MANAGERS.REACT_REDUX:
          if (middleware) {
            switch (middleware) {
              case MIDDLEWARES.REDUX_THUNK:
                templateName += "-redux-thunk";
                break;
              case MIDDLEWARES.REDUX_SAGA:
                templateName += "-redux-saga";
                break;
              default:
                break;
            }
          } else {
            console.log(chalk.yellow("CREATING APPLICATION WITHOUT MIDDLEWARE"));
          }
          break;
        default:
          break;
      }
    } else {
      console.log(chalk.red("WITHOUT STATE MANAGER"));
    }
  } else {
    console.log(chalk.red("NOT SUPPORTED FRAMEWORK"));
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
  const options = { appName, templateName, templatePath, tartgetPath, }

  if (!makeAppDirectory(tartgetPath)) {
    return;
  }

  const gitIgnorePath = paths.getGitIgnorePath(templatePath)
  const gitIgnoreEntries = getGitIgnoreEntries(gitIgnorePath);

  writeAppContent(templatePath, appName, gitIgnoreEntries);

  if (!postProcess(options)) {
    return;
  }

  showSuccessMessage(options);
}