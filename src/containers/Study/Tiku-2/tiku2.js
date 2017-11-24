import React, {Component}  from 'react';
import './tiku2.less';
import Header from "../../../components/Header/home_header";
import {fetchLessons} from '../../../common/api/study';
export default class Tiku2 extends Component {
    constructor(){
        super();
        this.state={
            lessons:[]
        }
    }
    componentDidMount(){
        fetchLessons().then(res=>{
            this.setState({
                lessons:res.studyList[1].list
            })
        })
    }
    render() {
        console.log(this.state.lessons);
        return (
            <div>
                <Header headerName="题库"/>
                <div className="tiku2-content">
                    <ul className="tiku2-tab">
                        <li id="headLines">开发头条</li>
                        <li id="recommend">官方推荐</li>
                        <li id="webFronts">前端开发</li>
                        <li id="moveDev">移动开发</li>
                        <li>后台开发</li>
                        <li>数据库</li>
                    </ul>
                    <ul className="tiku2-list">
                        {
                            this.state.lessons.map((item,index)=>(
                                <li key={index}>
                                    <i>
                                        <img src={item.icon}/>
                                    </i>
                                    <p>{item.title}</p>
                                    <span className="arrow-right"></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}