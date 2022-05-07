const STATE_MANAGERS = {
  APOLLO_CLIENT: 'apollo-client',
  REACT_REDUX: 'react-redux',
  NOT_APPLICABLE: null,
};

const stateManagerQues = [
  {
    type: 'select',
    name: 'stateManager',
    message: "Select App's state manager.",
    choices: [
      {
        title: 'Apollo Client',
        value: STATE_MANAGERS.APOLLO_CLIENT,
        description: 'No additional middleware is needed.',
      },
      {
        title: 'React-Redux',
        value: STATE_MANAGERS.REACT_REDUX,
        description: 'redux-thunk or redux-saga middleware will be needed.',
      },
      {
        title: 'N/A',
        value: STATE_MANAGERS.NOT_APPLICABLE,
        description: 'No App state manager is needed.',
      },
    ],
    initial: 0,
  },
];

module.exports = {
  STATE_MANAGERS,
  stateManagerQues,
};
