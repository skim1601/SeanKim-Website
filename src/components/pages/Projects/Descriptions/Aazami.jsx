import Project from "../Project";
import { Aazami } from "../../../../assets/ProjectImages";
import React from "react";

const AazamiP = () => {
  return (
    <Project
      title="Aazami - MakeUofT Winner of Most Innovative Power Efficient Hack using the Tiny ML Kit"
      alt="Aazami"
      tags="Arduino Nano 33 BLE Sense • Qualcomm Tiny ML Kit • Edge Impulse • Neo Pixels"
      image={Aazami}
      link="https://devpost.com/software/aazami"
      github="https://github.com/skim1601/Aazami"
    >
      Imagine the challenges faced by those caring for loved ones with dementia.{" "}
      Aazami is designed address the gap to elevate the life quality of dementia
      patients and their families. It records the last 10 seconds of audio,
      which can be replayed by saying "I forgot".
      <br />
      <br />
      Developing Aazami involved integrating hardware and software components,
      including Arduino and Adafruit&apos;s Neopixel for hardware, and Edge
      Impulse for Machine Learning. Honestly, we were relatively new to Machine
      Learning back then. We used a built-in framework rather than training the
      model from scratch; we initiated the process by recording various voices
      for voice detection. We achieved around 95% accuracy in both training and{" "}
      validation sets. However, due to time constraints and limited datasets,
      there is a possibility that the model is overfitting and biased towards a
      specific voiceset.
      <br />
      <br />
      Despite its areas for improvement, Aazami won the MakeUofT Category of
      Most Innovative Power Efficient Hack using the Tiny ML Kit.
    </Project>
  );
};

export default AazamiP;
