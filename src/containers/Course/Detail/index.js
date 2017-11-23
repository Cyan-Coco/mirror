import React, {Component} from 'react';
import './index.less'
import {fetchBook} from '../../../common/api/course'
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {flag: true,book:{}};
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
    componentDidMount(){
        let book = this.props.location.state;// 这么写是因为列表页面link中写了state所以可以这么调用
        if(book){
            this.setState({book});
        }else{
            let id = this.props.match.params.coursetype;
            console.log(id);
            fetchBook(id).then(book=>this.setState({book}))
        }
    }
    render() {

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
                        <a href="" className="course-a">开始阅读</a>
                        <a href="" className="course-a">收藏</a>
                        <a href="" className="course-a">下载离线版本</a>
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
            </div>

        )
    }
}
// import actions from '../../../store/actions'
// export default connect(state=>state.course, actions)(Detail)