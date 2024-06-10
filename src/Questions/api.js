// import CreateTable from "./table";

// question : fetch data from api and  display in table using class component
let store = await fetch('https://dummyjson.com/users');
let reStore = await store.json();
let arrayOfObj = reStore.users;
 function GetData(){
    let tableObj = arrayOfObj.map(obj=>{
        return (
            <tr>
                <td>{obj.id}</td>
                <td>{obj.firstName}</td>
                <td>{obj.lastName}</td>
                <td>{obj.age}</td>
            </tr>
        )
    })
    return (
        <table border="1">
            {
              tableObj.map((ele)=>ele)
            }
        </table>
    )
}

export default GetData;