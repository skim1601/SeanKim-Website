import Project from "../Project";
import { HandwritingImage } from "../../../../assets/ProjectImages";
import React from "react";

const Handwriting = () => {
  return (
    <Project
      title="Handwriting to Text Converter (CNN + GRU)"
      alt="Handwriting"
      tags="Python • PyTorch • Pandas • CNN + GRU • Deep Learning"
      image={HandwritingImage}
      link="https://youtu.be/ZADPbL7FWgE"
    >
      The project aimed to develop a deep-learning model capable of Optical
      Character Recognition (OCR) to transform handwritten text into digital
      format. If we think about it, this technology has potential applications
      in various fields including education, healthcare, and business.
      <br />
      <br />
      Unlike traditional methods, such as Hidden Markov Models, Recurrent Neural
      Network (RNN) based architectures like Gated Recurrent Unit (GRU) and Long
      short-term memory (LSTM) , can consider larger contextual information
      making it more effective for the sequential nature of handwritten text.
      <br />
      <br />
      We utilized a combination of Convolutional Neural Network (CNN) for
      initial image processing and GRUs for sequence analysis, employing{" "}
      Connectionist Temporal Classification (CTC) loss for training the model.
      <br />
      <br />
      The IAM Handwriting Database was used to create a balanced training
      dataset to prevent biases related to word length. We ensured a rigorous
      splitting protocol for training, validation, and testing to maintain
      integrity in model evaluation.
      <br />
      <br />A ResNet152-based model served as our baseline to compare
      improvements. Our final model significantly outperformed the baseline (
      52% vs 29% test accuracy), demonstrating the effectiveness of our chosen
      architecture in handling real-world handwritten text.
      <br />
      <br />
      The project not only met but exceeded initial expectations in terms of
      accuracy and application readiness, marking a significant step forward in
      the practical use of OCR technologies in diverse real-world scenarios.
    </Project>
  );
};

export default Handwriting;
