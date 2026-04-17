import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Mail } from "lucide-react";

/* Base format */
const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* Strict public domains */
const PUBLIC_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
];

/* Institutional endings */
const INSTITUTIONAL_REGEX = /\.(ac\.in|edu|edu\.in)$/;

const EmailInputField = ({
  label = "Email",
  value,
  onChange,
  placeholder = "example@email.com",
  required = false,
}) => {
  const labelRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (value) {
      gsap.to(labelRef.current, {
        y: -24,
        scale: 0.85,
        color: "#2563eb",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [value]);

  const validateEmail = (email) => {
    if (!email) return required ? "Email is required" : "";

    if (!EMAIL_REGEX.test(email)) {
      return "Invalid email format";
    }

    const domain = email.split("@")[1].toLowerCase();

    if (PUBLIC_DOMAINS.includes(domain)) return "";
    if (INSTITUTIONAL_REGEX.test(domain)) return "";

    const parts = domain.split(".");
    if (parts.length >= 2 && parts.at(-1).length >= 2) return "";

    return "Invalid email domain";
  };

  const handleFocus = () => {
    setIsFocused(true);

    gsap.to(labelRef.current, {
      y: -24,
      scale: 0.85,
      color: "#2563eb",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(true);

    const err = validateEmail(value);
    setError(err);
    setIsValid(!err && value);

    if (!value) {
      gsap.to(labelRef.current, {
        y: 0,
        scale: 1,
        color: "#6b7280",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e);

    if (isTouched) {
      const err = validateEmail(val);
      setError(err);
      setIsValid(!err && val);
    }
  };

  const isActive = isFocused || value;

  return (
    <div className="relative w-full pt-4">
      <div
        className={`
          relative flex items-center 
          px-3 sm:px-4 
          py-2.5 sm:py-3
          rounded-lg 
          border 
          transition-all duration-200
          ${
            error
              ? "border-red-500"
              : isFocused
              ? "border-blue-600"
              : "border-gray-300"
          }
          ${isFocused ? "shadow-sm" : ""}
          bg-white
        `}
      >
        {/* Icon */}
        {isActive && (
          <Mail className="text-blue-600 mr-2 shrink-0" size={18} />
        )}

        <input
          type="email"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused && !value ? placeholder : ""}
          className="
            w-full 
            bg-transparent 
            outline-none 
            text-sm sm:text-base 
            text-gray-900 pr-4
          "
        />

        {/* Floating Label */}
        <label
          ref={labelRef}
          className="
            absolute 
            left-3 sm:left-4 
            top-3 
            text-sm 
            font-medium 
            text-gray-600
            pointer-events-none 
            origin-left 
            bg-white 
            px-1
          "
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInputField;