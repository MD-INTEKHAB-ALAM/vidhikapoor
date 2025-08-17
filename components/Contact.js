"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#73726D] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a question about our
            services, pricing, or anything else, our team is here to help.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-600 shadow-md">
            <Mail className="w-8 h-8 mb-4 text-white" />
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="mt-2 text-gray-300">support@yourdomain.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-600 shadow-md">
            <Phone className="w-8 h-8 mb-4 text-white" />
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="mt-2 text-gray-300">+1 (555) 123-4567</p>
          </div>

          {/* Office Location */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-600 shadow-md">
            <MapPin className="w-8 h-8 mb-4 text-white" />
            <h3 className="font-semibold text-lg">Visit Us</h3>
            <p className="mt-2 text-gray-300">123 Startup St, San Francisco, CA</p>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-600 shadow-md">
            <Clock className="w-8 h-8 mb-4 text-white" />
            <h3 className="font-semibold text-lg">Working Hours</h3>
            <p className="mt-2 text-gray-300">Mon - Fri, 9:00 - 6:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
