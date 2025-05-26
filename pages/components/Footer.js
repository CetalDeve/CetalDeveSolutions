import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="modern-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Cetal Deve Solutions" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold">Cetal Deve Solutions</h3>
            </div>
            <p className="text-secondary-300 text-lg leading-relaxed mb-6 max-w-md">
              A consulting firm committed to providing experienced, excellent, and highly 
              skilled professionals to help with client business requirements and drive 
              digital transformation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/">
                <a className="block text-secondary-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </Link>
              <Link href="#services">
                <a className="block text-secondary-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </Link>
              <Link href="#about">
                <a className="block text-secondary-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </Link>
              <Link href="/Careers">
                <a className="block text-secondary-300 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </Link>
              <Link href="/Blog">
                <a className="block text-secondary-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">
                  New York, NY 10012, US
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@cetaldevesolutions.com" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  info@cetaldevesolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+12345678800" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8800
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-secondary-700">
        <div className="modern-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Cetal Deve Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
