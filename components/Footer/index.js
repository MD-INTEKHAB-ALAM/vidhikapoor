import React from "react";
import footerImg from "@/assets/Images/footerImage.jpg";

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#212121] min-h-[400px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LearnO</h2>
          <p className="text-sm leading-relaxed opacity-90">
            Empowering students with resources, guidance, and a connected
            community to achieve academic and career success.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Courses", "FAQ"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-blue-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm opacity-90">
            <li>Email: support@LearnO.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-xs mt-10 border-t border-gray-600 pt-6 opacity-80">
        © {new Date().getFullYear()} <span className="font-semibold">LearnO</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
