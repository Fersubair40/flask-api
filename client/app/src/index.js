import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';


const history = createBrowserHistory();



ReactDOM.render(
    <Router history={history}>
        <App history={History}/>
    </Router>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-P
