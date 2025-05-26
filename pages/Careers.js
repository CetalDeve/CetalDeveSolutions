import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { BriefcaseIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

import careerData from "./CareerDescription.json";

export default function Careers() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Head>
        <title>Careers - Cetal Deve Solutions</title>
        <meta name="description" content="Join our team at Cetal Deve Solutions. Explore exciting career opportunities in consulting, technology, and innovation." />
      </Head>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="modern-container py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Join Our <span className="modern-text-gradient">Expert Team</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Build your career with us and be part of innovative projects that shape the future. 
              We&apos;re always looking for talented individuals who are passionate about excellence.
            </p>
            <p className="text-lg text-secondary-500">
              Send your resume or contact us if you are interested in our job offers.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="modern-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerData.map((job, index) => (
              <div key={index} className="modern-card group hover:scale-105 transition-transform duration-300">
                {/* Job Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                </div>

                {/* Job Details */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {job.cardTitle?.position || job.title || "Position Available"}
                  </h3>
                  
                  <div className="flex items-center text-secondary-500 text-sm mb-3">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    Remote / On-site
                  </div>

                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {job.jobDescription?.description || job.description || "Exciting opportunity to join our team."}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="mt-auto">
                  <button className="modern-btn-primary w-full group-hover:shadow-lg transition-shadow">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
