import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutComponent extends React.Component {
    constructor() {
        super();
        console.log('Parent Constructor');
    }
    render() {
        console.log('Parent Render');
         return (
        <div>
            <h1>About Us</h1>
            <UserClass name={'First Child'}/>
        </div>
    )
    }
    componentDidMount() {
        console.log('Parent componentDidMount');
    }
}

export default AboutComponent;