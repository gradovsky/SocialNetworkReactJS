import SocialJSApp from './App';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <SocialJSApp/>, document.getElementById('root'));
serviceWorker.unregister();









