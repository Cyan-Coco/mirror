import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
class Course  extends Component {
   render(){
       return(
           <div>
               Course
           </div>
       )
   }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null,actions)(Course)