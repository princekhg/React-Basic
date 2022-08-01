import react, {Component} from "react";
class UserGreeting extends Component
{
    constructor() {
        super();
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        return(this.state.isLoggedIn?<div>Welcome Prince</div> : <div>Welcome Shubham</div> )


        //------second method
        // let message
        // if(this.state.isLoggedIn){
        //     message = "Welcome Prince"
        // }
        // else{
        //     message = "Welcome Guest"
        // }
        // return ( <div> {message}</div>)


        //------------first method
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Prince</div>
        //     )
        //     }else {
        //     return (<div>
        //         Welcome Guest
        //     </div>)
        // }

    }
}
export default UserGreeting