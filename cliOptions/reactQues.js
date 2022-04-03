const reactQues = [
  {
    type: 'toggle',
    name: 'router',
    message: 'Want to include react-router?',
    initial: false,
    active: 'Yes',
    inactive: 'No',
  },
  {
    type: 'toggle',
    name: 'unitTest',
    message: 'Want to include jest testing framework?',
    initial: true,
    active: 'Yes',
    inactive: 'No',
  },
];

module.exports = {
  reactQues,
};
