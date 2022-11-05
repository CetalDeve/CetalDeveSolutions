import React from "react";
import DialogBox from "./DialogBox"
import VideoCard from "./VideoCard"
import AboutImage from "./AboutImage"
import Services from './Services'

export default function About() {
  return (
    
    <div className="block slate_background">
      <section className="max-w-fit md:max-w-full">
        <AboutImage />
      </section>
      <Services />
      <div className="text-center p-4">
        <VideoCard />
        <DialogBox />      
      </div>
    </div>
  );
}

