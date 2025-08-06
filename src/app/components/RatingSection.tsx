// components/StarRating.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function RatingSection() {
  return (
      <section className="py-12 fade-in bg-gradient-to-br from-[#eaf1ff] to-[#f7f9fc] dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Loved by Professionals Worldwide
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands who trust Geo Frame for accurate, reliable GPS camera solutions.
            </p>

            <div className="inline-flex items-center justify-center p-6 rounded-2xl shadow-sm bg-white dark:bg-gray-900">
              <div className="me-4 text-left">
                <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-0">4.9</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">out of 5</p>
              </div>
              <div className="flex space-x-1 text-yellow-400 text-lg">
              <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Based on 1,200+ verified professional users
            </p> 
          </div>
      </section>
  );
}