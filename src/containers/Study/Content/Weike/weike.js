import React, {Component}  from 'react';
import './weike.less';
export default class Weike extends Component {
    render() {
        return (
            <div className="study-weike-wrap">
                <div className="study-weike-title">
                    <h2>编程实战微课</h2>
                    <span>更多</span>
                </div>
                <ul className="study-weike-list">
                    <li>
                        <div className="study-weike-img"></div>
                        <p className="s1">
                            HTML微课
                        </p>
                        <h3>HTML微课</h3>
                    </li>
                    <li>
                        <div className="study-weike-img"></div>
                        <p className="s1">
                            PHP微课
                        </p>
                        <h3>PHP微课</h3>
                    </li>
                    <li>
                        <div className="study-weike-img"></div>
                        <p className="s1">
                            jQuery微课
                        </p>
                        <h3>jQuery微课</h3>
                    </li>
                    <li>
                        <div className="study-weike-img"></div>
                        <p className="s1">
                            javascript微课
                        </p>
                        <h3>javascript微课</h3>
                    </li>
                </ul>
                <div className="study-weike-tiao"></div>
            </div>
        )
    }
}