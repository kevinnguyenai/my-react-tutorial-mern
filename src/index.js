import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import AppHello from './AppHello'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppHello />, document.getElementById('root'));
registerServiceWorker();
