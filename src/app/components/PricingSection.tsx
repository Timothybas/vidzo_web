// components/PricingSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 fade-in">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Simple, Transparent Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Monthly Plan */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col border border-gray-200 dark:border-gray-800">
            <h5 className="uppercase text-sm text-gray-500 dark:text-gray-400 mb-2">
              Monthly Plan
              <span className="ml-2 bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded-full">
                1 Week Free
              </span>
            </h5>
            <h2 className="text-4xl font-bold my-4 text-gray-900 dark:text-white">$0.99</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Billed monthly. Cancel anytime.</p>

            <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300 px-2 mb-6">
              {[
                "Remove watermark",
                "Unlimited video capturing",
                "Premium camera features",
                "High-resolution photo access",
                "Customizable GPS overlays (beta)",
                "Premium map styles",
                "Priority location accuracy",
                "Cloud backup support (beta)",
                "Early access to new features",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-auto w-full bg-transparent text-blue-600 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 py-3 px-5 rounded-full font-semibold transition">
              Get Monthly Plan
            </button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col border-2 border-blue-500 dark:border-blue-400">
            <h5 className="uppercase text-sm text-gray-500 dark:text-gray-400 mb-2">
              Yearly Plan
              <span className="ml-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Save 16%
              </span>
            </h5>
            <h2 className="text-4xl font-bold my-4 text-gray-900 dark:text-white">$9.99</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Best for professionals. One-time billing.</p>

            <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300 px-2 mb-6">
              {[
                "All Monthly Features Included",
                "Priority Support",
                "Exclusive Early Beta Access",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-auto w-full bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 py-3 px-5 rounded-full font-semibold transition">
              Get Yearly Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
