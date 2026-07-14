/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

const isMetaMaskExtensionError = event => {
  const reason = event && event.reason;
  const message = event && (event.message || (reason && reason.message) || String(reason || ''));
  const filename = event && event.filename;
  const stack = reason && reason.stack ? reason.stack : '';
  const source = `${filename || ''}${stack || ''}`;

  return (
    message.indexOf('Failed to connect to MetaMask') !== -1 &&
    source.indexOf('chrome-extension://') !== -1
  );
};

window.addEventListener('error', event => {
  if (isMetaMaskExtensionError(event)) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);

window.addEventListener('unhandledrejection', event => {
  if (isMetaMaskExtensionError(event)) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
