import Project from "../Project";
import { ProcessorImage } from "../../../../assets/ProjectImages";
import React from "react";

const Processor = () => {
  return (
    <Project
      title="16-bit Enhanced Processor"
      alt="Processor"
      image={ProcessorImage}
      link="https://youtu.be/JpTqb0nLZSQc"
      tags="Verilog (HDL) • Assembly • ModelSim • DESim • DE1-SoC Board"
      project={true}
    >
      I managed to develop a processor featuring a 16-bitarchitecture and 8
      registers, all written in Verilog. The processor is capable of executing
      various Assembly instructions like mov, movt, add, sub, ldr, str, and b,
      among others (like ARM Assembly). <br />
      <br />
      To debug my Verilog code, I had to debug the FSM timing diagram from
      ModelSim. I modified the ALU to implement instructions such as add, sub,
      and and. Tools like DESim were used to test the processor on DE1-SoC
      Board. Then I implemented a word-matching game with my own Assembly (on
      the board!). A demo of this program is available through the link below.{" "}
      <br />
      <br />
    </Project>
  );
};

export default Processor;
