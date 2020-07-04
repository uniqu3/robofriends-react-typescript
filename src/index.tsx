import React from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';
import './index.css';
import App from 'containers/App';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
