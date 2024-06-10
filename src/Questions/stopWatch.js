import React,{Component} from "react";
class Stop extends Component{
    variable = 0
    state = {
         time:this.variable,
         start:true
    }
    constructor(){
        super();  
    }
    setinterval = ()=>{ 
    setInterval(()=>{this.variable++;},1000)
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        clearInterval(this.setinterval)
    }


    render(){
         return (
            <div>
            <h1>{this.variable}</h1>
            <button onClick={this.setinterval}>start</button>
            <button onClick={this.componentWillUnmount}>stop</button>
            </div>
         )
    }
}
export default Stop;