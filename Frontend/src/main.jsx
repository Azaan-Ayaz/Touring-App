import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {RouterProvider,} from "react-router-dom"
import Router from '../src/Router/route.jsx'
import { BrowserRouter } from "react-router-dom";
import { store ,persistManager} from '../redux/store/index.js'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistManager}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  {/* </React.StrictMode> */}
)
