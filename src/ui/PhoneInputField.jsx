import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneInputField = ({
  label = "Phone Number",
  value,
  onChange,
  onMetaChange,
  defaultCountry = "IN",
  required = false,
}) => {
  const labelRef = useRef(null);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Animate label when value exists
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

  const handleChange = (val) => {
    onChange(val);

    if (!val) {
      setError(required ? "Phone number is required" : "");
      onMetaChange?.({
        isValid: false,
        country: null,
        nationalNumber: null,
      });
      return;
    }

    if (!isValidPhoneNumber(val)) {
      setError("Invalid phone number");
      onMetaChange?.({
        isValid: false,
        country: null,
        nationalNumber: null,
      });
      return;
    }

    const phone = parsePhoneNumber(val);
    setError("");

    onMetaChange?.({
      isValid: true,
      country: phone.country,
      nationalNumber: phone.nationalNumber,
    });
  };

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
          ${error ? "border-red-500" : isFocused ? "border-blue-600" : "border-gray-300"}
          ${isFocused ? "shadow-sm" : ""}
          bg-white
        `}
      >
        <div
          className="w-full"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <PhoneInput
            international
            defaultCountry={defaultCountry}
            value={value}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-sm sm:text-base text-gray-900"
          />
        </div>

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

export default PhoneInputField;