import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
class Home  extends Component {
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null,actions)(Home)