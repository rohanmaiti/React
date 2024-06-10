function FunctionDemo(props){
    return (
        <div>
        <h2>This is FunctionDemo component  and name is {props.name}</h2>
        <p>the fruits are {props.fruit} </p>
        <ul>
            {
                
            props.fruit.map((ele)=>{
                return <li>{ele}</li>
            })
            }
        </ul>
        </div>
    )
}


export default FunctionDemo;