export const THEMES = {
  BOOTSTRAP: 'bootstrap',
  MATERIAL_UI: 'mui',
};

const themeQues = [
  {
    type: 'select',
    name: 'theme',
    message: "Select App's theme solution.",
    choices: [
      {
        title: 'Bootstrap',
        value: THEMES.BOOTSTRAP,
        description: 'The most popular front-end framework rebuilt for React.',
        disabled: true,
      },
      {
        title: 'Material UI',
        value: THEMES.MATERIAL_UI,
        description: 'The React UI library you always wanted.',
      },
    ],
    initial: 1,
  },
];

export default themeQues;
