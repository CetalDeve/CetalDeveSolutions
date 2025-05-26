import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function AboutImage() {
  return (
    <div className="hero-section modern-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-secondary-900/20"></div>
      
      {/* Content */}
      <div className="relative z-10 modern-container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with 
            <span className="block text-accent-400">Expert Consulting</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We deliver innovative solutions that drive growth, optimize operations, 
            and accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/Contact">
              <a className="modern-btn-primary text-lg px-8 py-4">
                Start Your Journey
              </a>
            </Link>
            <Link href="#services">
              <a className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-secondary-900 transition-all duration-200">
                Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <div className="flex flex-col items-center">
          <span className="text-sm uppercase tracking-wider mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
