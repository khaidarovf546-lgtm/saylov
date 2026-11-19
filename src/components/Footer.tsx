import React from 'react';
import { AppView, Language } from '../types/editorial';
import { UI_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const t = UI_TRANSLATIONS[language];

  const handleLinkClick = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#111111] bg-white text-[#111111] mt-24 md:mt-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-5">
            <button
              type="button"
              onClick={() => handleLinkClick({ type: 'home' })}
              className="font-serif text-xl font-semibold tracking-[0.14em] uppercase text-[#111111] hover:opacity-70 transition-opacity cursor-pointer text-left"
            >
              {t.brand}
            </button>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              {t.footerTagline}
            </p>
          </div>

          {/* Primary Sections */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
              {t.footerNavHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'section', pillarId: 'kodeks' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.kodeks}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'section', pillarId: 'huquq' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.huquq}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'section', pillarId: 'komissiyalar' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.komissiyalar}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'commentary' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.izohlar}
                </button>
              </li>
            </ul>
          </div>

          {/* Practical Resources */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
              {t.footerResourcesHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'faq' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.faq}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'glossary' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.glossary}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick({ type: 'quiz' })}
                  className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                >
                  {t.navLabels.quiz}
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t.footerCopyright}</p>
          <p className="tracking-[0.14em] uppercase">O‘zbekiston Respublikasi Saylov kodeksi</p>
        </div>
      </div>
    </footer>
  );
};
