import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions'
class Tab extends Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <div className="tabs">
        <NavLink to="/" exact>
          <i className="iconfont icon-shouye"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to="/course">
          <i className="iconfont icon-kuaijiejiaocheng"></i>
          <span>教程库</span>
        </NavLink>
        <NavLink to="/study">
          <i className="iconfont icon-xuexiqia"></i>
          <span>学习</span>
        </NavLink>
        <NavLink to="/profile">
          <i className="iconfont icon-wode1"></i>
          <span>我的</span>
        </NavLink>
      </div>
    )
  }
}
export default Tab
