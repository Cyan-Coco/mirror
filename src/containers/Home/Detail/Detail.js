import React, {Component} from 'react';
import Header from "../../../components/Header/home_header";
import './Detail.less';


export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={title:'',url:''};
        console.log('aaaaa',window.location.href);

    }

    componentDidMount(){
        console.log('aaaaa',window.location.href);
        // console.log(this.props.match.params);
        let titleStr = this.props.match.params.title;
        //let urlStr = this.props.match.params.url;//这样取url只能取到http:，不能使用。
        this.setState({title:titleStr});
    }
    queryStr=(str)=>{
        console.log('http:' + str.split(/http/)[2]);
        return 'http:'+str.split(/http/)[2].slice(1);
    }

    render() {
        return (
            <div>
                <Header headerName={this.state.title.length>10?this.state.title.substring(0,10)+'...':this.state.title} bgColor="#ae4141" fontColor="white"/>
                <div className="detail_main">
                    <iframe src={this.queryStr(window.location.href)} frameBorder="0" style={{height:'9.5rem',width:'100%'}}></iframe>
                    <img className="loadingImage" src="../../../../resource/images/home/devhots/loading.gif" alt=""/>
                </div>
            </div>
        )
    }
}
