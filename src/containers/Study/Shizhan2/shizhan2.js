import React, {Component}  from 'react';
import './shizhan2.less'
import Header from "../../../components/Header/home_header";
import {fetchLessons} from '../../../common/api/study';
export default class Shizhan2 extends Component {
    constructor() {
        super();
        this.state = {
            sliders: {list: []},
            lessons: []
        }
    }

    componentDidMount() {
        fetchLessons().then(res => {
            this.setState({
                lessons: res.studyList[0].list,
                sliders: res.slider.list[2]
            })
        })
    }

    render() {
        return (
            <div>
                <Header goBack={true} headerName="实战" bgColor="#fff" fontColor="#000"/>
                <div className="shizhan2-content">
                    <div className="slider">
                        <img src={this.state.sliders.sliderImg}/>
                    </div>
                    <ul className="shizhan2-list">
                        {
                            this.state.lessons.map((item, index) => (
                                <li key={index}>
                                    <div className="shizhan2-img">
                                        <img src={item.cover} alt=""/>
                                    </div>
                                    <div className="shizhan2-title">
                                        <h4>HTML5&CSS</h4>
                                        <span className="price">价格:{item.price.presave}</span>
                                        <span className="canyu">{item.favorites}</span>
                                    </div>
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