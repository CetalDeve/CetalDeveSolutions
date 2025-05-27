import React from "react";
import Link from "next/link";
import services from "./Services.json";
import { ChartBarIcon, UserGroupIcon, CodeBracketIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const iconMap = {
  "STAFF AUGMENTATION": UserGroupIcon,
  "HUMAN RESOURCES": UserGroupIcon,
  "APPLICATION DEVELOPMENT": CodeBracketIcon,
  "PROJECT MANAGEMENT": ClipboardDocumentListIcon,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="modern-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive solutions tailored to accelerate your business growth 
            and drive digital transformation across all dimensions of your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.title] || ChartBarIcon;
            
            return (
              <div key={index} className="modern-card group hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">          <p className="text-lg text-secondary-600 mb-8">
            Ready to transform your business? Let&apos;s discuss your specific needs.
          </p>          <Link href="/Contact" className="modern-btn-primary text-lg px-8 py-4">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
