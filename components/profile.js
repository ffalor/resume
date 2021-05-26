import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class profile extends Component {
  render() {
    if (this.props.data) {
      var profileData = this.props.data.info;
      var socials = profileData.social.map(function (data) {
        return (
          <a
            href={data.url}
            class="my-5 text-gray-300 text-lg flex underline hover:text-teal-400"
          >
            <div class="mr-2">
              <FontAwesomeIcon
                icon={data.icon}
                className="text-teal-300"
                width="0"
              />
            </div>
            {data.name}
          </a>
        );
      });
    }

    return (
      <div class="md:fixed">
        <div class="md:block">
          <img
            class="h-32 w-32 rounded-full mx-auto mx-4 ring-2 ring-teal-500"
            src="/images/profile.png"
          />
          <div class="mb-8 text-center mt-4 justify-center items-center">
            <h1 class="text-2xl text-xl text-teal-500 font-bold">
              {profileData.name}
            </h1>
            <div class="md:text-lg text-gray-300">{profileData.role}</div>
          </div>
        </div>
        <div class="mx-4 my-4 hidden md:block">
          <div class="my-5 text-lg text-gray-300 flex">
            <div class="mr-2">
              <FontAwesomeIcon
                icon="envelope"
                className="text-teal-300"
                width="0"
              />
            </div>
            {profileData.email}
          </div>
          <div class="my-5 text-lg text-gray-300 flex">
            <div class="mr-2">
              <FontAwesomeIcon
                icon="map-marker-alt"
                className="text-teal-300"
                width="0"
              />
            </div>
            {profileData.city}, {profileData.state}
          </div>
          {socials}
        </div>
      </div>
    );
  }
}
