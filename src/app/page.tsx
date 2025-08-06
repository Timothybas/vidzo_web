"use client"; // if using in App Router client component

// import Image from "next/image";
import NewsletterSection from "./components/NewsletterSection";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import RatingSection from "./components/RatingSection";
import FeaturesSection from "./components/FeaturesSection";
import ScreenshotsSection from "./components/ScreenshotsSection";
import HeroSection from "./components/HeroSection";
import Head from 'next/head';

import { useEffect } from "react";

import { analytics, logEvent } from "@/../lib/firebase"; 

export default function Home() {

useEffect(() => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: 'Home Page',
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
}, []);
  return (
    <>
          <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Geo Frame - GPS Camera App for Professionals</title>
        <meta
          name="description"
          content="Capture photos with GPS, timestamp, address & static map overlays. Trusted by professionals for fieldwork, delivery tracking, and exploration."
        />
        <meta
          name="keywords"
          content="GPS Camera, Geo Tagging, Timestamp Photos, Location Camera, Map Overlay, Professional Camera App, Android GPS Camera, Field Work Photos, Geo Frame App"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Vidzo Technologies" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vidzo.app/" />
        <meta property="og:title" content="Geo Frame - GPS Camera App for Professionals" />
        <meta
          property="og:description"
          content="Capture photos with GPS, timestamp, address & static map overlays. Trusted by professionals worldwide."
        />
        <meta property="og:image" content="https://www.vidzo.app/assets/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vidzo.app/" />
        <meta name="twitter:title" content="Geo Frame - GPS Camera App for Professionals" />
        <meta
          name="twitter:description"
          content="Capture photos with GPS, timestamp, address & static map overlays. Trusted by professionals worldwide."
        />
        <meta name="twitter:image" content="https://www.vidzo.app/assets/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />
      {/* Screenshots Section */}
      <ScreenshotsSection />
      {/* Features Section */} 
      <FeaturesSection />
      {/* Rating Section */}
      <RatingSection />
      {/* Pricing Section */}
      <PricingSection />
      {/* FAQ Section */}
      <FaqSection />
      {/* Newsletter Section */}
      <NewsletterSection /> 
    </main>

    </>
  );
}
