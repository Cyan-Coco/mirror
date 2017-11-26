import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import {Link} from 'react-router-dom'
import {downRefresh} from './Detail/utils'
import Header from "../../components/Header/home_header";
import actions from '../../store/actions'


class Course extends Component {

    componentDidMount() {
        downRefresh(this.refs.list,
            this.props.getCourses
        );
        this.props.getCourses();
    }

    searchContent = (search) => {
        //有三种方法：1：push中传参数  // this.props.location.state.search  //this.props.history.push({pathname:'/search',state:{search}});2：存到localStorage 3：存到仓库里面
        localStorage.setItem('c', this.search.value);
        this.props.history.push('/search');
    };

    render() {
        return (
            <div className="bg">
                <Header headerName="教程库" bgColor="#d13532" fontColor="white"/>
                <div ref="list" className="mainTt">
                    <div className="search-header">
                        <div className="search">
                            <span
                                onClick={() => this.searchContent(this.refs.search)}
                                className="searchBtn iconfont icon-sousuo"></span>
                            <input ref={search => this.search = search} type="text" placeholder="在1000+教库中搜索..."/>
                        </div>
                    </div>
                    <div className="list">
                        {this.props.courses.length > 0 && this.props.courses.map((item, index) => (
                            <div className="list-content" key={index}>
                                <h5>{item.title}</h5>
                                <ul>
                                    {item.list.map((item, index) => (
                                        <li key={index}>
                                            <Link to={{pathname: `/detail/${item.coursetype}`, state: {...item}}}
                                                  className="li">
                                                <div className="img">
                                                    <img
                                                        src={item.cover}
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <p>{item.title}</p>
                                                    <p>{item.content}</p>
                                                </div>
                                                <span className="iconfont icon-arrow-right"></span>
                                            </Link>
                                        </li>))}
                                </ul>
                            </div>))}

                    </div>
                </div>
            </div
            >)}
}
export default connect(state => state.course, actions)(Course)