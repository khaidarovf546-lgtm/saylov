import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';
import { searchElectionContent } from '../utils/electionSearch';

interface SearchOverlayProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onNavigate: (view: AppView) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  language,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const results = useMemo(
    () => searchElectionContent(query, language),
    [query, language],
  );

  if (!isOpen) return null;

  const handleSelect = (view: AppView) => {
    onNavigate(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.searchLabel}
      className="fixed inset-0 z-50 bg-white text-[#111111] overflow-y-auto"
    >
      <div className="max-w-[960px] mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between pb-6">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            {t.searchLabel}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeLabel}
            className="h-10 px-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] hover:opacity-60 transition-opacity cursor-pointer"
          >
            <span>{t.closeLabel}</span>
            <X className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>

        <div className="mt-6 pb-4 border-b border-[#111111]">
          <label htmlFor="editorial-search-input" className="sr-only">
            {t.searchLabel}
          </label>
          <input
            ref={inputRef}
            id="editorial-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full font-serif text-2xl md:text-4xl text-[#111111] placeholder:text-neutral-300 bg-transparent focus:outline-none"
          />
        </div>

        <div className="mt-10">
          {!query.trim() ? (
            <div className="space-y-6">
              <p className="text-sm text-neutral-500">{t.searchEmptyPrompt}</p>
              <div className="flex flex-wrap gap-3">
                {['18 yosh', '75 ta', 'Markaziy', 'yashirin', 'favqulodda holat'].map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => setQuery(sample)}
                    className="px-3.5 py-2 border border-neutral-300 text-xs text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="text-base text-neutral-600 py-8">{t.searchNoResults}</p>
          ) : (
            <div className="divide-y divide-neutral-200">
              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.targetView)}
                  className="w-full py-6 text-left group flex items-start justify-between gap-6 cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      {item.kicker}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-medium group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                      {item.excerpt}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-400 group-hover:text-[#111111] pt-2 shrink-0">
                    →
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
