import React,{Component} from 'react';
import './Tab.less'
export default class Tab extends Component{
    constructor(){
        super();
        this.state={
            isHeadLines:false,
            isRecommend:false,
            isWebFronts:false,
            isMoveDev:false,
            activeIndex:0
        };
    }
    componentDidMount(){

    }

     kang=(val)=>{
        this.setState({
            activeIndex:val
        })
     };
    render(){
        let all=['开发头条','官方推荐','前端开发','移动开发','移动开发','移动开发','移动开发','移动开发'];
        return(
            <div className="pic_list">
                <ul>

                    {
                        all.map((item,index)=>(
                            <li
                                key={index}
                                className={this.state.activeIndex===index?'active':''}
                                onClick={()=>{
                                    switch(index){
                                        case 0:
                                            this.props.propsTab.getDevhots();
                                            break;
                                        case 1:
                                            this.props.propsTab.getOffice();
                                            break;
                                        case 2:
                                            this.props.propsTab.getFrontWeb();
                                            break;
                                        case 3:
                                            this.props.propsTab.getMoveDev();
                                            break;
                                        default:
                                            this.props.propsTab.getDevhots();

                                    }
                                    this.kang(index);

                                }}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}