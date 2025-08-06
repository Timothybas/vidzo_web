'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm fixed z-50 py-3 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.webp"
          alt="Geo Frame Logo"
          width={40}
          height={40}
          className="h-10 w-10 rounded object-cover"
        />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base text-gray-800 dark:text-white">Geo Frame</span>
            <small className="text-xs text-gray-500 dark:text-gray-400">
              Capture. Tag. Share with Precision.
            </small>
          </div>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 dark:text-white focus:outline-none"
        >
          <svg className="w-6 h-6"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/#features" className="nav-link">Features</Link></li>
          <li><Link href="/#screenshots" className="nav-link">Screenshots</Link></li>
          <li><Link href="/#reviews" className="nav-link">Reviews</Link></li>
          <li><Link href="/#faq" className="nav-link">FAQ</Link></li>
          {/* <li>
          <DarkModeToggle />
          </li> */}
          <li>
            <Link
              href="https://play.google.com/store/apps/details?id=com.orbitcodeworks.geoframe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            >
              <FaDownload />
              Download App
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/#features" className="nav-link">Features</Link></li>
            <li><Link href="/#screenshots" className="nav-link">Screenshots</Link></li>
            <li><Link href="/#reviews" className="nav-link">Reviews</Link></li>
            <li><Link href="/#faq" className="nav-link">FAQ</Link></li>
            {/* <li>
            <DarkModeToggle />
            </li> */}
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.orbitcodeworks.geoframe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
              >
                <FaDownload />
                Download App
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
