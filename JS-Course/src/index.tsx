import React from 'react';
import ReactDOM from 'react-dom';
import {sum} from './03-test/03';
import {App} from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {User} from './06-callbacks/06.callback';

var a = sum;

ReactDOM.render(<User/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
