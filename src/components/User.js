import {use, useState} from "react";
const User = ({name}) =>{
    const[count] = useState(0);
    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Name : {name}</h1>
            <h3>Location : Manipur</h3>
            <h4>Contact : 67564678965</h4>
        </div>
    )
}

export default User;