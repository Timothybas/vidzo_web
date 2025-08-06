import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-35 py-20 bg-white dark:bg-gray-950">
      {/* Background circles */}
      <div className="absolute w-96 h-96 bg-blue-100 rounded-full top-[-5rem] left-[-5rem] blur-3xl opacity-30 z-0"></div>
      <div className="absolute w-96 h-96 bg-purple-200 rounded-full bottom-[-5rem] right-[-5rem] blur-3xl opacity-30 z-0"></div>
      <div className="absolute w-96 h-96 bg-green-100 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-yellow-100 rounded-full top-1/4 right-1/4 blur-3xl opacity-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-red-100 rounded-full bottom-1/4 left-1/4 blur-3xl opacity-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-pink-100 rounded-full top-1/3 right-1/3 blur-3xl opacity-20 z-0"></div>

      {/* Flying Icons */}
      {/* <div className="absolute z-20">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="absolute text-blue-500 text-4xl animate-fly-slow top-10 left-[-10%]"
        />
        <FontAwesomeIcon
          icon={faCamera}
          className="absolute text-yellow-400 text-4xl animate-fly-medium top-32 left-[-10%]"
        />
        <FontAwesomeIcon
          icon={faMap}
          className="absolute text-green-500 text-4xl animate-fly-fast top-56 left-[-10%]"
        />
      </div> */}

      {/* Content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Capture. Tag. Share.<br className="hidden lg:block" />
              Professionally.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 pt-4">
              Geo Frame helps you capture photos with GPS, Timestamp & Overlays.<br />
              Trusted by professionals worldwide.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-4">
              <Link href="#" className="flex items-center gap-2 border border-gray-900 text-gray-900 dark:text-white dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition px-6 py-2 rounded-full">
                <i className="fab fa-apple fa-lg"></i>
                  <FontAwesomeIcon icon={faAppStoreIos} className="fab fa-apple fa-lg" /> 
                <span>App Store</span>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.orbitcodeworks.geoframe" className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-2 rounded-full" >
                <FontAwesomeIcon icon={faGooglePlay} className="fab fa-google-play fa-lg" />
                <span>Google Play</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 relative text-center">
            <div className="relative inline-block">
              <Image
                src="/images/banner.webp"
                alt="App Preview"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
                priority
              />
              <div className="absolute inset-0 -z-10 bg-dots bg-repeat opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
