import React, { Component } from "react";

class Intro extends Component {
  render() {
    if (this.props.data) {
      var resumeExpericence = this.props.data.resume.work.map(function (
        workData
      ) {
        return (
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">
                {workData.company}
              </span>
              <span class="mt-1 text-gray-500 text-sm">{workData.years}</span>
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
      <section class="homescreen flex h-screen justify-center bg-gray-800">
        <div class="items-center w-screen my-auto mx-12 lg:mx-48">
          <div class="mockup-code">
            <div class="flex-1 flex-grow">
              <h1 class="lg:text-9xl md:text-6xl text-4xl font-extrabold mx-12 lg:mx-32">
                <span class="font-extralight">{">  "}</span>
                Hello World, <br />
                <span class="font-extralight">{">  "}</span>
                I'm
                <span class="text-teal-400"> {this.props.data.main.name}</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
