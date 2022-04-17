import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('appRoot');
const root = createRoot(container);
root.render(<App />);
