import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "DummyLocation",
      },
    };
    // this.state = {
    //     count : 0
    // }
    //console.log(this.props.name + "Child Constructor");
  }

//   componentDidMount() {
//     this.timer = setInterval(()=>{
//         console.log("Render Interval")
//     },1000)
// }
  async componentDidMount() {
    setInterval(()=>{
        console.log("Render Interval")
    },1000)
   console.log(this.props.name + "Child ComponentDidMount");

    //API call
    const data = await fetch("https://api.github.com/users/melody");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevSate){
    // if(this.state.count !== prevSate.count){

    // }
    console.log("Component Did Update")
  }

  componentWillUnmount(){
    clearInterval(this.time);
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;
    //const { name, location } = this.props;
   // const { count } = this.state;
    console.log(name + "Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
             <button onClick={()=>{
                //NEVER UPDATE STATE VARIABLE DIRECTLY
                this.setState({
                    count : this.state.count + 1
                })
            }}>Count Increase</button> */}
        <img src={avatar_url} />
        <h1>Name : {name}</h1>
        <h3>Location : {location}</h3>
        <h4>Contact : 67564678965</h4>
      </div>
    );
  }
}

export default UserClass;
