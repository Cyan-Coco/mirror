import React, {Component}  from 'react';
import Footer from '../Footer/footer';
import './weike2.less'
import Header from "../../../components/Header/home_header";
import {fetchCourses} from '../../../common/api/course'
export default class Weike2 extends Component {
    constructor(){
        super();
        this.state={list:[]};
    }
    componentDidMount(){
        fetchCourses().then(res=>{
            console.log(res);
            this.setState({
                list:res.courseList
            })
        })
    }
    render() {
        return (
            <div>
                <Header headerName="编程微课" bgColor="#fff" fontColor="#000"/>
                <div className="weike2-content">
                    <div className="slider">
                    </div>
                    <ul className="weike2-list">
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <div className="weike2-img">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="weike2-title">
                                            <h4>微课使用引导</h4>
                                            <span className="price">价格:免费</span>
                                            <span className="canyu">参与</span>
                                        </div>
                                        <span className="arrow-right"></span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}