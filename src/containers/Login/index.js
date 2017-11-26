import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';

class Login extends Component {
    render() {
        return (
            <div className="login-contain">
                <div className="login-header">登录</div>
                <div className="login-con">
                    <div className="login-coninput">
                        <div className="login-input1">
                            <i className="iconfont icon-book"></i>
                            <input type="text"  placeholder="手机号" className="login-inputs"/>
                        </div>
                        <div className="login-input2">
                            <i className="iconfont icon-book"></i>
                            <input type="password" placeholder="密码" className="login-inputs"/>
                        </div>
                    </div>
                    <div className="login-button">登录</div>
                    <div className="login-fontinfo">使用QQ,微信等快捷登录的用户请至WEB官网绑定手机后可使用手机号码登录</div>
                </div>
                <div className="login-pwd">
                    <span>忘记密码</span>
                    <span className="login-shu">|</span>
                    <span>注册加入</span>
                </div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Login)