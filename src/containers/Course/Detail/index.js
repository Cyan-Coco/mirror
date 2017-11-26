import React, {Component} from 'react';
import './index.less'
import {fetchBook,addCollect} from '../../../common/api/course'
import Dialog from "../Dialog/index";
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {flag: true,book:{},isShow:false,isShowT:false};
    }
    handleClick = () => {
        if (this.state.flag) {
            window.history.back();
            // window.location.href='https://www.baidu.com'
        } else {
            this.refs.headerT.style.left = '0';
            this.refs.contentT.style.left = '0';
            this.refs.headerT.style.transitionDuration = '1s';
            this.refs.contentT.style.transitionDuration = '1s';
            this.setState({flag: true});
        }
    };
    showMenu = () => {
        this.refs.headerT.style.left = '5.3rem';
        this.refs.contentT.style.left = '5.3rem';
        this.refs.headerT.style.transitionDuration = '1s';
        this.refs.contentT.style.transitionDuration = '1s';
        this.setState({flag: false});
    };
    handleDialog=()=>{
        this.setState({isShow:false,isShowT:false})
    };
    handleDownload=()=>{
        this.setState({isShowT:false,isShow:true})
    };
    collectBook=(book)=>{
        //如果没有登录就弹出请先登录，如果登录了就可以收藏了，
        let id=localStorage.getItem('userId');
        console.log(id);
        if(id){
                this.refs.collect.innerHTML='已收藏';
               this.refs.collect.style.background='orange';
               //  data=data.json();
               //  console.log(data);
        }else{
            this.setState({isShow:true});
        }
    };
    download=()=>{
        let id=localStorage.getItem('userId');
        if(!id){
            this.setState({isShowT:true});
        }
    };
    componentDidMount(){
        let book = this.props.location.state;// 这么写是因为列表页面link中写了state所以可以这么调用
        if(book){
            this.setState({book});
        }else{
            let id = this.props.match.params.coursetype;
           // console.log(id);
            fetchBook(id).then(book=>this.setState({book}))
        }
    }
    render() {
        let dialog={
            title:'未登录',
            content:'该功能需要登录才能操作，清注册或登录账号后操作',
            handleDialog:this.handleDialog,
            button:'继续'
        };
        let dialogT={
            title:'友情提醒',
            content:'建议WIFI情况下进行离线下载。',
            handleDialog:this.handleDialog,
            button:'确定继续',
            handleDownload:this.handleDownload
        };
        return (
            <div className="detailT">
                <div className="up-content">
                    <div className="headerT"
                         ref="headerT">
                        <span onClick={this.handleClick} className="iconfont icon-mjiantou-copy"></span>
                        <h4>{this.state.book.title}</h4>
                        <span className="iconfont icon-mulu" onClick={this.showMenu}></span>
                    </div>
                    <div className="course-content" ref="contentT">
                        <h5 className="titleT">{this.state.book.title}</h5>
                        <div className="imgT">
                            <img
                                src={this.state.book.cover}
                                alt=""/>
                        </div>
                        <p className="course-p">{this.state.book.content}</p>
                        <a href="javascript:;" className="course-a read">开始阅读</a>
                        <a href="javascript:;" className="course-a"
                           ref="collect"
                           onClick={()=>this.collectBook(
                               {userId:localStorage.getItem('userId'),favorite:this.state.book.coursetype}
                           )}>收藏</a>
                        <a href="javascript:;"
                           onClick={this.download}
                           className="course-a">下载离线版本</a>
                    </div>
                </div>
                <div className="mainT">
                    <div className="list">
                        <p>首页</p>
                        <ul>
                            <li>简介</li>
                            <li>基础</li>
                            <li>元素</li>
                            <li>属性</li>
                            <li>标题</li>
                        </ul>
                    </div>
                </div>
                {this.state.isShow?<Dialog dialog={dialog}/>:null}
                {this.state.isShowT?<Dialog dialog={dialogT}/>:null}
            </div>

        )
    }
}
// import actions from '../../../store/actions'
// export default connect(state=>state.course, actions)(Detail)