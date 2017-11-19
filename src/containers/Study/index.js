import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
class Study extends Component {
    render() {
        return (
            <div>
                Study
            </div>
        )
    }
}
//mapStateToProps
import actions from '../../store/actions'
export default connect(null, actions)(Study)