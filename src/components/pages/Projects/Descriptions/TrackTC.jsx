import Project from "../Project";
import { TrackTCImage } from "../../../../assets/ProjectImages";
import React from "react";

const TrackTC = () => {
  return (
    <Project
      title="TrackTC - Submission for NewHacks 2022"
      alt="TrackTC"
      tags="React.js • Express.js • Node.js • MongoDB • TTC API"
      image={TrackTCImage}
      link="https://devpost.com/software/tracktc"
      github="https://github.com/skim1601/Enhanced-TrackTC"
    >
      Commuter students may not always be aware of potential delays or
      cancellations on the TTC (Toronto Transit Commission) due to various
      reasons. For some, it can be difficult to regularly check media and the
      internet for updates, which can result in missing important closure
      information (who checks it 24/7?). We personally experienced being late to
      exams or other important events due to unexpected commute interruptions.{" "}
      <br />
      <br />
      To help address this issue, we have developed a service that provides
      real-time and planned TTC delays, accessed through the TTC API. Simply
      enter your email and select your preferred buses and trains, and TrackTC
      will send you updates on their delay status every set interval.
      <br />
      <br />
      After NewHacks 2022, we made updates to the backend, migrated from Django
      to Express.js.
      <br />
      <br />
    </Project>
  );
};

export default TrackTC;
