import React,{Component} from 'react';
import './Search.less'

export default class Search extends Component{
    render(){
        return(
            <div className="search-header">
                <div className="search">
                    <span className="searchBtn"><i className="iconfont">&#xe622;</i></span>
                    <input className="search_input" type="text" placeholder="  在1000+教库中搜索..."/>
                </div>
            </div>
        )
    }
}