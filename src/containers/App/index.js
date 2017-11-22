import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import Tab from '../../components/Tab/index'
const history = createHashHistory();
/******************************************************/
import Home from '../Home/index';
import Course from '../Course/index';
import Study from '../Study/index';
import Profile from '../Profile/index';
import './index.less';
import Detail from "../Course/Detail/index";
/******************************************************/
class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route path='/' exact component={Home}/>
                    <Route path='/course' component={Course}/>
                    <Route path='/study' component={Study}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/detail/:id' component={Detail}/>

                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
//=>在这里写mapStateToProps
import actions from '../../store/actions';
export default connect(null, actions)(App)