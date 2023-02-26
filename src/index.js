import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const rootel = document.getElementById("root");
const root = ReactDOM.createRoot(rootel);
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <App/>
    </BrowserRouter>
  </React.StrictMode>
)

