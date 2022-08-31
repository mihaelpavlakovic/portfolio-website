import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full bg-primary">
      <h2 className="py-3 text-3xl md:text-7xl font-bold flex justify-center mb-3 md:mb-10">
        Projects
      </h2>
      <p className="text-lg mx-3 md:mx-0 md:text-2xl text-center mb-4 md:mb-10">
        Some of my project I worked on in previous years.
      </p>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-0">
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/svijet-apartmana-app/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project1} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                Svijet Apartmana
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Website created with Vue.js framework for renting apartments or
                houses. The project has built-in Google Auth functionality and
                Google Firebase for a database.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/svijet-apartmana-app/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/weFixIt/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project2} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                weFixIt
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Imaginary website created with HTML, CSS and Bootstrap. For 3D
                models we used Blender and Sketchfab for hosting created models.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/weFixIt/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/keysSeminar/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project3} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                KEYS
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Imaginary website created with HTML, CSS, and Bootstrap. The
                website shows keyboard parts and other related accessories.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/keysSeminar/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/weatherjs/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project4} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                Weather Forecast
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Website created with HTML, CSS, and JavaScript. An external API
                is used to retrieve weather data. The website has a build
                function for changing location.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/weatherjs/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/karlsBeer/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project5} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                Karl's BEER
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Imaginary website for brewery created with HTML, CSS, and
                Bootstrap. The goal of this website was to showcase different
                types of beer that company has to offer.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/karlsBeer/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://mihaelpavlakovic.github.io/ribic/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <img className="rounded-t-lg" src={project6} alt="" />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-start">
                Ribic
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Imaginary website for renting fishing equipment, created with
                HTML, CSS, and Bootstrap. The goal of this website was to
                showcase different types of fishing equipment that you could
                rent.
              </p>
              <a
                href="https://mihaelpavlakovic.github.io/ribic/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center md:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-lighter dark:focus:bg-secondary"
              >
                View Demo
                <ArrowRightIcon className="w-[17px] ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
