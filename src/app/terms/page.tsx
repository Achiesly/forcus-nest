
import React from 'react';

const Terms = () => {
    return (
<div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Terms and Conditions</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Last updated: June 25, 2025</p>

            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Acceptance of Terms</h2>
                    <p className="mb-3 sm:mb-4">
                        By accessing and using FocusNest (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
                    </p>
                </section>

                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Description of Service</h2>
                    <p className="mb-3 sm:mb-4">
                        FocusNest is a web-based Pomodoro timer and task management application designed to help users improve their productivity 
                        through the Pomodoro Technique. The service includes:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 mb-3 sm:mb-4">
                        <li>Customizable Pomodoro timer (work and break intervals)</li>
                        <li>Task management and tracking capabilities</li>
                        <li>Educational content about the Pomodoro Technique</li>
                    </ul>
                </section>

                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Limitation of Liability</h2>
                    <p className="mb-3 sm:mb-4">
                        In no event shall FocusNest be liable for any indirect, incidental, special, consequential, or punitive damages, 
                        including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
                        your use of the Service.
                    </p>
                </section>

                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Changes to Terms</h2>
                    <p className="mb-3 sm:mb-4">
                        We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the 
                        new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after any 
                        modifications constitutes acceptance of the new Terms.
                    </p>
                </section>
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Contact Information</h2>
                    <p className="mb-3 sm:mb-4">
                        If you have any questions or concerns regarding these Terms and Conditions, please don&apos;t hesitate to reach out. You can contact us directly by emailing
                        <br />
                        <a href="mailto:support@focusnest.online" className="text-blue-600 underline break-all">support@focusnest.online</a>. We&apos;re here to help and will do our best to respond promptly.
                    </p>
                </section>
            </div>
        </div>
    </div>
</div>
  );
};

export default Terms;    