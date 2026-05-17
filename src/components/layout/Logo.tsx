import React from "react";
import Image from "next/image";

export const Logo = ({ className = "h-12 w-12", scrolled = false }: { className?: string, scrolled?: boolean }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} transition-all duration-500 ${scrolled ? "scale-90" : "scale-100"}`}>
      <Image
        src="/brand-icon.svg"
        alt="HELYRO logo"
        width={100}
        height={100}
        className="w-full h-full object-contain drop-shadow-xl"
        priority
      />
    </div>
  );
};
