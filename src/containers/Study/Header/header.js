import React, {Component}  from 'react';
import './header.less';
export default class Header extends Component {
    goBack=()=>{
        window.history.back();
    }
    render() {
        return (
            <div className="header">
                {this.props.isShow?(<div className="iconfont icon-fanhui" onClick={this.goBack}></div>):null}
                {this.props.title}
            </div>
        )
    }
}