import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: ""
  });
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", formData);
      setState("Success");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        message: ""
      });
    } catch (e) {
      console.log("Error", e.response);
      setErrorMsg("Error happened, please try again later");
      setState("Error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Cetal Deve Solutions</title>
        <meta name="description" content="Get in touch with our expert consulting team. We're here to help transform your business." />
      </Head>

      <div className="min-h-screen bg-neutral-50 section-padding">
        <div className="modern-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-secondary-600 mb-8">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Our Office</h3>
                    <p className="text-secondary-600">Dallas, TX, US</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email Us</h3>
                    <a href="mailto:info@cetaldevesolutions.com" className="text-primary-600 hover:text-primary-700">
                      contact@cetaldevesolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Call Us</h3>
                    <a href="tel:+12345678800" className="text-primary-600 hover:text-primary-700">
                      +1 (737) 742-1958
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-secondary-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-secondary-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday, Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="modern-card">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={subscribe} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "Loading"}
                  className="w-full modern-btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === "Loading" ? "Sending..." : "Send Message"}
                </button>

                {state === 'Error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{errorMsg}</p>
                  </div>
                )}
                
                {state === 'Success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

