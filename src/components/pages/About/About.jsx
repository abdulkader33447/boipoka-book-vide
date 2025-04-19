import React from "react";

const About = () => {
  return (
    <div className="mt-24 bg-gray-100 my-10 p-10 text-center rounded-lg">
      <h2>
        Hi, I'm <span className="text-xl font-medium">A. Kader</span> —
        currently diving into the world of full-stack web development with{' '}
        <a
          className="underline text-blue-800"
          target="blank"
          href="https://www.geeksforgeeks.org/mern-stack/"
        >
          MERN
        </a>
        .
      </h2>
    </div>
  );
};

export default About;
