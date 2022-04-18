export const FRAMEWORKS = {
  ANGULAR: 'angular',
  REACT: 'react-js',
  VUE: 'vue-js',
};

const frameworkQues = [
  {
    type: 'select',
    name: 'framework',
    message: "Select App's library or framework.",
    choices: [
      {
        title: 'Angular',
        value: FRAMEWORKS.ANGULAR,
        description: 'Coming soon...',
      },
      {
        title: 'React JS',
        value: FRAMEWORKS.REACT,
        description: 'One of the most popular front-end library.',
      },
      {
        title: 'Vue',
        value: FRAMEWORKS.VUE,
        description: 'Not supported yet.',
        disabled: true,
      },
    ],
    initial: 1,
  },
];

export default frameworkQues;
