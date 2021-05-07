import React from "react"
import Work from "./Work"

function WorkContainer(props){
    return(
        <div id="workContainer">
            <Work handleChange={props.handleChange} state={props.state}/>
        </div>
    )
}

export default WorkContainer