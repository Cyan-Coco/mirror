import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './index.less';
import Nav from './Nav/nav';
import Header from "../../components/Header/home_header";
import Lunbotu from '../../components/Lunbotu/Lunbotu';


class Study extends Component {
    componentDidMount() {
        this.props.getLessons();
    }

    render() {
        return (
            <div className="study-wrap">
                <Header headerName="学习" bgColor="#fff" fontColor="#000"/>
                <div className="study-content-wrap">
                    {
                        this.props.sliders.length>0?<Lunbotu sliders={this.props.sliders}/>:''
                    }
                    <Nav/>
                    {
                        this.props.lessons.map((item, index) => (
                            <div key={index} className="study-weike-wrap">
                                <div className="study-weike-title">
                                    <h2>{item.title}</h2>
                                    <Link to="/study/weike2">
                                        <span>更多</span>
                                    </Link>
                                </div>
                                <ul className="study-weike-list">
                                    {
                                        item.list.slice(0,4).map((item,index)=>(
                                            <li key={index}>
                                                <div>
                                                    <img src={item.cover} alt=""/>
                                                </div>
                                                <h3>{item.title}</h3>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(state => state.study, actions)(Study)