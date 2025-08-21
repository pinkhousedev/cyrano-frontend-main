"use client";

import { Check, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import React from "react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Add useEffect to prevent scroll events on the dropdown
  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('wheel', preventScroll, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', preventScroll);
    };
  }, [isOpen]);

  const languages = React.useMemo(
    () => ({
      en: "English (US)",
      fr: "Français (Canada)",
      pt: "Português (Brasil)",
    }),
    []
  );

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    if (cookieLocale && Object.keys(languages).includes(cookieLocale)) {
      setLocale(cookieLocale);
    }
  }, [languages]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateLocale = (lang: string) => {
    if (lang === locale) return;
    document.cookie = `locale=${lang}; path=/; max-age=31536000`;
    setLocale(lang);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative w-[200px] " ref={dropdownRef}>
      <button
      style={{color:"#959dab"}}
        className="relative left-[150px] flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md hover:bg-[#3f3945] dark:hover:bg-[#3f3945] text-[#959dab] dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} />
        <span className="font-medium text-sm">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute left-[150px] bottom-full mb-1 w-[220px] bg-[#29252D] rounded-md shadow-lg border z-50 overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              className="flex items-center  justify-between w-full px-4 py-3 text-left text-sm hover:bg-[#3f3945] dark:hover:bg-[#3f3945] text-white"
              onClick={() => updateLocale(code)}
            >
              {name}  
              {code === locale && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
