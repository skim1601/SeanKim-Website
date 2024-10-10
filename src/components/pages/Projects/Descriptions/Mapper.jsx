import Project from "../Project";
import { MapperImage } from "../../../../assets/ProjectImages";
import React from "react";

const Mapper = () => {
  return (
    <Project
      title="OTFMap - GIS Mapper"
      alt="OTFMap"
      tags="C++ (STL) • GTK • Glade • EZGL • OpenStreetMap API"
      link="https://youtu.be/OgRmhjl-Iy8"
      image={MapperImage}
    >
      Over the course of four months, we broke down this project into four major
      milestones, each with its own specific objectives. <br />
      <br />
      The first milestone involved organizing vast amounts of data into
      structured formats, as well as utilizing and extending the OpenStreetMap
      API by developing useful functions that would be useful in later
      milestones. To achieve this, we created our data structures, using various
      STL structures such as maps, sets, vectors, and queues.
      <br />
      <br />
      The second milestone centered around the development of the map&apos;s
      frontend, which included streets, points of interest, subway mode (shows
      subway lines), and bike mode (shows bike lanes), using a graphics library
      called EZGL, which depends on GTK 3 and Cairo. The biggest challenge here
      unironically was avoiding segmentation faults.
      <br />
      <br />
      For the third milestone, we implemented pathfinding between two
      intersection points on the map using Djikstra and A* algorithms. We also
      exhibited the pathfinding (from one point to another) in our GTK Mapper.
      <br />
      <br />
      In the final milestone, we tackled the Travelling Courier Problem,
      utilizing various heuristics such as Greedy, Multi-Start, 3-opt and{" "}
      Hill-Climbing. Our team&apos;s efforts paid off, as we finished in the top
      10% (out of 91 teams).
      <br />
      <br />
      Our focus on the map was on eco-friendly GIS, with features that promoted
      public transit. Working on this Agile Software Development project was a
      remarkable experience that strengthened my skills in C++, Data Structures,
      and Algorithms.
      <br />
      <br />
      While I am unable to share the code due to academic integrity, I can
      provide it upon request. The demo is available through link below. <br />
      <br />
    </Project>
  );
};

export default Mapper;
