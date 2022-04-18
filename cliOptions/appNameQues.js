const appNameQues = [
  {
    type: 'text',
    name: 'appName',
    message: 'Application name?',
    validate: (appName) => {
      if (!appName) {
        return 'Please enter a valid application name.';
      }
      return true;
    },
  },
];

export default appNameQues;
