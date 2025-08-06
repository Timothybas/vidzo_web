import Link from 'next/link';

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 relative">
      {/* Wave Divider */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f9fc"
            d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,117.3C840,96,960,64,1080,80C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto py-10 px-4">
        <p className="mb-2 text-sm">
          © 2025 <span className="font-medium">Vidzo Technologies</span> |{' '}
          <span className="font-medium">Geo Frame</span>. All rights reserved.
        </p>
        <p className="text-sm space-x-3">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <span>|</span>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
        </p>
      </div>
    </footer>
  );
}
