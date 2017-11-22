import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './index.less';
import Content from "./Content/content";
import Footer from './Footer/footer';
class Study extends Component {
    render() {
        return (
            <div className="study-wrap">
                <Content/>
                <Footer/>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Study)