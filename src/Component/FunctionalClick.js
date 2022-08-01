import React from "react";
function FunctionalClick()
{
    function clickHandler() {
        console.log("Button CLick")
    }

    return(
        <div>
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}
export default FunctionalClick