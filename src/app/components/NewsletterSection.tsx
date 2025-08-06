// components/NewsletterSection.jsx
import { FaEnvelopeOpenText, FaPaperPlane } from "react-icons/fa";

import { useState } from "react";
import { db, analytics } from '@/../lib/firebase';
import { collection, addDoc } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

export default function NewsletterSection() {
  // State to manage email input and message feedback
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "newsletter"), {
        email,
        userAgent: navigator.userAgent,
        timestamp: new Date(),
      });

      if (analytics) {
        logEvent(analytics, "newsletter_signup", {
          email: email.trim(),
          user_agent: navigator.userAgent,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
      }

      setMessage({ text: "✅ You have successfully subscribed!", color: "green" });
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage({ text: "❌ Something went wrong. Please try again.", color: "red" });
    }
  };

  return (
    <section className="newsletter fade-in animated-gradient py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-2xl px-6 sm:px-8 md:px-12 text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
          <FaEnvelopeOpenText className="text-xl sm:text-2xl" />
          Stay Connected with Geo Frame
        </h2>

        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Subscribe to get updates, feature announcements, and exclusive offers.
          No spam, ever — just value.
        </p>

        <form onSubmit={handleSubmit} id="newsletter-form" className="flex flex-col items-center gap-4">
          <input
            type="email"
            id="newsletter-email"
            required
            placeholder="Enter your email address"
            className="w-full max-w-lg px-6 py-4 text-center text-base rounded-full shadow focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <FaPaperPlane />
            Subscribe Now
          </button>
          {message && (
            <p id="message" className="text-sm" style={{ color: message.color }}>
              {message.text}
            </p>
          )}
        </form>

        <p id="message" className="mt-4 text-sm text-green-600 dark:text-green-400"></p>
      </div>
    </section>
  );
}
