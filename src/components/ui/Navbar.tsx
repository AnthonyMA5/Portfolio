"use client";

import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navigator");
  const t4 = useTranslations("HomePage");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-light-50/50 dark:bg-dark-400/70 color-transition backdrop-blur-lg">
      <div className="w-full mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex md:w-1/5 justify-start md:justify-center">
          <h1 className="text-xl font-bold">
            <a href="#">{t4("title")}</a>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-6 w-3/5 justify-center">
          <li><a href="#about" className="navbar-link">{t("aboutTitle")}</a></li>
          <li><a href="#projects" className="navbar-link">{t("projectsTitle")}</a></li>
          <li><a href="#experience" className="navbar-link">{t("experienceTitle")}</a></li>
          <li><a href="#contact" className="navbar-link">{t("contactTitle")}</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex w-1/5 justify-end md:justify-center gap-x-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-x-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light-600 dark:text-light-100 p-2" aria-label="Toggle Menu">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nav/95 backdrop-blur-lg border-t border-light-300 dark:border-dark-200 pb-6">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            <li><a href="#about" onClick={() => setIsOpen(false)} className="navbar-link block">{t("aboutTitle")}</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="navbar-link block">{t("projectsTitle")}</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)} className="navbar-link block">{t("experienceTitle")}</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="navbar-link block">{t("contactTitle")}</a></li>
          </ul>
          <div className="flex px-6 pt-2 items-center gap-x-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
