import React,{Component} from 'react';
import './index.less'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import actions from '../../../store/actions'
class Dialog extends Component{
    constructor(){
        super();
    }
    handleClick=()=>{
        this.props.dialog.handleDialog();
    };
    handleButton=(e)=>{
        e.preventDefault();
        if(this.props.dialog.button=='继续'){
            // this.props.history.push('/login');
            window.location.href='http://localhost:8080/#/login';
        }else {
            this.props.dialog.handleDownload();
        }
    }
    render(){
        let {title,content,handleDialog,button,handleDownload}=this.props.dialog;
        return (
            <div className="dialogT" >
                <div className="dialog">
                    <h5>{title}</h5>
                    <p>{content}</p>
                    <div className="btn">
                        <a onClick={this.handleClick}>取消</a>
                        <a  className="btn1" onClick={this.handleButton}>{button}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state=>state.course,actions)(Dialog)