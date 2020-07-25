import React from 'react';
import ReactDom from 'react-dom';
import '@babel/polyfill';
import './index.css';
import App from './App';

const root = document.getElementById('root');
ReactDom.render(<App />, root);
