import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import {Link} from 'react-router-dom'
import {downRefresh} from './Detail/utils'
class Course extends Component {
    componentDidMount(){
        downRefresh(this.refs.list,
            this.props.getBooks
        );
        this.props.getBooks();
    }
    render() {
        return (
            <div className="bg">
                <div ref="list" className="main">
                    <div className="search-header">
                        <div className="search">
                            <span className="searchBtn iconfont icon-sousuo"></span>
                            <input type="text" placeholder="在1000+教库中搜索..."/>
                        </div>
                    </div>
                    <div className="list">
                        {this.props.books.list.length>0 &&this.props.books.list.map((item,index)=>( <div className="list-content" key={index}>
                                <h5>{item.cate}</h5>
                                <ul>
                                    {item.content.map((item,index)=>(
                                        <li key={index}>
                                            <Link to={{ pathname: `/detail/${item.id}`,state:{...item} }} className="li">
                                                <div className="img">
                                                    <img
                                                        src={item.img}
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <p>{item.title}</p>
                                                    <p>{item.des}</p>
                                                </div>
                                                <span className="iconfont icon-arrow-right"/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        ))}
                    </div>
                </div>
            </div>


        )
    }
}

//mapStateToProps
import actions from '../../store/actions'
export default connect(state=>state.course, actions)(Course)
class Course  extends Component {
  componentDidMount(){
    this.props.getCourses()
  }
   render(){
       return(
         <div>
           {/* 测试内容{
             this.props.courses.map((item,index)=>(
               <div key={index}>
                 <p>{item.title}</p>
                 <ul>
                   {
                     item.list.map((_item)=>(
                       <div>
                         <img src={_item.cover} alt=""/>
                         <p>{_item.title}</p>
                         <p>{_item.content}</p>
                       </div>
                     ))
                   }
                 </ul>
               </div>
             ))
           }*/}
         </div>
       )
   }
}
