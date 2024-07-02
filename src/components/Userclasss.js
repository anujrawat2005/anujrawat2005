import React from "react";
import UserContext from "../utils/UserContext";


class UserClass extends React.Component {
 constructor(props) {
  super(props);

    this.state = {
      userInfo: {
        name:"Dummy",
        location:"Default",
        avatar_url:"https://dummy-photo.com",
      },
    };

    

   
  console.log("Child constructor");


 };

  async componentDidMount() {
 console.log("Component did mount");
  const data = await fetch("https://api.github.com/users/anujrawat");
  const json = await data.json();

  this.setState({
    userInfo:json,
  });



   console.log(json);

      
    
    
  }; 

  componentDidUpdate() {
    console.log("Componenet did update");
  }

  componentWillUnmount() {
    console.log("component did unmount");
  }

  render() {
    const {name,location,avatar_url} = this.state.userInfo;
       

        
     console.log("child render");
    
    return(
    <div className="user-card">
    <img src={avatar_url}/>
    <h1>Name: {name}</h1>
    <div>
      LoggedIn User 
      <UserContext.Consumer>
        {({loggedInUser}) => <h1  className="text-lg font-bold">{loggedInUser}</h1>}
      </UserContext.Consumer>
    </div>
    <h2>Location: {location}</h2>
    <h3>Cos:@anujrawat</h3>
    </div>
    );
    };
};

export default UserClass;