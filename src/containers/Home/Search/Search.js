import React,{Component} from 'react';
import './Search.less'

let str='';
export default class Search extends Component{
    constructor(){
        super();
        this.state={searchStr:''}
    }
    componentDidMount(){

    }
    handleClick(){
        let searchBtn = document.getElementsByClassName('searchBtn')[0];
        searchBtn.addEventListener('click',function () {
            let searchIn = document.getElementsByClassName('search_input')[0].value;
            console.log(searchIn);
            //跳转 课程检索页面(带参)
            localStorage.setItem('homeStr',searchIn);
        });
    }
    changeV=(e)=>{
      this.setState({searchStr:e.target.value});
    };
    render(){
        return(
            <div className="search-header">
                <div className="search">
                    <span className="searchBtn" onClick={this.handleClick}><i className="iconfont">&#xe622;</i>
                    </span>
                    <input className="search_input" type="text" placeholder="  在1000+教库中搜索..." onChange={this.changeV}/>
                </div>
            </div>
        )
    }
}