import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import DefaultRoute from "../DefaultRoute/DefaultRoute";
const history = createHashHistory();
/******************************************************/
import Home from '../Home/index';
import Course from '../Course/index';
import Study from '../Study/index';
import Profile from '../Profile/index';
import Weike2 from '../Study/Weike-2/weike2'
import './index.less';
/******************************************************/
class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route path='/' exact component={DefaultRoute}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/course' component={Course}/>
                    <Route path='/study' component={Study}/>
                    <Route path='/study/weike2' exact component={Weike2}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </ConnectedRouter>
        )
    }
}
//=>在这里写mapStateToProps
import actions from '../../store/actions';
export default connect(null, actions)(App)