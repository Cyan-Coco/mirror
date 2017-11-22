import React, {Component}  from 'react';
import Footer from '../Footer/footer';
import './shizhan2.less'
export default class Shizhan2 extends Component {
    render() {
        return (
            <div>
                <div className="shizhan2-content">
                    <ul className="shizhan2-list">
                        <li>
                            <div className="shizhan2-img">
                                <p>HTML</p>
                            </div>
                            <div className="shizhan2-title">
                                <h4>HTML5&CSS</h4>
                                <span className="price">价格:免费</span>
                                <span className="canyu">参与</span>
                            </div>
                            <span className="arrow-right"></span>
                        </li>
                        <li>
                            <div className="shizhan2-img">
                                <p>HTML</p>
                            </div>
                            <div className="shizhan2-title">
                                <h4>javascript</h4>
                                <span className="price">价格:免费</span>
                                <span className="canyu">参与</span>
                            </div>
                            <span className="arrow-right"></span>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}