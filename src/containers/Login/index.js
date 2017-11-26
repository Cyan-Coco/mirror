import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import  {fetchSignin}  from '../../common/api/profile';
class Login extends Component {
    login = ()=>{
        let phone = this.phone.value;
        let pwd = this.password.value;
        let reg = /^1\d{10}$/;
        if (phone == '') {
            alert('手机号不能为空');
            return;
        } else {
            if (!reg.test(phone)) {
                alert('手机号错误');
                return;
            }
        }
        if (pwd == '') {
            alert('密码不能为空');
            return;
        }
        fetchSignin({userName: phone, userPwd: pwd}).then(data => {
            if (data.code == 0) {//0代表失败
                alert(data.message);
            } else {
                localStorage.setItem('userName',phone);
                // console.log(data);
                localStorage.setItem('userId',data.user.userId);
                localStorage.setItem('userimg',data.user.userImg);
                alert(data.message);
                window.location.href='/';
            }
        })
    }
    render() {
        return (
            <div className="login-contain">
                <div className="login-header">登录</div>
                <div className="login-con">
                    <div className="login-coninput">
                        <div className="login-input1">
                            <i className="iconfont icon-book"></i>
                            <input type="text"   ref={input => this.phone = input}  placeholder="手机号" className="login-inputs"/>
                        </div>
                        <div className="login-input2">
                            <i className="iconfont icon-book"></i>
                            <input type="password"   ref={input => this.password = input}  placeholder="密码" className="login-inputs"/>
                        </div>
                    </div>
                    <div className="login-button"  onClick={this.login}>登录</div>
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