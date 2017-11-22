import React, {Component} from 'react';
import Header from '../../components/Header/home_header';
import Tab from './Tab/Tab';
import Main from './Home_main/Main';
import {connect} from 'react-redux';
import './index.less';

export default class Home extends Component {
    render() {
        return (

            <div className="home_content">
                <Header headerName="首页"/>
                <Tab/>
                <div className="tab_replace">
                    <Main/>
                </div>

            </div>
        )
    }
}
//mapStateToProps
/*
 import actions from '../../store/actions'
 export default connect(null,actions)(Home)*/
