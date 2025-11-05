import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+'constructor');
    this.name = props.name;
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
        avatar_url: 'Dummy image',
      },
    };
  }
  render() {
    console.log(this.props.name+'render');
    return (
      <div className="user-card">
        <h2>Name: {this.state.name}</h2>
        <h3>Location: {this.state.location}</h3>
        <img className="logo" src={this.state.avatar_url}></img>
        <h4>Contact: https://github.com/pushfirst</h4>
      </div>
    );
  }

  async componentDidMount() {
    console.log(this.props.name+'ComponentDidMount');
    const gitHubUserData = await fetch('https://api.github.com/users/pushfirst');
    const {name, location, avatar_url} = {
      name: "Shakti Srivastava",
      location: "Lucknow",
      avatar_url: "https://avatars.githubusercontent.com/u/225471037?v=4",
    };
    // JSON.parse(JSON.stringify(gitHubUserData));
    this.setState({
      name,
      location,
      avatar_url
    })
  }

  componentDidUpdate(){
    console.log(this.props.name+'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(this.props.name+'componentWillUnmount');

  }
}

export default UserClass;
