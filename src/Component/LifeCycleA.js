import React, {Component} from "react";
import LifeCycleB from "./LifeCycleB";
class LifeCycleA extends Component{

    constructor(props) {
        super(props);
        this.state={
            name:'Shubham'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }



    componentDidMount() {
        console.log('LifeCycleA componentDidMount ')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleA ShouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleA getSnapshotDidUpdate')
    }

    changeState = () =>{
        this.setState(
            {
                name:'CodeBreakers'
            }
        )
    }

    render() {
        console.log('LifeCycleA render')
        return(
            <div>
            <div>
              LifeCycleA
            </div>
                <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
            </div>

        )
    }
}
export default LifeCycleA