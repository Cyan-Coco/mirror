import React, {Component} from 'react';
import Moment from 'moment';
import './Content.less';

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <span className="title_content">{this.props.articles.title}{this.props.title}</span>
                </div>

                    <div className="content">
                    {
                        this.props.articles.list.map((item, index) => (
                        <div className="content_item" key={index}>
                            <span className="article_header">
                                {item.title}
                            </span>
                            <span className="article_content">
                                {item.preslice}
                            </span>
                            <span className="article_others">
                                {item.artfrom}&nbsp;&nbsp;&nbsp;{Moment(item.timefrom).fromNow()};
                            </span>r

                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}