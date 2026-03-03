export function PrivacyPolicy() {
  return (
    <div className="pt-20 pb-20 md:pb-0">
      <section className="relative bg-gradient-to-br from-[#ecfeff] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: March 3, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700">
              We may collect personal details you submit through appointment forms, including
              name, phone number, email address, preferred date, selected service, and message
              content.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your information to respond to requests, schedule appointments, send service
              communication, and improve clinic operations and patient support.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Protection</h2>
            <p className="text-gray-700">
              We apply reasonable administrative and technical safeguards to protect your data
              against unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Sharing of Information</h2>
            <p className="text-gray-700">
              We do not sell your personal information. Data may be shared only with trusted
              service providers when required to operate our appointment and communication systems.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Cookies and Analytics</h2>
            <p className="text-gray-700">
              This website may use cookies or analytics tools to understand site traffic and user
              behavior, helping us improve performance and user experience.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="text-gray-700">
              You may request access, correction, or deletion of your personal data by contacting
              the clinic directly.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p className="text-gray-700">
              If you have privacy questions, contact us at{" "}
              <a href="mailto:info@smilecare.com" className="text-[#0f766e] hover:underline">
                info@smilecare.com
              </a>{" "}
              or call{" "}
              <a href="tel:+251965701208" className="text-[#0f766e] hover:underline">
                (+251) 96 570 1208
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
