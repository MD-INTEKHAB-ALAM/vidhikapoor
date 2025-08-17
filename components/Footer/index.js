"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black border-t  mt-16">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-neutral-200">YourBrand</h2>
          <p className="mt-3 text-sm text-neutral-100 leading-relaxed">
            Making money transfer easier, faster, and transparent.  
            Compare, choose, and save — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li><Link href="/" className="text-neutral-100  hover:text-gray-900 text-sm">Home</Link></li>
            <li><Link href="/about" className="text-neutral-100  hover:text-gray-900 text-sm">About Us</Link></li>
            <li><Link href="/compare" className="text-neutral-100  hover:text-gray-900 text-sm">Compare Rates</Link></li>
            <li><Link href="/blog" className="text-neutral-100  hover:text-gray-900 text-sm">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-300 tracking-wide">Support</h3>
          <ul className="mt-4 space-y-3">
            <li><Link href="/faq" className="text-neutral-100  hover:text-gray-900 text-sm">FAQ</Link></li>
            <li><Link href="/contact" className="text-neutral-100  hover:text-gray-900 text-sm">Contact</Link></li>
            <li><Link href="/terms" className="text-neutral-100  hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="text-neutral-100  hover:text-gray-900 text-sm">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-200  tracking-wide">Stay Updated</h3>
          <p className="mt-3 text-sm text-neutral-100 ">Subscribe to our newsletter</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border  rounded-l-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-amber-600 text-white rounded-r-lg hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="text-blue-500 hover:text-indigo-600"><FaFacebookF /></Link>
            <Link href="#" className="text-cyan-400 hover:text-indigo-600"><FaTwitter /></Link>
            <Link href="#" className="text-blue-700 hover:text-indigo-600"><FaLinkedinIn /></Link>
            <Link href="#" className="text-red-800 hover:text-indigo-600"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8">
        <div className="w-full max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">Built with ❤️ for transparency</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
