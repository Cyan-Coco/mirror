import React, {Component}  from 'react';
import Footer from '../Footer/footer';
import './weike2.less'
import Header from "../../../components/Header/home_header";
import {fetchLessons} from '../../../common/api/study'
export default class Weike2 extends Component {
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
                sliders: res.slider.list[0]
            })
        })
    }

    render() {
        return (
            <div>
                <Header headerName="编程微课" bgColor="#fff" fontColor="#000"/>
                <div className="weike2-content">
                    <div className="slider">
                        <img src={this.state.sliders.sliderImg}/>
                    </div>
                    <ul className="weike2-list">
                        {
                            this.state.lessons.map((item, index) => (
                                <li key={index}>
                                    <div className="weike2-img">
                                        <img src={item.cover}/>
                                        {/*<p>{item.title}</p>*/}
                                    </div>
                                    <div className="weike2-title">
                                        <h4>{item.title}</h4>
                                        <span className="price">价格:{item.price.presave}</span>
                                        <span className="canyu">{item.favorites}</span>
                                    </div>
                                    <span className="arrow-right"></span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}
