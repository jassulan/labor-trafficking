import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/responsiveXS.css';
import './css/responsiveSM.css';
import './css/responsiveMD.css';
import './css/responsiveLG.css';
import './css/assessment.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
