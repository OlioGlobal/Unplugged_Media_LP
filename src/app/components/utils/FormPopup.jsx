import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormPopup({ isOpen, onClose }) {
  const router = useRouter();

  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Capture UTM parameters
  const captureUtmParameters = () => {
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_campaignname",
      "utm_adgroup",
      "utm_adgroupname",
      "utm_term",
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};

    utmParams.forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
      }
    });

    return utmData;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs = {};

    if (!values.name.trim()) errs.name = "Name is required";

    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errs.email = "Valid email required";
    }

    const cleanedMobile = values.mobile.replace(/\D/g, "");
    if (!cleanedMobile) {
      errs.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(cleanedMobile)) {
      errs.mobile = "Mobile number must be exactly 10 digits";
    } else if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      errs.mobile = "Enter a valid mobile number";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setSubmitting(true);

    // Capture UTM parameters at submission
    const utmData = captureUtmParameters();

    const payload = {
      ...values,
      utm: utmData,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      // GTM event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "leadFormSubmissionSuccess",
        formId: "leadFormPopup",
      });

      // Reset form
      setValues({
        name: "",
        mobile: "",
        email: "",
        companyName: "",
      });

      onClose?.();
      router.push("/thank-you");
    } catch (error) {
      setErrors({ submission: "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      setValues({
        name: "",
        mobile: "",
        email: "",
        companyName: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-[#EAE6E3] mx-[4%] p-5 md:p-8 max-w-md w-full shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="para2 font-semibold text-[#253844]">
            Connect With Us
          </h2>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-500 cursor-pointer hover:text-gray-700 p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} id="leadForm">
          {[
            {
              name: "name",
              label: "Name*",
              placeholder: "Enter your name",
              required: true,
            },
            {
              name: "mobile",
              label: "Mobile*",
              placeholder: "Enter mobile number",
              type: "tel",
              required: true,
            },
            {
              name: "email",
              label: "Email*",
              placeholder: "Enter email address",
              type: "email",
              required: true,
            },
            {
              name: "companyName",
              label: "Company Name",
              placeholder: "Enter company name",
              required: false,
            },
          ].map(({ name, label, placeholder, type = "text", required }) => (
            <div key={name} className="mb-4">
              <label className="block text-[14px] text-[#253844] font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                id={name}
                value={values[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full pb-2 border-b-2 focus:outline-none transition-colors
                  ${errors[name] ? "border-red-500" : "border-gray-300"}
                  focus:border-gray-800 placeholder-gray-400`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {errors.submission && (
            <div className="mb-4 text-red-600 text-sm">{errors.submission}</div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#DD3333] hover:bg-[#be1c1c] text-[18px] py-[9px] px-[0px] cursor-pointer text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
