"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "es", name: "Español MX", icon: "circle-flags:mx" },
    { code: "en", name: "English US", icon: "circle-flags:us" },
  ];

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-light-500 dark:bg-secondary-light-400 px-4 py-2 rounded-lg text-dark hover:bg-primary-light-600 dark:hover:bg-secondary-light-200 transition-colors duration-400 cursor-pointer flex items-center gap-x-2"
      >
        <Icon icon={currentLang.icon} width={24} />
        <span className="font-medium">{currentLang.name}</span>
        <Icon 
          icon="tabler:chevron-down" 
          width={20} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 md:bottom-auto md:top-full md:mt-2 w-48 bg-light-50 dark:bg-dark-300 border border-light-200 dark:border-dark-200 rounded-xl shadow-lg overflow-hidden z-50">
          <div className="flex flex-col">
            {languages.map((lang) => (
              <Link 
                key={lang.code}
                locale={lang.code} 
                href={pathname} 
                scroll={false} 
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-x-3 px-4 py-3 hover:bg-light-100 dark:hover:bg-dark-200 transition-colors ${locale === lang.code ? 'bg-light-100 dark:bg-dark-200' : ''}`}
              >
                <Icon icon={lang.icon} width={24} />
                <span className="text-dark-400 dark:text-light-100 font-medium">{lang.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
