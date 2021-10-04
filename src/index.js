import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CanvasProvider } from './canvasContext';

ReactDOM.render(
  <CanvasProvider>
    <App />
  </CanvasProvider>,
  document.getElementById('root')
);
