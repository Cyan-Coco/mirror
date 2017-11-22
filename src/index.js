/*
 * 该文件请勿动
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store/index';
import App from './containers/App/index';
import './common/style/reset.min.less';

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);