import React, {Component} from 'react';
import Header from '../../components/Header/home_header';
import Tab from './Tab/Tab';
import Main from './Home_main/Main';
import {connect} from 'react-redux';
import './index.less';

class Home extends Component {
  componentDidMount(){
     this.props.getDevhots();
  }
    render() {
        return (
            <div className="home_content">
                <Header headerName="首页"/>
                <Tab propsTab={this.props}/>
                 <div className="tab_replace">
                     <Main articles={this.props} sliders={this.props.sliders}/>
                </div>

            </div>
        )
    }
}
//mapStateToProps
/*
 import actions from '../../store/actions'
 export default connect(null,actions)(Home)*/
import actions from '../../store/actions'
export default connect(state=>state.home,actions)(Home)