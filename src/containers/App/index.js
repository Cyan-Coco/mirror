import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'
import Tab from '../../components/Tab/index'
const history = createHashHistory();
/******************************************************/
import Home from '../Home/index';
import HomeDetail from '../Home/Detail/Detail';
import Course from '../Course/index';
import Study from '../Study/index';
import Profile from '../Profile/index';

import Weike2 from '../Study/Weike-2/weike2'
import Tiku2 from '../Study/Tiku-2/Tiku2'
import Shizhan2 from '../Study/Shizhan2/shizhan2';

import Login from '../Login/index';
import Register from '../Register/index';

import './index.less';
import Detail from "../Course/Detail/index";
import Search from "../Course/Search/index";

/******************************************************/
class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div className="App">
                    <Route path='/' exact component={Home}/>
                    <Route path='/homedetail/:title' component={HomeDetail}/>
                    {/*<Route path='/homedetail' component={HomeDetail}/>*/}
                    <Route path='/course' component={Course}/>
                    <Route exact path='/study' component={Study}/>
                    <Route path='/study/weike2' exact component={Weike2}/>
                    <Route path='/study/tiku2' exact component={Tiku2}/>
                    <Route path='/study/shizhan2' exact component={Shizhan2}/>
                    <Route path='/profile' component={Profile}/>

                    <Route path='/detail/:coursetype' component={Detail}/>
                    <Route path='/search' component={Search}/>

                    <Tab/>

                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>

                </div>
            </ConnectedRouter>
        )
    }
}
//=>在这里写mapStateToProps
import actions from '../../store/actions';
export default connect(null, actions)(App)