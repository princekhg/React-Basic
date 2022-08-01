import React, {Component} from "react";
class EventBind extends Component {

   constructor(props) {
       super(props);
       this.state={
           message: "Hello"
       }
       // this.clickMsgHandler = this.clickMsgHandler.bind(this)
   }
    // clickMsgHandler() {
    //      this.setState({
    //          message : "GoodBye!"
    //      })
    //
    //     console.log(this)
    // }
    clickMsgHandler = () =>{
       this.setState({
           message : "GoodBye!"
       })
    }

    render() {
        return(
            <div>
                <div> {this.state.message}</div>
               {/*<button onClick={this.clickMsgHandler.bind(this)}> Click Me</button>*/}
               {/* <button onClick={() => this.clickMsgHandler()}> Click Me</button>*/}
                <button onClick={this.clickMsgHandler}> Click Me</button>


            </div>
        )
    }


}
export default EventBind