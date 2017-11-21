/*
 * 该文件请勿动
 */
import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import Store from './store/index';

import App from './containers/App/index';
import Header from './components/Header/home_header';
import Lunbotu from './components/Lunbotu/Lunbotu';
import Content from './containers/Home/index'
import './common/style/reset.less';

let images=[
    require('./components/Lunbotu/2.jpg'),
    require('./components/Lunbotu/1.jpg'),
    require('./components/Lunbotu/2.jpg')
];
{/*<Lunbotu images={images}/>,*/}

ReactDOM.render(
    <Content/>,
    document.getElementById('app')
);