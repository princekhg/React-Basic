import React, {Component ,PureComponent} from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComponent from "./MemoComponent";
class ParentCompo extends Component{
    constructor(props) {
        super(props);

        this.state={
            name : 'Shubham'
        }
    }

    componentDidMount() {
        setInterval(() =>{this.setState({
            name :'Shubham'
        })},2000)
    }

    render() {
        return (
            <div>
             PARENT COMPONENT
                <MemoComponent name={this.state.name}   />
                {/*<RegularComp name ={this.state.name} />*/}
                {/*<PureComp name ={this.state.name} />*/}
            </div>
        );
    }
}
export default ParentCompo