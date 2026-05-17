import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor (props){
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount(){
        //console.log("Parent ComponentDidMount");
    }
    render(){
        //console.log("Parent Render");
        return(
        <div>
            <h1>About us</h1>
            <UserContext.Consumer>
                {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
            <UserClass name={"First"} location={"Manipur"}/>
        </div>
        )
    }
}

export default About;