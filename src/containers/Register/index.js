import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import Header from "../../components/Header/home_header";

class Register extends Component {
    render() {
        return (
            <div className="register-contain">
                {/*<div className="header-reg">注册</div>*/}
                <Header headerName="注册"/>
                <div className="register-conform">
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入手机号" className="register-input"/></p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入验证码" className="register-input"/>
                        <span className="register-span">获取验证码</span>
                    </p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="密码" className="register-input"/></p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="确认密码" className="register-input"/></p>
                </div>
                <div className="register-btn">注册</div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Register)