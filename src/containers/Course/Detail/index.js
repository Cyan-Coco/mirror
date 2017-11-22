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
            this.refs.header.style.left = '0';
            this.refs.content.style.left = '0';
            this.refs.header.style.transitionDuration = '1s';
            this.refs.content.style.transitionDuration = '1s';
            this.setState({flag: true});
        }
    };
    showMenu = () => {
        this.refs.header.style.left = '5.3rem';
        this.refs.content.style.left = '5.3rem';
        this.refs.header.style.transitionDuration = '1s';
        this.refs.content.style.transitionDuration = '1s';
        this.setState({flag: false});
    };
    componentDidMount(){
        let book = this.props.location.state;// 这么写是因为列表页面link中写了state所以可以这么调用
        if(book){
            this.setState({book});
        }else{
            let id = this.props.match.params.id;
            console.log(id);
            fetchBook(id).then(book=>this.setState({book}))
        }
    }
    render() {

        return (
            <div className="detail">
                <div className="up-content">
                    <div className="header"
                         ref="header">
                        <span onClick={this.handleClick} className="iconfont icon-mjiantou-copy"></span>
                        <h4>{this.state.book.title}</h4>
                        <span className="iconfont icon-mulu" onClick={this.showMenu}></span>
                    </div>
                    <div className="content" ref="content">
                        <h5>{this.state.book.title}</h5>
                        <div className="img">
                            <img
                                src={this.state.book.img}
                                alt=""/>
                        </div>
                        <p>{this.state.book.des}</p>
                        <a href="">开始阅读</a>
                        <a href="">收藏</a>
                        <a href="">下载离线版本</a>
                    </div>
                </div>
                <div className="main">
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