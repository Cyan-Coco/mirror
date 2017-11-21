import React,{Component}  from 'react';
import Header from "../Header/header";
export default class Weike2 extends Component{
    render(){
        let rs={
            position:'absolute',
            background:'orange',
             width:100+'%',
             height:100+'%',
            zIndex:99

        }
        console.log(this.props.match);
        return (
            <div style={rs}>
                <Header>学习</Header>
            </div>
        )
    }
}