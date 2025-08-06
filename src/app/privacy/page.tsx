import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main>
        <section className="pt-44 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: July 2025</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">1. Terms of Service</h2>
                <p className="text-gray-700 mb-4">
                By using the Geo Frame app (&quot;Application&quot;), you agree to the following terms. Please read them carefully.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-2">Use of Application</h3>
                <p className="text-gray-700 mb-4">
                Geo Frame is provided &quot;as-is&quot; to help users capture photos and videos with GPS, timestamps, and overlays for professional or personal use.
                </p>
                <p className="text-gray-700 mb-4">
                You agree not to misuse the app, reverse-engineer, copy, or exploit any part of Geo Frame without prior permission.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-2">Subscription & Payment</h3>
                <p className="text-gray-700 mb-4">
                Some features require Link paid subscription via Google Play Billing. Fees are displayed in-app. You can cancel any time via your Google Play account settings. We reserve the right to update pricing with notice.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-2">User Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>You are responsible for the content you capture.</li>
                <li>Ensure compliance with local laws regarding GPS, privacy, and photography.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-2">Liability Disclaimer</h3>
                <p className="text-gray-700 mb-4">
                We are not responsible for loss of data, inaccurate GPS readings, device issues, or indirect damages. Use Geo Frame at your own risk.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">2. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">Geo Frame respects your privacy. Here&apos; how we handle your data:</p>

                <h3 className="text-xl font-medium mt-6 mb-2">Data We Collect</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li><strong>Locally Stored:</strong> Photos, GPS, timestamps, overlays are stored only on your device. Geo Frame does not upload your content.</li>
                <li><strong>Optional:</strong> Email (for newsletter) and basic analytics with your consent.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-2">What We Never Collect</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>No passwords</li>
                <li>No contacts</li>
                <li>No background GPS tracking unless capturing media</li>
                <li>No unauthorized content sharing</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-2">Third-Party Services</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Google Play Billing (subscriptions)</li>
                <li>Firebase (newsletter)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                These services may collect limited data as per their own policies. We do not sell your data.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">3. Your Rights</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Access your data</li>
                <li>Request data deletion (newsletter only; app data is local)</li>
                <li>Unsubscribe from newsletters anytime</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4">4. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                We may update this page occasionally. Major changes will be communicated via app updates or our website.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contact Us</h2>
                <p className="text-gray-700">For any questions:</p>
                <p className="text-gray-700 mb-4">
                Email: <Link href="mailto:support@vidzo.app" className="text-blue-600 underline hover:text-blue-800">support@vidzo.app</Link>
                </p> 
            </div>
        </section>

    </main>
  );
}
