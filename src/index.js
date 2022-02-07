import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers';
import { Provider } from 'react-redux'
import HeaderComponent from './components/HeaderComponent/header-component';
const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HeaderComponent></HeaderComponent>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
