
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import store from './utils/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)