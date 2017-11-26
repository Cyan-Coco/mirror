import React,{Component} from 'react';
import Search from '../Search/Search';
import Lunbotu from '../../../components/Lunbotu/Lunbotu';
import Content from '../Content/Content';
export default class Main extends Component{

    componentDidMount(){

    }
    render(){
        return(
            <div>

                {this.props.sliders.length>0 && <div><Search/><Lunbotu sliders={this.props.sliders}/></div>}

                <Content articles={this.props}/>
            </div>
        )
    }
}