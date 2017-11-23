import React, {Component}  from 'react';
import './content.less';
import Nav from "../Content/Nav/nav";
import Weike from './Weike/weike';
import Shizhan from './Shizhan/shizhan';
import Lunbotu from "../../../components/Lunbotu/Lunbotu";

let images=[
    require('../.././../../resource/images/study/slider/1.png'),
    require('../.././../../resource/images/study/slider/4.png'),
    require('../.././../../resource/images/study/slider/3.png'),
];
export default class Content extends Component {
    render() {
        return (
            <div className="study-content-wrap">
                <Lunbotu
                    images={images}
                />
                <Nav/>
                <Weike/>
                <Shizhan/>
            </div>
        )
    }
}