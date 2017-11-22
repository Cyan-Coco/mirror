import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';

class Register extends Component {
    render() {
        return (
            <div className="contain">
                <div className="header-reg">注册</div>
                <div className="con-form">
                    <p><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入手机号"/></p>
                    <p><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入短信验证码"/>
                        <span>获取短信验证码</span>
                    </p>
                    <p><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="密码"/></p>
                    <p><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="确认密码"/></p>
                </div>
                <div className="btn">注册</div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Register)