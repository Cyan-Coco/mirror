import React,{Component} from 'react';
import './Search.less'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Search extends Component{
    constructor(){
        super();
        this.state={searchInp:''}
    }
    componentDidMount(){
        this.props.getCourses();
    }
    handleGo=()=>{
        let searchInput = document.getElementsByClassName('search_input')[0].value;
        localStorage.setItem('c',searchInput);
        this.props.history.push('/search');

    }
    changeVal=(e)=>{
        this.setState({searchInp:e.target.value});
    }
    render(){
        return(
            <div className="search-header">
                <div className="search">
                    <span className="searchBtn" onClick={this.handleGo}>

                        <Link
                            to={
                                {
                                    pathname:"/search",
                                    state:{data:this.state.searchInp}
                                }
                            }
                        >
                            <i className="iconfont">&#xe622;</i>
                        </Link>

                    </span>
                    <input className="search_input" type="text" placeholder="  在1000+教库中搜索..." onChange={this.changeVal}/>
                </div>
            </div>
        )
    }
}
import actions from '../../../store/actions';
export default connect(state=>state.course, actions)(Search)