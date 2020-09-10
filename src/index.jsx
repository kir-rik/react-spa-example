import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(<AppWithRouter />, document.getElementById('root'));
