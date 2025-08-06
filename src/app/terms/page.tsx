import Link from 'next/link';

export default function FAQPage() {
  return ( 
        <main className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
                <p className="text-gray-700 dark:text-gray-300">By downloading or using Geo Frame, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the app.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">2. Use of Service</h2>
                <p className="text-gray-700 dark:text-gray-300">Geo Frame is designed to provide GPS-based photography and videography services. Users must comply with applicable laws while using this app.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">3. Subscription &amp; Payment</h2>
                <p className="text-gray-700 dark:text-gray-300">Some features require Link paid subscription. Subscriptions renew automatically unless cancelled. All billing is handled via Google Play Store.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">4. Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300">We respect your privacy. Location data and media are stored locally on your device unless you explicitly share them. Refer to our Privacy Policy for full details.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">5. Limitation of Liability</h2>
                <p className="text-gray-700 dark:text-gray-300">Geo Frame is provided “as is.” We are not liable for any data loss, damages, or inaccuracies resulting from the app’s use.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">6. Changes to Terms</h2>
                <p className="text-gray-700 dark:text-gray-300">We may update these terms at any time. Continued use after changes indicates acceptance of the new terms.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">7. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300">If you have questions or need support, contact us at <strong><Link href="mailto:support@vidzo.app" className="text-blue-600 underline hover:text-blue-800">support@vidzo.app</Link></strong>.</p>
            </section>
        </main>
 
  )};