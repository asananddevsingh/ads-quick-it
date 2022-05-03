import { FRAMEWORKS, STATE_MANAGERS, MIDDLEWARES } from '../cliOptions';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { runCommand } from './githubUtils';
import parse from 'parse-gitignore';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const copyTemplate = (techStack) => {
  const { appName, framework, stateManager, middleware } = techStack;
  const appDirectory = fs.realpathSync(process.cwd());

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
            console.log(chalk.red("WITHOUT MIDDLEWARE"));
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

  const templateSource = path.resolve(__dirname, `../templates`, templateName);
  const destination = path.resolve(appDirectory, appName);

  const gitIgnorePath = path.resolve(templateSource, ".gitignore");

  fs.readFile(gitIgnorePath, { encoding: 'utf-8' }, function (err, gitIgnoreContent) {
    if (!err) {
      const gitIgnoreEntries = parse(gitIgnoreContent);
      const templateContent = fs.readdirSync(templateSource);
      console.log('templateContent', templateContent);

      templateContent.forEach((file) => {
        const origFilePath = path.join(templateSource, file);
        const stats = fs.statSync(origFilePath);
        const ignoreFileIndex = gitIgnoreEntries.findIndex(gitIgn => {
          var gitIgnRegEx = new RegExp(gitIgn);
          var fileRegEx = new RegExp(file)
          return gitIgnRegEx.test(fileRegEx);
        })

        if (ignoreFileIndex === -1) {
          console.log('templateSource', templateSource);
          console.log('origFilePath', origFilePath);

          // templateSource D:\Anand Dev Singh\Toolchains\ads-starter-kit\templates\react-apollo
          // origFilePath D:\Anand Dev Singh\Toolchains\ads-starter-kit\templates\react-apollo\.gitignore
          // destination D:\Anand Dev Singh\toolchains\abcd

          const copyDest = path.join(destination, file)
          console.log('copyDest', copyDest);
          fs.copy(templateSource, copyDest)
            .then(() => {
              console.log(chalk.green(`Copied ${file}.`));
            })
            .catch((err) => {
              console.log(chalk.redBright(`An error occurred while copying the ${file}.`));
              throw new Error(err);
            });
        } else {
          console.log('ignoring', file);
        }
      });
    } else {
      console.log("ERROR READING .GITIGNORE FILE::", err);
    }
  });



  // fs.copy(source, destination)
  //   .then(() => {
  //     console.log(chalk.green(`Template cloned! ${chalk.magenta('installing app dependencies.')}`));

  //     const installDepsCommand = `cd ${appName} && yarn install`;
  //     const depsInstalled = runCommand(installDepsCommand);

  //     if (!depsInstalled) {
  //       process.exit(-1);
  //     }

  //     console.log(chalk.green(`Congratulations! You are ready.`));
  //     console.log(`cd ${chalk.cyan(appName)} && run ${chalk.cyan('yarn start')} `);

  //   })
  //   .catch((err) => {
  //     console.log(chalk.redBright('An error occurred while copying the folder.'));
  //     console.log(chalk.redBright('Source::', source));
  //     console.log(chalk.redBright('Destination::', destination));

  //     throw new Error(err);
  //   });
};