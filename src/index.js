import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import ShoesService from './service/service'
import { ShoesstoreServiceProvider } from './components/shoesstore-service-context'
import store from './store'
import './index.css'

const shoesService = new ShoesService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ShoesstoreServiceProvider value={shoesService}>
        <Router>
          <App />

        </Router>
      </ShoesstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);