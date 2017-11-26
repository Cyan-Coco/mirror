import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';
import Header from "../../components/Header/home_header";
import  {fetchSign}  from '../../common/api/profile';
class Profile extends Component {
    rem=()=>{
        localStorage.clear('userName');
        alert('退出成功');
        window.location.reload();
    }

    qiandao=()=>{
        let  user=localStorage.getItem('userName');
        let  qian=document.getElementById('qiandao');

        fetchSign(user).then(data => {
            if (data.code == 0) {//0代表失败
              alert(data.message);
              qian.innerHTML='已签到'
            } else {
               localStorage.setItem('exp',data.user.userExp);
               let lv=Math.floor(data.user.userExp/100);
               // let jdt=(data.user.userExp-lv*100)/100;//这是进度条的长度
               // let  jdtgshi=jdt*100+'%';
                let jdt=((data.user.userExp-lv*100)/100)*100+'%';//这是进度条的长度

                document.getElementById('jindutiao').style.width=jdt;
                localStorage.setItem('jdt',jdt);
                localStorage.setItem('userlv',lv);
                qian.innerHTML='已签到';
                // window.location.reload();
                alert(data.message);
            }
        })
    }

    render() {
        return (
            <div className="mains">
                <div className="header">
                    <Header  headerName="我的"/>
                    <div className="imglogin">
                        {localStorage.getItem('userimg')?<img src={localStorage.getItem('userimg') } />:   <img src={require('../../img/logo.png')} />}

                        <i className="iconfont icon-VIP"></i>
                        {localStorage.getItem('userId')?<div className="xuehao">学号:{localStorage.getItem('userId')}</div>:<div className="loginreg">
                            <Link to="/login"> 登录</Link>
                            <span className="shu">|</span>
                            <Link to="/register">注册</Link>
                        </div>}

                    </div>
                </div>
                <div className="qiandao">
                    <i className="iconfont icon-qiandao"></i>
                    <div className="lv">
                        <div>LV:{localStorage.getItem('userlv')}</div>
                        <div>EXP:{localStorage.getItem('exp')}</div>
                        <div>
                            <div className="jindutiao">
                                <div className="jdtcolor" id="jindutiao"></div>
                            </div>

                        </div>
                    </div>
                    <div className="qiandao-btn" onClick={this.qiandao} id="qiandao">
                        签到
                    </div>
                </div>

                <div className="first-list">
                    <div className="one">
                        <i className="iconfont icon-VIP"></i>
                        <span  >赞助获取VIP</span>
                    </div>
                    <div className="one">
                        <i className="iconfont icon-zhanghu"></i>
                        <span>我的账户</span>
                    </div>
                    <div className="one">
                        <i className="iconfont icon-xiaoxi"></i>
                        <span className="nobo">消息通知</span></div>
                </div>


                <div className="second">
                    <div className="one"><i className="iconfont icon-xiazai"></i><span>我的离线教程</span></div>
                    <div className="one"><i className="iconfont icon-shoucang"></i><span>我的收藏</span></div>
                    <div className="one"><i className="iconfont icon-book"></i><span className="nobo">最近学习的教程</span>
                    </div>
                </div>

                <div className="three">
                    <div className="one"><i className="iconfont icon-guanyu"></i><span>关于我们</span></div>
                    <div className="one"><i className="iconfont icon-feedback"></i><span className="nobo">意见反馈</span></div>
                    {
                   localStorage.getItem('userId')?  <div className="one"><i className="iconfont icon-guanyu"></i><span onClick={this.rem}>退出登录</span></div>:null
                    }



                </div>

                <div className="footer-list">底部</div>

            </div>

        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Profile)