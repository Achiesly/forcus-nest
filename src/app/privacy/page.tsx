
import React from 'react';

const Privacy = () => {
    return (
<div className="bg-white min-h-screen">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 max-w-full md:max-w-2xl mx-auto text-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
      </div>
      <p className="text-gray-600 mb-8 text-sm sm:text-base">Effective Date: June 25, 2025</p>

      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 letter-spacing-wide">
        <section className="mb-8">
          <p>
            FocusNest (“we,” “us,” or “our”) is committed to protecting your privacy and ensuring a
            secure experience as you use our platform (the “Service”). This Privacy Policy describes
            how we collect, use, store, and protect your personal and usage information when you interact
            with our Service.
          </p>
          <p className="mt-4">
            By choosing to use FocusNest, you acknowledge and agree to the practices described
            in this policy. We encourage all users to read this Privacy Policy carefully to understand how their
            data is handled and to make informed decisions when using our tools and features designed to enhance productivity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p>
            To enhance your experience and improve our services, we may collect the following types of information:
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-3">Personal Information</h3>
          <p>
            While using FocusNest, you may voluntarily provide information such as your name or email address when contacting us.
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-3">Usage Data</h3>
          <p>
            We collect data about how you interact with our Service. This includes details like your IP address, browser type, the pages you visit, time spent on the site, and technical diagnostic data.
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-3">Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and comparable tracking technologies to enhance your experience on FocusNest. These tools help us remember your preferences, tailor content to your needs, and understand how you interact with our platform.
          </p>
          <p className="mt-2">
            You have the option to adjust your cookie settings through your browser at any time. Please note that restricting cookies may impact the performance and usability of certain features within the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
          <ul className="list-disc pl-5 sm:pl-6 mb-4">
            <li>Operate and improve the FocusNest Service</li>
            <li>Personalize your experience</li>
            <li>Analyze usage trends and performance</li>
            <li>Enhance customer support</li>
            <li>Monitor security and prevent abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Data Transfers</h2>
          <p>
            By using FocusNest, you acknowledge and agree that your information may be processed and stored on servers located in regions outside your country of residence. Such transfers are necessary to operate and maintain our services effectively. We ensure that your data is handled securely and in line with the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Data Disclosure</h2>
          <p>
            We may share your information only if required to:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 mb-4">
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms of Service</li>
            <li>Prevent or investigate unlawful activity</li>
            <li>Protect the rights and safety of FocusNest, its users, or the public</li>
          </ul>
          <p>We never sell your personal data to third parties.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p>
            We take data protection seriously and implement appropriate technical and organizational safeguards. However, no system is completely secure, and we cannot guarantee absolute protection of your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p>
            FocusNest may work with trusted third-party providers who help operate our platform and services. These parties only access your data as needed and are contractually obligated to handle it responsibly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Third-Party Advertising</h2>
          <p>
            We partner with third-party advertising providers to display relevant ads across our platform. These partners may use cookies, web beacons, or similar tracking technologies to gather information about your activity on our site and other websites. This data helps them deliver more personalized advertising experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p>
            We may occasionally update this Privacy Policy. Changes will be published on this page with a new effective date. We recommend reviewing it periodically to stay informed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, feel free to reach out to us via email at:<br />
            <a href="mailto:support@focusnest.online" className="text-blue-600 underline mt-2 break-all">
              support@focusnest.online
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
</div>
    );
  
};

export default Privacy;