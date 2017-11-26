import React, {Component}  from 'react';
import {connect} from 'react-redux';
import './weike2.less'
import Header from "../../../components/Header/home_header";
import {fetchLessons} from '../../../common/api/study'
class Weike2 extends Component {
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
                <Header goBack={true} headerName="编程微课"/>
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
                                    </div>
                                    <div className="weike2-title">
                                        <h4>{item.title}</h4>
                                        <span className="price">价格:{item.price.presave}</span>
                                        <span className="canyu">{item.favorites}</span>
                                    </div>
                                    <span className="arrow-right">
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../../store/actions'
export default connect(state => state.study, actions)(Weike2)