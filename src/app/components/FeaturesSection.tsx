import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faClock,
  faMap,
  faLanguage,
  faShieldAlt,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faMapMarkerAlt,
    title: 'Precise GPS Tagging',
    description: 'Capture accurate GPS location with every photo and video.',
  },
  {
    icon: faClock,
    title: 'Timestamp Overlay',
    description: 'Embed date and time directly onto your captures for verification.',
  },
  {
    icon: faMap,
    title: 'Static Map Snapshot',
    description: 'Attach a small map overlay for visual location clarity.',
  },
  {
    icon: faLanguage,
    title: 'Multi-Language Support',
    description: 'Available in multiple languages for global professionals.',
  },
  {
    icon: faShieldAlt,
    title: 'Data Privacy First',
    description: 'All photos saved locally; no cloud sync required for privacy.',
  },
  {
    icon: faBolt,
    title: 'Lightweight & Fast',
    description: 'Optimized for quick performance even on low-end devices.',
  },
];

export default function FeaturesSection() {
  return (
<section
  id="features"
  className="py-20 fade-in bg-gradient-to-br from-[#eaf1ff] to-[#f7f9fc] dark:from-gray-900 dark:to-gray-950"
>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features for Professionals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 text-center h-full transition-colors">
              <div className="text-blue-600 text-3xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
