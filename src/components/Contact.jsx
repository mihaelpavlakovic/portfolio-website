import React from "react";

import { contactText } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-[1280px] h-full mx-auto px-5 mt-32 bg-primary text-center"
    >
      <h2 className="py-3 text-3xl md:text-7xl font-bold mb-3 md:mb-10">
        {contactText.title}
      </h2>
      <p className="text-lg md:text-xl mx-3 md:mx-0 pb-3 px-3">
        {contactText.subHeading}
      </p>
      <ul className="flex flex-col sm:flex-row text-2xl md:text-4xl justify-center mt-14 pb-10">
        <li className="hover:text-blue-700 p-4 cursor-pointer mx-2">
          <p className="text-xl md:text-2xl">Email</p>
          <a href="mailto: mihael.pavlakovic@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="hover:text-blue-700 p-4 cursor-pointer mx-2">
          <p className="text-xl md:text-2xl">GitHub</p>
          <a
            href="https://github.com/mihaelpavlakovic"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="hover:text-blue-700 p-4 cursor-pointer mx-2">
          <p className="text-xl md:text-2xl">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/mihael-pavlakovi%C4%87-762ba2235/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="hover:text-blue-700 p-4 cursor-pointer mx-2">
          <p className="text-xl md:text-2xl">Instagram</p>
          <a
            href="https://www.instagram.com/mihaelcodes/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
