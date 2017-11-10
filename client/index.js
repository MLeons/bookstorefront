import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'

import app from './components/app';

ReactDOM.render(<Router routes={app} history={browserHistory} />, document.getElementById('app'));

