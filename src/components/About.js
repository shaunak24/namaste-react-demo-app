import React, { Component } from 'react';
import UserContext from '../utils/UserContext';
import Profile from './Profile';

export class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // place to make API calls
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => <p>Hello From {user.name}!</p>}
        </UserContext.Consumer>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 * Usual Flow -
 *
 * (render phase)
 * Parent Constructor
 * Parent Render
 * Child Constructor
 * Child Render
 *
 * (commit phase)
 * DOM is updated
 * Child componentDidMount
 * Parent componentDidMount
 */
