import React, {Component}  from 'react';
import './content.less';
import Nav from "../Content/Nav/nav";
import Weike from './Weike/weike';
import Shizhan from './Shizhan/shizhan';

export default class Content extends Component {
    render() {
        return (
            <div className="study-content-wrap">
                <Nav/>
                <Weike/>
                <Shizhan/>
            </div>
        )
    }
}