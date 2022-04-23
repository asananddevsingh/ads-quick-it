import { FRAMEWORKS, STATE_MANAGERS, MIDDLEWARES } from '../../cliOptions/index.js';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const copyTemplate = (techStack) => {
  const { appName, framework, stateManager, middleware } = techStack;
  const appDirectory = fs.realpathSync(process.cwd());

  let templateName = "react"
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
          }
          break;
        default:
          break;
      }
    } else {
      console.log(chalk.red("STATE MANAGER NOT SUPPORTED"));
    }
  } else {
    console.log(chalk.red("NOT SUPPORTED FRAMEWORK"));
  }

  const source = path.resolve(`${appDirectory}/templates/${templateName}`);
  const destination = path.resolve(appDirectory, appName);

  fs.copy(source, destination)
    .then(() => {
      console.log(
        chalk.green(
          `Template cloned! ${chalk.magenta('installing app dependencies!')}`
        )
      );
    })
    .catch((err) => {
      console.log(chalk.red('An error occurred while copying the folder.'));
      throw new Error(err);
    });
};

export default copyTemplate