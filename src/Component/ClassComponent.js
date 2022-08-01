import React, {Component} from "react";

class ClassComponent extends Component{
    render() {
        const {name,heroName} = this.props
        return(
            <h1>{name} a.k.a {heroName} </h1>
        )
    }
}
export default ClassComponent