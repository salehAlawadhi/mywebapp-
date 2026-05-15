import React from "react";

export const Logo = ({ className = "h-12 w-12", scrolled = false }: { className?: string, scrolled?: boolean }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Stylized 'H' - Two vertical bars with a elegant connection */}
        <path
          d="M30 20V80M70 20V80"
          stroke={scrolled ? "#0f172a" : "white"}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M30 50H70"
          stroke={scrolled ? "#0f172a" : "white"}
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Red Underline - The "Brand Signature" */}
        <path
          d="M20 85C40 82 60 88 80 85"
          stroke="#ef4444"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
