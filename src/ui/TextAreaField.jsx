import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FileText } from "lucide-react";

const TextAreaField = ({
  label = "Textarea",
  name,
  value,
  onChange,
  placeholder = "Enter text here...",
  required = false,
  rows = 3,
  error,
  icon: Icon = FileText, // ✅ consistent with others
}) => {
  const labelRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

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

  const isActive = isFocused || value;

  return (
    <div className="relative w-full pt-4">
      <div
        className={`
          relative flex items-start 
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
        {Icon && isActive && (
          <Icon className="text-blue-600 mr-2 mt-1 shrink-0" size={18} />
        )}

        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
          placeholder={isFocused && !value ? placeholder : ""}
          className="
            w-full
            bg-transparent
            outline-none
            text-sm sm:text-base
            text-gray-900
            resize-none
            pr-4
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

export default TextAreaField;