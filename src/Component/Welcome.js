import React,{Component} from "react";
class Welcome extends Component
{
    constructor() {
        super();
        this.state={
            message : 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message : "Welcome CodeBreakers"
        })

    }
    render() {
        return(
            <div>
            <h1>{this.state.message}</h1>
                <button onClick={() =>this.changeMessage()}> Name Of Person</button>
            </div>
        )
    }


}
export default Welcome