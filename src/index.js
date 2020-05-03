import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import reducer from './reducers/index';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
