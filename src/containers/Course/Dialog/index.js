import React,{Component} from 'react';
import './index.less'
export default class Dialog extends Component{
    render(){
        return (
            <div className="dialogT">
                <h5>系统提示</h5>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
