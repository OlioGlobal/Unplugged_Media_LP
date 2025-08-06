"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // or 'next/navigation' for app router
import Head from "next/head";

export default function ThankYou() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Redirect to home after 10 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Thank You - Form Submitted Successfully</title>
        <meta
          name="description"
          content="Thank you for contacting us. We'll get back to you soon."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Thank You!
            </h1>

            <p className="text-gray-600 text-lg">
              Your message has been sent successfully
            </p>
          </div>

          {/* Message Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              What happens next?
            </h2>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                We'll review your inquiry within 24 hours
              </li>

              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Our team will contact you soon
              </li>

              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Check your email for confirmation
              </li>
            </ul>
          </div>

          {/* Auto Redirect Notice */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Redirecting to homepage in {countdown} seconds...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
              <div
                className="bg-red-600 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
