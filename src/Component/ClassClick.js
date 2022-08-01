import React, {Component} from "react";
class ClassClick extends Component{
    clickHandler(){
        console.log("This is class Me")
    }
    render() {
        return(
            <div>
              <button onClick={this.clickHandler}>CLicking CLass</button>
            </div>
        )
    }
}
export default ClassClick