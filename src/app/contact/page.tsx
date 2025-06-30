'use client';

import { Mail, } from 'lucide-react';

export default function ContactPage() {
    return (

    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Content */}
      <div className="bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl mx-auto mt-10 mb-11">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">Contact</h1>
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-base">
          We&apos;re here to help! Whether you have a question, suggestion, or just want to say hi,
          don&apos;t hesitate to reach out. We aim to respond as soon as possible.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Mail className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 mt-1" />
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Support Email</p>
              <a
                href="mailto:support@focusnest.online"
                className="text-blue-600 hover:underline break-all text-xs sm:text-base"
              >
                support@focusnest.online
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <span className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-red-500 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Feedback & Suggestions</p>
              <p className="text-gray-600 text-xs sm:text-base">We love hearing from users! Help us improve FocusNest by sharing your thoughts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}