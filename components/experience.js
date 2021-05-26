import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Experience extends Component {
  render() {
    if (this.props.data) {
      var resumeExpericence = this.props.data.resume.work.map(function (
        workData
      ) {
        return (
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-48 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">
                <FontAwesomeIcon
                  icon="building"
                  className="mr-2 text-teal-300"
                  fixedWidth
                  width="0"
                />
                {workData.company}
              </span>
              <span class="mt-1 text-gray-500 text-sm">
                <FontAwesomeIcon
                  icon="calendar-alt"
                  className="mr-2 text-teal-300"
                  fixedWidth
                  width="0"
                />
                {workData.years}
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                {workData.title}
              </h2>
              <p class="leading-relaxed">{workData.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div id="Experience" class="text-gray-300 body-font mx-4 mb-6">
        <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10">Experience</h1>
        <div class="-my-8">{resumeExpericence}</div>
      </div>
    );
  }
}

export default Experience;
