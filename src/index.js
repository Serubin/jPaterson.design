import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'


ReactDOM.render((
	<Router onUpdate={() => window.scrollTo(0, 0)}>
		<App />
	</Router>
), document.getElementById('root'));
registerServiceWorker();
