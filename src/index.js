import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/tailwindStyles.css';
import './assets/styles/Custom.css';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode> 
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL} />
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
