import React, {Component} from 'react';
import Moment from 'moment';
import {Link} from 'react-router-dom';
import './Content.less';

export default class Content extends Component {
    constructor() {
        super();
        this.state = {todayStr: null}
    }

    componentDidMount() {
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        let systemDate = new Date().Format("yyyy-MM-dd");
        this.setState({todayStr: systemDate})
    }
    render() {
        return (
            <div>
                <div className="articleType">
                    <span className="title_content">{this.props.articles.title}{this.props.title}</span>
                </div>

                <div className="content">
                    {
                        this.props.articles.articles.list.map((item, index) => (
                            <div className="content_item" key={index} >
                                <Link to={{pathname:`/homedetail/${item.title}${item.url}`,state:{...item}}}>
                            <span className="article_header">
                                {
                                    item.timefrom.toString().substring(0, 10) == this.state.todayStr ?
                                        <span><img className="article_ico"
                                                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAIAAADy0J9/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADi0lEQVRYw+2XvW/bRhjG37sjKZ0stACpfBhChwJyOVmIAzgc1EFjvch/QmC1Q9YOsueMsucCHRobQWYP1uKMRgABURKkgZKhggwUTSq4TSUBdm2d+HF3HVg4ikxLlE0LGXLQRAL86Xm/nvfQ4XYBpnsUmPr5jPyEkJgaiKZ4tzE9pJYpaHPLTnOn/3prGkhMDW1ueaqBjWWLAMC7DZRITQNJdFNN5wCA1daVdE7LFJz9ytUi49kiAPTrm4J1nP1KcukXyTpuq3pVSC1TILrJu41TZay2Qa0S7/4mWCd6JKaGL5HV1k8f8m7DaVYS+XJvby08NSwykS/7soY+7exXiGFORA2FpFYJ05TT3AlMm13fTOTLyaUHrLYRJq9orHlRq6Smc26rymobmBp+lQ4JwtRI5MuYptxW1a5vjpY7BqllCvFs0ef5T9R0LpZdcZqVofY4pQrWPvs2LDI+vxI42AZ1B4YEAHyw16qeVXwuklolopt2fSswPTP5MtHNwDHrB2awqt0/q4OiA5CYGrFsEdMUq62flxWimzP5smDt490fAjuKWqtENwVrs9rGkOcoZ78VzxadZmV07fFuw21VeSfYvwTrnOytqemcYO2zHveRSi1TwNS4mCWd6hvbncpQX1/GlfyiPS/9oUaBX36BwTkvwZimqFXiu6OmLopqj8XUSC498IfixVVOdKi16vva2JkXDdL3NbdVDVMNESD9vhKsbdc3p7THUqsEAHZ9K0rzGrWazK+M8LXokUQ3tbllwdoTTQ/l8iHt7a1N6U7irwr9cYYcGVJN53zLvPI9diCL3/BuI2RXRIO8jNt8vtJ+Wrfo+K17yo0F7+9f+69+vtom0b7+LjZ/FxENEPEOXiizi8mbt4V9yJ6Ww9/jQ1k0pkYs+70yewdJAUQD7gAmgAhIDoID0UB4Urj264fO748viyS6SRd/RDSFsAIA0usjogIiHy90nnCOcFwH4UmQ3sHzwdvZBEhqrSo3FhBWAYcLvuSSu0iJ//83jt72qvcD0zyMxNRIfHsfzdz0ZX2I4SRHHL3DX3wFkkvnmL38yTt4FoxUZu/EF+7h2JeAiDhu4WRaChdh9YKtILlgHZy4DsKT3LbfPPqQ5sPtgvfPG+H1JXekFPzkLylcKUU0P+Hy3nvn3RPeey88Zjcrh9sFJNwTpFB+9AdOXEMkNmkMwwXaE/2udP4FlwFR/wMVNENvJSuOAQAAAABJRU5ErkJggg=="/>&nbsp;&nbsp;</span> : ''
                                }
                                {
                                    item.title.length >= 20 ? item.title.substring(0, 30) + '...' : item.title
                                }
                            </span>
                                    <span className="article_content">
                                {
                                    item.cover !== '' ?
                                        <span className="article_content" style={{width: '5.3rem'}}>
                                        <img className="itemCovor"
                                             style={{top: '1.25rem', right: '.53rem', width: '1.5rem', height: '.8rem'}}
                                             src={item.cover}/>
                                            {item.preslice.length >= 40 ? item.preslice.substring(0, 40) + '...' : item.preslice}
                                        </span>
                                        :
                                        <span className="article_content">
                                            {item.preslice.length >= 50 ? item.preslice.substring(0, 50) + '...' : item.preslice}
                                        </span>
                                }


                            </span>
                                    <span className="article_others">
                                {item.artfrom}&nbsp;&nbsp;&nbsp;{Moment(item.timefrom).fromNow()};
                            </span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}