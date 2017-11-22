import React, {Component}  from 'react';
import './content.less';
import Nav from "../Content/Nav/nav";
import Weike from './Weike/weike';
import Shizhan from './Shizhan/shizhan';
import Slider from './Slider/slider';

let images = [
    require('./2.jpg'),
    require('./1.jpg'),
    require('./2.jpg')
];
export default class Content extends Component {
    render() {
        return (
            <div className="study-content-wrap">
                <Slider
                    images={images}
                />
                <Nav/>
                <Weike/>
                <Shizhan/>
            </div>
        )
    }
}