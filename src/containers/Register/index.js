import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import Header from "../../components/Header/home_header";
import  {fetchSignup}  from '../../common/api/profile';

class Register extends Component {
    constructor() {
        super()
        this.state = {isLiked: ''}
    }

    queryRandomCode = () => {
        let codeBox = document.getElementById('codeBox');
        var codeArea = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var result = '';
        while (result.length < 4) {
            var ran = Math.round(Math.random() * 61);
            var cur = codeArea[ran];
            if (result.indexOf(cur) === -1) {
                result += cur;
            }
        }
        this.setState({
            isLiked: result,
        })
        codeBox.innerHTML = result

    }
    //页面加载完成后,获取到的初始的四位数的验证码
    componentDidMount() {
        this.queryRandomCode();
    }

    reg = () => {
        let phone = this.phone.value;
        let reg = /^1\d{10}$/;
        let code = this.code.value;
        let codeBox = document.getElementById('codeBox').innerHTML;//四个验证码
        let pwd = this.password.value;
        let truepwd = this.truepassword.value;
        if (phone == '') {
            alert('手机号不能为空');
            return;
        } else {
            if (!reg.test(phone)) {
                alert('手机号错误');
                return;
            }
        }
        if (code == '') {
            alert('验证码不能为空');
            return;
        }
        if (code != codeBox) {
            alert('验证码错误');
            return;
        }


        if (pwd != truepwd) {
            alert('密码错误');
            return;
        }
        if (pwd == '') {
            alert('密码不能为空');
            return;
        }
        if (truepwd == '') {
            alert('确认密码不能为空');
            return;
        }

        fetchSignup({userName: phone, userPwd: pwd}).then(data => {
            if (data.code == 0) {
                alert(data.message);
            } else {
                alert(data.message);
                window.location.href='http://localhost:8080/#/login';
            }
        })

    }


    render() {
        return (
            <div className="register-contain">
                {/*<div className="header-reg">注册</div>*/}
                <Header headerName="注册"/>
                <div className="register-conform">
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入手机号" ref={input => this.phone = input}
                               className="register-input"/></p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="请输入验证码" ref={input => this.code = input}
                               className="register-input"/>
                        <span className="register-span" id="codeBox"
                              onClick={this.queryRandomCode}></span>
                    </p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="密码" ref={input => this.password = input}
                               className="register-input"/></p>
                    <p className="register-p"><i className="iconfont icon-book"></i>
                        <input type="text" placeholder="确认密码" ref={input => this.truepassword = input}
                               className="register-input"/></p>
                </div>
                <div className="register-btn" onClick={this.reg}>注册</div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Register)