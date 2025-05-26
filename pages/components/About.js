import React from "react";
import DialogBox from "./DialogBox"
import VideoCard from "./VideoCard"
import AboutImage from "./AboutImage"
import Services from './Services'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
        <AboutImage />
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-neutral-50">
        <div className="modern-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Driving Innovation Through 
                <span className="modern-text-gradient"> Expert Consulting</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                At Cetal Deve Solutions, we combine deep industry expertise with cutting-edge 
                technology to deliver transformational results. Our team of seasoned consultants 
                works alongside your organization to identify opportunities, optimize processes, 
                and accelerate growth.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                With a proven track record of success across various industries, we bring 
                strategic insights and practical solutions that create lasting value for our clients.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-sm text-secondary-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-sm text-secondary-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Media Content */}
            <div className="space-y-6">
              <VideoCard />
              <DialogBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

