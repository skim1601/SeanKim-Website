import Project from "../Project";
import { CareerTraceImage } from "../../../../assets/ProjectImages";
import React from "react";

const CareerTrace = () => {
  return (
    <Project
      title="CareerTrace - Job Application Tracker"
      alt="CareerTrace"
      tags="React.js • Node.js • Express.js • MongoDB • Google OAuth 2.0 • AWS"
      image={CareerTraceImage}
      link="https://careertrace.ca/"
      github="https://github.com/michaelzixizhou/CareerTrace"
    >
      CareerTrace is a powerful platform designed to streamline and enhance your
      job application process. With CareerTrace, you can effortlessly track your
      job applications, monitor application stages, and keep a record of
      important interview dates. It empowers you to make data-driven decisions
      by providing valuable insights into your application success rates. <br />
      <br />
      CareerTrace offers a range of key features to streamline your job
      application process. You can effortlessly manage and organize your
      applications, maintaining a comprehensive record of applied companies,
      dates, and application statuses. Stay on top of your interview schedule by
      recording important interview dates and times, ensuring you never miss an
      opportunity.
      <br />
      <br />
      CareerTrace employed a responsive design, ensuring a seamless user
      experience on both mobile and desktop devices. To enhance security and
      convenience, it offers Google Authentication for secure access. Behind the
      scenes, CareerTrace is built with MERN stack; MongoDB for data storage,
      Express.js for backend, React and styled-components for frontend, Google
      OAuth 2.0 for authentication, and hosted on AWS. <br />
    </Project>
  );
};

export default CareerTrace;
