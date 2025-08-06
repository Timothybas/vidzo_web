'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faWifi, faLock } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const faqs = [
  {
    question: 'Is Geo Frame free to use?',
    answer: 'Geo Frame offers both free and premium options to suit your needs.',
    icon: faCircleQuestion,
  },
  {
    question: 'Does it work offline?',
    answer: 'Yes, Geo Frame works offline with cached locations.',
    icon: faWifi,
  },
  {
    question: 'Is my location data safe?',
    answer: 'Your data stays private on your device unless you share it.',
    icon: faLock,
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="fade-in py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted mb-8 text-gray-600 dark:text-gray-400">
          Find quick answers to common questions about Geo Frame.
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
                  <Disclosure.Button className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-gray-900 dark:text-white rounded-2xl">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faq.icon} className="text-primary w-5 h-5" />
                      {faq.question}
                    </div>
                    <ChevronUpIcon
                      className={`h-5 w-5 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      } text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 pb-4 text-left text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-block border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition duration-200"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}
