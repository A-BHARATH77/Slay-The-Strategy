'use client';
import { useState } from "react";

const roleOptions = ["Architect", "Interior Designer", "Homeowner", "Contractor", "Real Estate Developer", "Other"];
const requestOptions = ["Product Catalog", "Custom Quote", "Project Consultation", "Partnership Inquiry", "General Information"];

export default function FurnishingForm() {
  interface ContactFormData {
    role: string;
    request: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
  }

  const [formData, setFormData] = useState<ContactFormData>({
    role: "",
    request: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputBase =
    "w-full bg-transparent text-[#1a1a1a] placeholder-[#b0a8a0] text-lg font-light outline-none py-4 px-0 border-0";
  const rowBase =
    "border-b border-[#e0dbd6] px-8 py-1 transition-colors duration-200 hover:bg-[#f5f0ed]/60";
  const labelBase = "block text-[10px] font-bold tracking-[0.18em] text-[#1a1a1a] uppercase pt-5 pb-0";

  return (
    <div
      className="min-h-screen flex items-stretch"
      style={{ background: "#faf7f5", fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Left Panel */}
      <div className="flex-1 flex flex-col justify-center px-14 py-20 max-w-xl">
        {/* Logo mark */}
        <h1
          className="text-5xl font-bold leading-tight text-[#1a1a1a] mb-6 tracking-tight"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
        >
          Furnishing
          <br />
          solutions for
          <br />
          everyone
        </h1>

        <p className="text-[#7a736e] text-base font-light leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          Fill out the form to receive
          <br />
          more information.
        </p>

        {/* Decorative line */}
        <div className="mt-16 w-12 h-[2px] bg-[#c0392b]" />
      </div>

      {/* Divider */}
      <div className="w-px bg-[#e0dbd6] self-stretch" />

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-between" style={{ minWidth: 420 }}>
        <div className="flex-1">
          {/* ROLE */}
          <div className={rowBase}>
            <label className={labelBase}>Role *</label>
            <div className="relative">
              <select
                className={`${inputBase} appearance-none cursor-pointer pr-8`}
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                style={{ fontFamily: "Georgia, serif" }}
              >
                <option value="" disabled>Select</option>
                {roleOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#1a1a1a]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* REQUEST */}
          <div className={rowBase}>
            <label className={labelBase}>Request *</label>
            <div className="relative">
              <select
                className={`${inputBase} appearance-none cursor-pointer pr-8`}
                value={formData.request}
                onChange={(e) => handleChange("request", e.target.value)}
                style={{ fontFamily: "Georgia, serif" }}
              >
                <option value="" disabled>Select</option>
                {requestOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>

          {/* NAME */}
          <div className={rowBase}>
            <label className={labelBase}>Name *</label>
            <input
              type="text"
              className={inputBase}
              placeholder="Write here"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{ fontFamily: "Georgia, serif" }}
            />
          </div>

          {/* SURNAME */}
          <div className={rowBase}>
            <label className={labelBase}>Surname *</label>
            <input
              type="text"
              className={inputBase}
              placeholder="Write here"
              value={formData.surname}
              onChange={(e) => handleChange("surname", e.target.value)}
              style={{ fontFamily: "Georgia, serif" }}
            />
          </div>

          {/* EMAIL */}
          <div className={rowBase}>
            <label className={labelBase}>Email *</label>
            <input
              type="email"
              className={inputBase}
              placeholder="Write here"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ fontFamily: "Georgia, serif" }}
            />
          </div>

          {/* PHONE */}
          <div className={rowBase}>
            <label className={labelBase}>Phone</label>
            <input
              type="tel"
              className={inputBase}
              placeholder="Write here"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              style={{ fontFamily: "Georgia, serif" }}
            />
          </div>

          {/* MESSAGE */}
          <div className={`${rowBase} pb-4`}>
            <label className={labelBase}>Message *</label>
            <textarea
              className={`${inputBase} resize-none min-h-[120px]`}
              placeholder="Write your message or request"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              style={{ fontFamily: "Georgia, serif" }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-8 py-8 border-t border-[#e0dbd6]">
          <button
            onClick={handleSubmit}
            className="group w-full flex items-center justify-between px-8 py-4 bg-[#1a1a1a] text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#c0392b]"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.15em" }}
          >
            <span>{submitted ? "Sent!" : "Send Request"}</span>
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
              <path d="M4 10h12M11 5l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p className="mt-4 text-[10px] text-[#b0a8a0] tracking-wide text-center uppercase" style={{ fontFamily: "Georgia, serif" }}>
            * Required fields
          </p>
        </div>
      </div>
    </div>
  );
}




