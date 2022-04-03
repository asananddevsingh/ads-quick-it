const MIDDLEWARES = {
  REDUX_THUNK: 'redux-thunk',
  REDUX_SAGA: 'redux-saga',
};

const middlewareQues = [
  {
    type: 'select',
    name: 'middleware',
    message: "Select App's middleware.",
    choices: [
      {
        title: 'Redux-Thunk',
        value: MIDDLEWARES.REDUX_THUNK,
        description: 'Redux-thunk, limited features but easy to start.',
      },
      {
        title: 'Redux-Saga',
        value: MIDDLEWARES.REDUX_SAGA,
        description: 'Redux-saga, rich features might have learning curve.',
      },
    ],
    initial: 1,
  },
];

module.exports = {
  MIDDLEWARES,
  middlewareQues,
};
