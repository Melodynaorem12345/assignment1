import { useState,useEffect } from "react";
const User = ({name}) =>{
    const[count] = useState(0);
    const[count2] = useState(2);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000);
        return () =>{
            clearInterval(timer);
            console.log("UseEffect Return");
        }
    },[])

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>Name : {name}</h1>
            <h3>Location : Manipur</h3>
            <h4>Contact : 67564678965</h4>
        </div>
    )
}

export default User;