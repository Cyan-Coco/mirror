import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
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
        fetchCourses(localStorage.getItem('c')).then(list => {
            this.setState({list,search:localStorage.getItem('c')})
        });
    }
    searchContent=(content)=>{
        fetchCourses(content).then(list => {
            localStorage.setItem('c',content);
            this.setState({list,search:localStorage.getItem('c')})
        });
    };
    render() {
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
                                onClick={() => this.searchContent(this.state.search)}
                                className="searchBtn iconfont icon-sousuo"></span>
                        <input value={this.state.search} onChange={this.change} type="text"
                               placeholder="在1000+教库中搜索..."/>
                    </div>
                </div>
                {/*搜索结果*/}
                <div className="list">
                    <p className="searchM">搜索'{localStorage.getItem('c')}'共有{this.state.list.length}本相关教程</p>
                    <ul>
                        {this.state.list.length>0&&this.state.list.map((item, index) => (
                            <li key={index}>
                                <Link to={{pathname: `/detail/${item.coursetype}`, state: {...item}}} className="li">
                                    <div className="img">
                                        <img
                                            src={item.cover}
                                            alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>{item.title}</p>
                                    </div>
                                    <span className="iconfont icon-arrow-right"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
