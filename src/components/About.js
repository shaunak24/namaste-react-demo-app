import React, { Component } from 'react';
import Profile from './Profile';

export class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>Hello From Shaunak!</p>
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
