import React, {Component} from "react";
class LifeCycleB extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:'Shubham'
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount ')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleB ShouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleB getSnapshotDidUpdate')
    }

    render() {
        console.log('LifeCycleB render')
        return(
            <div>
                LifeCycleB
            </div>

        )
    }
}
export default LifeCycleB