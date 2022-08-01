import React from "react";
import './myStyle.css'
function InlineStyleSheet(props){
    const heading = {
        fontSize : '280px',
        color:'blue'
    }
    return(
        <div>
           <h1 style={heading}>InLine StyleSheet</h1>
        </div>
    )
}
export default InlineStyleSheet