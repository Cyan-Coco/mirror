import React, {Component} from 'react';
import './index.less'
import {fetchCourses} from '../../../common/api/course'
export default class Search extends Component {
    constructor() {
        super();
        this.state = {search: '', list: []}
    }

    handleClick = () => {
        window.history.back();
    };
    change = (e) => {
        this.setState({search: e.target.value})
    };

    componentDidMount() {
        this.setState({search: localStorage.getItem('c')});
        fetchCourses(this.state.search).then(list => {
            this.setState({list})
        })
    }

    render() {
        let a = localStorage.getItem('c');
        console.log(this.props.searchContent);
        return (
            <div className="searchT">
                {/*头部*/}
                <div className="headerT" ref="headerT">
                    <span onClick={this.handleClick} className="iconfont icon-mjiantou-copy"></span>
                    <h4>教程库</h4>
                </div>
                {/*搜索*/}
                <div className="search-header">
                    <div className="search">
                            <span
                                onClick={() => this.searchContent(this.refs.search)}
                                className="searchBtn iconfont icon-sousuo"></span>
                        <input value={this.state.search} onChange={this.change} type="text"
                               placeholder="在1000+教库中搜索..."/>
                    </div>
                </div>
                {/*搜索结果*/}
                {/*<div className="list">*/}
                    {/*<p>搜索{this.state.search}共有{}本相关教程</p>*/}
                    {/*<ul>*/}
                    {/*{this.state.list.map((item, index) => (*/}
                    {/*<li key={index}>*/}
                    {/*<Link to={{pathname: `/detail/${item.coursetype}`, state: {...item}}} className="li">*/}
                    {/*<div className="img">*/}
                    {/*<img*/}
                    {/*src={item.cover}*/}
                    {/*alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="content">*/}
                    {/*<p>{item.title}</p>*/}
                    {/*</div>*/}
                    {/*<span className="iconfont icon-arrow-right"/>*/}
                    {/*</Link>*/}
                    {/*</li>*/}
                    {/*))}*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>
        )
    }
}
