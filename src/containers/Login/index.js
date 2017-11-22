import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';

class Login extends Component {
    render() {
        return (
            <div className="contain">
                <div className="header">登录</div>
                <div className="con">
                    <div className="coninput">
                        <div className="input1">
                            <i className="iconfont icon-book"></i>
                            <input type="text" placeholder="手机号"/>
                        </div>
                        <div className="input2">
                            <i className="iconfont icon-book"></i>
                            <input type="text" placeholder="密码"/>
                        </div>
                    </div>
                    <div className="login-button">登录</div>
                    <div className="font-info">使用QQ,微信等快捷登录的用户请至WEB官网绑定手机后可使用手机号码登录</div>
                </div>
                <div className="pwd">
                    <span>忘记密码</span>
                    <span className="shu">|</span>
                    <span>注册加入</span>
                </div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Login)