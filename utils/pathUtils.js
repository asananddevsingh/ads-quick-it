const path = require('path');

const appDirectory = process.cwd();

const getTemplatePath = (templateName) => {
  return path.join(appDirectory, `templates`, templateName);
};

const getAppTargetPath = (appName) => {
  return path.join(appDirectory, appName);
};

const getGitIgnorePath = (templateSourcePath) => {
  return path.join(templateSourcePath, '.gitignore');
};

const getPackageJsonPath = (templateSourcePath) => {
  return path.join(templateSourcePath, 'package.json');
};

module.exports = {
  appDirectory,
  getTemplatePath,
  getAppTargetPath,
  getGitIgnorePath,
  getPackageJsonPath,
};
