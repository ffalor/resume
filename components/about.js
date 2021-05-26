import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="About" class="mx-4 mb-6">
        <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10">About</h1>
        <p class="text-lg text-gray-300">{this.props.data.info.bio}</p>
      </div>
    );
  }
}

export default About;
