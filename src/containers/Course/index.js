import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
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
//mapStateToProps
import actions from '../../store/actions'
export default connect(store=>store.course,actions)(Course)