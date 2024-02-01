import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx';
import {applyMiddleware, createStore} from 'redux';
import reducer from './store/reducer.js';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
