import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Education extends Component {
  render() {
    if (this.props.data) {
      var certifications = this.props.data.resume.certifications.map(function (
        data
      ) {
        return (
          <div class="md:w-1/2 w-full md:flex-grow-0 flex-grow">
            <div class="p-4 flex select-none rounded-md items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div class="flex-1 pl-1 mr-8">
                <div class="font-medium text-white">{data.certification}</div>
                <div class="text-gray-600 text-sm">{data.issued}</div>
              </div>
              <a href={data.url} target="_blank">
                <div class="text-gray-300 text-xs hover:text-teal-300">
                  Verify
                </div>
              </a>
            </div>
          </div>
        );
      });
    }
    if (this.props.data) {
      var education = this.props.data.resume.education.map(function (data) {
        return (
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-48 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">
                <FontAwesomeIcon
                  icon="university"
                  className="mr-2 text-teal-300"
                  width="0"
                  fixedWidth
                />
                {data.school}
              </span>
              <span class="mt-1 text-gray-500 text-sm">
                <FontAwesomeIcon
                  icon="calendar-alt"
                  className="mr-2 text-teal-300"
                  width="0"
                  fixedWidth
                />
                {data.graduated}
              </span>
              <span class="mt-1 text-gray-500 text-sm">
                <FontAwesomeIcon
                  icon="graduation-cap"
                  className="mr-2 text-teal-300"
                  width="0"
                  fixedWidth
                />
                {data.gpa}
              </span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                {data.degree}
              </h2>
              <p class="leading-relaxed">{data.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <div id="Education" class="text-gray-300 body-font mx-4 mb-6">
          <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10">Education</h1>
          <div class="-my-8">{education}</div>
        </div>
        <div class="text-gray-300 body-font mx-4 mb-6">
          <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10 ">
            Certifications
          </h1>
          <div class="mb-8 -my-8">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {certifications}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
