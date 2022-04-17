import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

const container = document.getElementById('appRoot');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
