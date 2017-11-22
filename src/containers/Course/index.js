import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';

import {Link} from 'react-router-dom'
import {downRefresh} from './Detail/utils'
import Header from "../../components/Header/home_header";
class Course extends Component {
  componentDidMount() {
    downRefresh(this.refs.list,
      this.props.getCourses
    );
    this.props.getCourses();
  }
  render() {
    return (
      <div className="bg">
        <Header headerName="教程库" bgColor="#ae4141" fontColor="white"/>
        <div ref="list" className="mainTt">
          <div className="search-header">
            <div className="search">
              <span className="searchBtn iconfont icon-sousuo"></span>
              <input type="text" placeholder="在1000+教库中搜索..."/>
            </div>
          </div>
          <div className="list">
            {this.props.courses.length > 0 && this.props.courses.map((item, index) => (
              <div className="list-content" key={index}>
                <h5>{item.title}</h5>
                <ul>
                  {item.list.map((item, index) => (
                    <li key={index}>
                      <Link to={{pathname: `/detail/${item.coursetype}`, state: {...item}}} className="li">
                        <div className="img">
                          <img
                            src={item.cover}
                            alt=""/>
                        </div>
                        <div className="content">
                          <p>{item.title}</p>
                          <p>{item.content}</p>
                        </div>
                        <span className="iconfont icon-arrow-right"/>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(state => state.course, actions)(Course)
