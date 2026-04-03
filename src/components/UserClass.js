import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    
    render(){
        const { name, location } = this.props;
        
        return(
        <div className="user-card">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h4>Contact : 67564678965</h4>
        </div>
    )
    }
}

export default UserClass;