import path from 'path';

export const appDirectory = process.cwd()

export const getTemplatePath = (templateName) => {
  return path.join(appDirectory, `templates`, templateName)
};

export const getAppTargetPath = (appName) => {
  return path.join(appDirectory, appName)
};

export const getGitIgnorePath = (templateSourcePath) => {
  return path.join(templateSourcePath, ".gitignore");
};

export const getPackageJsonPath = (templateSourcePath) => {
  return path.join(templateSourcePath, "package.json");
};

const paths = {
  appDirectory,
  getTemplatePath,
  getAppTargetPath,
  getGitIgnorePath,
  getPackageJsonPath,
}

export default paths;