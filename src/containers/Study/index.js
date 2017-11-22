import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './index.less';
import Content from "./Content/content";
import Footer from './Footer/footer';
import Header from "../../components/Header/home_header";
class Study extends Component {
    render() {
        return (
            <div className="study-wrap">
                <Header headerName="学习" bgColor="#fff" fontColor="#000"/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Study)