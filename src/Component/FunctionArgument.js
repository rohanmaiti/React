function ArgumentFunction(props){  // props mean property :received as an object 
return (
    <div>
    <h1>{props.name}'s' id is :{props.id} </h1>
    <h2>{props.arr}</h2>
    <ul>
        {
            props.arr.map(fruit=><li>{fruit}</li>)
        }
    </ul>
    </div>
)
}

export default ArgumentFunction;