"use client";
import Link from "next/link";

const navItems = ["Learn", "Plan", "Tests", "Contact", "About"];

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-amber-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-gray-900">
          LearnO
        </Link>

        {/* Center Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-full hover:bg-gray-50 transition"
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gray-900 hover:bg-gray-800 transition"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
