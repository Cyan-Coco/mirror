import React, {Component} from 'react';
import './home_header.less';
/*
*功能：页面头部组件
* 参数：headerName、bgColor、fontColor
* 使用格式：<Header headerName="首页" bgColor="red" fontColor="yellow"/>
* */
export default class Header extends Component{
    constructor(){
        super();
        this.state={headerName:'请传入Header名称'}
    }
    render(){
        return(
            <div className="home_header" style={{background:this.props.bgColor}} >
                <span className="header_name" style={{color:this.props.fontColor}}>
                    {typeof(this.props.headerName) !=='string'?this.state.headerName:this.props.headerName}
                </span>
            </div>
    )
    }
}
