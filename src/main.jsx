/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

import React from 'react';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
); //registerServiceWorker();
