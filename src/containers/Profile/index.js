import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';
class Profile extends Component {
    render() {
        return (
            <div className="mains">
                <div className="header">
                    <div className="myheader">我的</div>
                    <div className="imglogin">
                        <img src={require('../../img/logo.png')} alt=""/>
                        <i className="iconfont icon-book"></i>
                        <div className="loginreg">
                            <Link to="/login">登录</Link>
                            <span className="shu">|</span>
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                </div>
                <div className="qiandao">
                    <i className="iconfont icon-book"></i>
                    <div className="lv">
                        <p>LV:</p>
                        <p>EXP:</p>
                        <p>
                            <div className="jindutiao"></div>
                        </p>
                    </div>
                    <div className="qiandao-btn">
                        签到
                    </div>
                </div>

                <div className="first-list">
                    <div className="one">
                        <i className="iconfont icon-book"></i>
                        <span>赞助获取VIP</span>
                    </div>
                    <div className="one">
                        <i className="iconfont icon-book"></i>
                        <span>我的账户</span>
                    </div>
                    <div className="one">
                        <i className="iconfont icon-book"></i>
                        <span className="nobo">消息通知</span></div>
                </div>


                <div className="second">
                    <div className="one"><i className="iconfont icon-book"></i><span>我的离线教程</span></div>
                    <div className="one"><i className="iconfont icon-book"></i><span>我的收藏</span></div>
                    <div className="one"><i className="iconfont icon-book"></i><span className="nobo">最近学习的教程</span>
                    </div>
                </div>

                <div className="three">
                    <div className="one"><i className="iconfont icon-book"></i><span>关于我们</span></div>
                    <div className="one"><i className="iconfont icon-book"></i><span className="nobo">意见反馈</span></div>
                </div>

                <div className="footer-list">底部</div>

            </div>

        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Profile)