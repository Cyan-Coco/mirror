import React,{Component} from 'react';
import Search from '../Search/Search';
import Lunbotu from '../../../components/Lunbotu/Lunbotu';
import Content from '../Content/Content';
let images=[
    require('./2.png'),
    require('./1.png'),
    require('./2.png')
];
export default class Main extends Component{

    render(){
        return(
            <div>
                <Search/>
                <Lunbotu images={images}/>
                <Content/>
            </div>
        )
    }
}