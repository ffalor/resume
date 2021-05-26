import React, { Component } from "react";

export default class skills extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.resume.skills.map(function (skill) {
        return (
          <span class="mt-1 mr-1 px-2 py-2  text-base rounded-full text-white  bg-teal-500 ">
            {skill}
          </span>
        );
      });
    }
    return (
      <div>
        <div id="Skills" class="text-gray-300 body-font mx-4 mb-6">
          <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10">Skills</h1>
          <div class="py-8 mb-8 -my-8">
            <div class="flex flex-wrap items-center gap-2">{skills}</div>
          </div>
        </div>
      </div>
    );
  }
}
