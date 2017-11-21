import React, {Component}  from 'react';
import './shizhan.less';
export default class shizhan extends Component {
    render() {
        return (
            <div className="study-shizhan-wrap">
                <div className="study-shizhan-title">
                    <h2>编程实战训练</h2>
                    <span>更多</span>
                </div>
                <ul className="study-shizhan-list">
                    <li>
                        <div className="study-shizhan-img"></div>
                        <p className="s1"></p>
                        <p className="s2">HTML</p>

                    </li>
                    <li>
                        <div className="study-shizhan-img"></div>
                        <p className="s1"></p>
                        <p className="s2">CSS</p>
                    </li>
                    <li>
                        <div className="study-shizhan-img"></div>
                        <p className="s1"></p>
                        <p className="s2">jQuery</p>

                    </li>
                    <li>
                        <div className="study-shizhan-img"></div>
                        <p className="s1"></p>
                        <p className="s2">SQL</p>

                    </li>
                </ul>
            </div>
        )
    }
}