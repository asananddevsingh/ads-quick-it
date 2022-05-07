const path = require('path');

const getTemplatePath = (templateName) => {
  return path.resolve(__dirname, `../templates`, templateName);
};

const getAppTargetPath = (appName) => {
  return path.resolve(process.cwd(), appName);
};

const getGitIgnorePath = (templateSourcePath) => {
  return path.resolve(templateSourcePath, '.gitignore');
};

const getPackageJsonPath = (templateSourcePath) => {
  return path.resolve(templateSourcePath, 'package.json');
};

const getWriteFileOrDirPath = (appName, file) => {
  return path.resolve(process.cwd(), appName, file);
};

module.exports = {
  getTemplatePath,
  getAppTargetPath,
  getGitIgnorePath,
  getPackageJsonPath,
  getWriteFileOrDirPath,
};
