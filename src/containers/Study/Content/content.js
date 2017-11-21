import React, {Component}  from 'react';
import './content.less';
import Nav from "../Content/Nav/nav";
import Weike from './Weike/weike';
import Shizhan from './Shizhan/shizhan';
import Slider from './Slider/slider';

export default class Content extends Component {
    render() {
        return (
            <div className="content-wrap">
                <Slider/>
                <Nav/>
                <Weike/>
                <Shizhan/>
            </div>
        )
    }
}