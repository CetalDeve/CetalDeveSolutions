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

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Qualifications:</h4>
                  <div className="text-sm text-secondary-600">
                    {job.cardTitle?.qualification || "Strong background in relevant field"}
                  </div>
                </div>                {/* Apply Button */}
                <div className="mt-auto">
                  <Link href="/Contact">
                    <a className="modern-btn-primary w-full group-hover:shadow-lg transition-shadow text-center inline-block">
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Jobs Available */}
          {careerData.length === 0 && (
            <div className="text-center py-16">
              <BriefcaseIcon className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">No Open Positions</h3>              <p className="text-secondary-600 mb-6">
                We don&apos;t have any open positions at the moment, but we&apos;re always interested in meeting talented people.
              </p>
              <Link href="/Contact">
                <a className="modern-btn-secondary">
                  Contact Us
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="modern-container py-16">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t see a position that fits? We&apos;re always looking for exceptional talent. 
              Send us your resume and let&apos;s start a conversation.
            </p>
            <Link href="/Contact">
              <a className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                Get In Touch
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
