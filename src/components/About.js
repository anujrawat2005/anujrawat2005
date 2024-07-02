import { Component } from "react";
import User from "./User";
import UserClass from "./Userclasss";



class About extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.name+"parent constructor");
    }


    componentDidMount(){
        console.log(this.props.name+"parent component did mount");
    }




    render() {
        console.log("parent render");
        return(
         <div >
         <h1> About </h1>
            <h2>This is Anuj rawat series of restraunts</h2>
        
            
            < UserClass name={"Anuj rawat (classes)"}  location = {"New Delhi(classes)"}  />
            < UserClass name={"TATA (classes)"}  location = {"MUMBAI(classes)"}  />
    
         </div>

        );

    }
}
export default About;