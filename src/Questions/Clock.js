import React from "react";
class Clock extends React.Component{
    state ={
     time:new Date()
    }
    constructor(){
        super();
    }
    render(){
        return (
            <h2>{this.state.time.toLocaleTimeString}</h2>
        )
    }
}
export default Clock;