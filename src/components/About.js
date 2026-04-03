import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About us</h1>
            <User name={"Melody Naorem from Functional Component"}/>
            <UserClass name={"Melody Naorem from Class Component"} location={"Manipur"}/>
        </div>
    )
}
export default About;