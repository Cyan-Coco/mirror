import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
class Profile  extends Component {
    render(){
        return(
            <div>
                Profile
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null,actions)(Profile)