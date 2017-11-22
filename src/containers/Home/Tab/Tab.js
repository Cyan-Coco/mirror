import React,{Component} from 'react';
import './Tab.less'
export default class Tab extends Component{
    constructor(){
        super();
        this.state={};
    }
    componentDidMount(){
       let headLines = document.getElementById('headLines');

    }
    render(){
        return(
            <div className="pic_list">
                <ul>
                    <li id="headLines">开发头条</li>
                    <li id="recommend">官方推荐</li>
                    <li id="webFronts">前端开发</li>
                    <li id="moveDev">移动开发</li>
                    <li>后台开发</li>
                    <li>数据库</li>
                    <li>数据库</li>
                    <li>数据库</li>
                    <li>数据库</li>
                    <li>数据库</li>
                    <li>数据库</li>
                    <li>数据库</li>
                </ul>
            </div>
        )
    }
}