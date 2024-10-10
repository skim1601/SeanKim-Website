import Project from "../Project";
import { CommuterStudentImage } from "../../../../assets/ProjectImages";
import React from "react";

const CommuterStudent = () => {
  return (
    <Project
      title="Skule Commuter Students 22-23 Website"
      alt="Commuter Students"
      tags="React.js • Redux • CSS3"
      image={CommuterStudentImage}
      link="https://commuter.skule.ca/"
      github="https://github.com/skim1601/CommuterStudent"
      setup={[
        "git clone https://github.com/skim1601/CommuterStudent.git",
        "npm install",
        "npm start",
      ]}
    >
      I had the privilege of contributing to the official website of the Skule
      Commuter Student Directorship within the University of Toronto Engineering
      Society.
      <br />
      <br />
      We utilized Redux (first time!) for managing the global state of the side
      navigation bar. Engaging with the Director and fellow team members was
      invaluable, as we incorporated their input to enhance the website. <br />
      <br />
    </Project>
  );
};

export default CommuterStudent;
