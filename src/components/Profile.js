import React, { Component } from 'react';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Dummy',
      },
    };
  }

  async componentDidMount() {
    // API call
    const data = await fetch('https://api.github.com/users/shaunak24');
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { avatar_url, name, location } = this.state?.userInfo;

    return (
      <div>
        <img
          src={avatar_url}
          alt="Profile Image"
          style={{ width: '200px', height: '200px' }}
        />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default Profile;
