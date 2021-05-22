import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

/**
 * Esto ralliza el render de la aplicación
 */
const _render = <React.StrictMode> <App /> </React.StrictMode>; // Esto es JSX
ReactDOM.render( _render, document.getElementById('my-app') )

reportWebVitals();
