import React, {Component}  from 'react';
import './nav.less';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Weike2 from '../../Weike-2/weike2';
export default class Nav extends Component {
    render() {
        console.log(1);
        return (
            <div>
                <ul className="nav-wrap">
                    <li className="nav">
                        <Link to="/study/weike2">
                            <i className="iconfont icon-weike"></i>
                            <h3>微课</h3>
                        </Link>
                    </li>
                    <li className="nav">
                        <Link to="/study/tiku">
                            <i className="iconfont icon-tiku"></i>
                            <h3>题库</h3>
                        </Link>
                    </li>
                    <li className="nav">
                        <Link to="/study/shizhan">
                            <i className="iconfont icon-pintu"></i>
                            <h3>实战</h3>
                        </Link>
                    </li>
                    <li className="nav">
                        <Link to="/study/bianji">
                            <i className="iconfont icon-bianjiqiduiqixuanzhong-"></i>
                            <h3>编辑器</h3>
                        </Link>
                    </li>
                </ul>
                <Route path="/study/weike2" exact component={Weike2}/>
            </div>
        )
    }
}