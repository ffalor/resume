import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var resumeProjects = this.props.data.projects.map(function (projectData) {
        var tags = projectData.tags.map(function (tag) {
          return (
            <span class="mt-1 mr-2 px-4 py-2  text-base rounded-full text-white  bg-teal-500 ">
              {tag}
            </span>
          );
        });
        return (
          <div class="p-4 md:w-1/2 flex">
            <div class="flex-grow ">
              <h2 class="text-white text-lg title-font font-bold mb-5">
                {projectData.title}
              </h2>
              <p class="leading-relaxed text-base  text-gray-300">
                {projectData.description}
              </p>
              {projectData.url_title && (
                <div class="flex items-center justify-between mt-2">
                  <a
                    href={projectData.url}
                    target="_blank"
                    class="text-white hover:underline"
                  >
                    {projectData.url_title}
                  </a>
                </div>
              )}
              <div class="flex flex-wrap mt-5">{tags}</div>
            </div>
          </div>
        );
      });
    }

    return (
      <div id="Projects" class="text-gray-300 body-font mx-4 mb-6">
        <h1 class="mb-4 text-4xl text-teal-500 font-bold mb-10">
          Public Projects
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {resumeProjects}
        </div>
      </div>
    );
  }
}

export default Projects;
