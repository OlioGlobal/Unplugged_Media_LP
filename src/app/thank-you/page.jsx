// pages/thank-you.js
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Blurred BG Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/bg.png"
          alt="Camera background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Modal Card */}
      <div className="bg-white bg-opacity-95 rounded-lg shadow-xl max-w-md w-full mx-4 p-8 text-center">
        <div className="flex justify-center mb-4">
          {/* SVG Checkmark Icon */}
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
              <path d="M7 13l3 3 6-6" />
            </svg>
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Thank you for your inquiry!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out to us. We’ve received your information and
          are excited to learn more about your project. Our team will carefully
          review your submission and get in touch within{" "}
          <span className="font-semibold">24 hours</span> to discuss how we can
          bring your vision to life.
        </p>

        <div className="flex justify-center">
          <Link href="/">
            <p className="inline-flex items-center gap-2 text-gray-500 px-4 py-2 rounded-md hover:underline transition text-base font-medium">
              {/* Home SVG Icon */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10M9 21V13h6v8"
                />
              </svg>
              Back to Homepage
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
