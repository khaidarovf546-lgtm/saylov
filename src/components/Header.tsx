import React from 'react';
import { Bookmark, Menu, Search } from 'lucide-react';
import { Language } from '../types/editorial';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onNavigateHome: () => void;
  bookmarkCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onChangeLanguage,
  onOpenMenu,
  onOpenSearch,
  onOpenBookmarks,
  onNavigateHome,
  bookmarkCount,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 h-[68px] md:h-[72px] flex items-center justify-between gap-2 sm:gap-4">
          {/* Top Left: Hamburger + Minimal Wordmark */}
          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
            <button
              type="button"
              onClick={onOpenMenu}
              aria-label={t.menuTitle}
              className="w-10 h-10 -ml-2 flex items-center justify-center text-[#111111] hover:opacity-60 transition-opacity cursor-pointer shrink-0"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              type="button"
              onClick={onNavigateHome}
              className="font-serif text-xs sm:text-sm md:text-base font-semibold tracking-[0.09em] sm:tracking-[0.14em] uppercase text-[#111111] whitespace-nowrap shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
            >
              {t.brand}
            </button>
          </div>

          {/* Top Right: Search, Bookmarks, Language Selector */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label={t.searchLabel}
              className="h-10 px-1.5 sm:px-2 flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#111111] hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap shrink-0"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden sm:inline">{t.searchLabel}</span>
            </button>

            <button
              type="button"
              onClick={onOpenBookmarks}
              aria-label={`${t.bookmarksTitle} (${bookmarkCount})`}
              className="h-10 px-1.5 sm:px-2 flex items-center gap-1 text-xs tracking-[0.12em] uppercase text-[#111111] hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap shrink-0"
            >
              <Bookmark className="w-4 h-4 stroke-[1.5]" />
              <span className="tabular-nums text-[11px]">{bookmarkCount}</span>
            </button>

            <span className="h-4 w-px bg-neutral-200" aria-hidden="true" />

            {/* Language Selector */}
            <nav aria-label="Tilni tanlash" className="flex items-center gap-1 sm:gap-2 shrink-0">
              {(
                [
                  { code: 'uz', short: "O‘z", full: "O‘zbek" },
                  { code: 'ru', short: 'Ру', full: 'Русский' },
                  { code: 'en', short: 'En', full: 'English' },
                ] as const
              ).map((item, idx) => {
                const active = language === item.code;
                return (
                  <React.Fragment key={item.code}>
                    {idx > 0 && (
                      <span className="text-neutral-300 text-[11px] select-none" aria-hidden="true">
                        /
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => onChangeLanguage(item.code)}
                      aria-label={item.full}
                      aria-pressed={active}
                      className={`text-[11px] sm:text-xs tracking-[0.04em] sm:tracking-[0.06em] py-1 px-0.5 transition-opacity cursor-pointer whitespace-nowrap shrink-0 ${
                        active
                          ? 'text-[#111111] font-semibold underline underline-offset-4 decoration-1'
                          : 'text-neutral-500 hover:text-[#111111]'
                      }`}
                    >
                      <span className="hidden lg:inline">{item.full}</span>
                      <span className="lg:hidden">{item.short}</span>
                    </button>
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Thin vertical right-edge navigation/edition detail */}
      <aside
        aria-hidden="true"
        className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 pointer-events-none select-none"
      >
        <span className="w-px h-12 bg-neutral-300" />
        <span className="writing-vertical-rl text-[10px] tracking-[0.26em] uppercase text-neutral-400 font-sans">
          {t.verticalEdgeText}
        </span>
        <span className="w-px h-12 bg-neutral-300" />
      </aside>
    </>
  );
};
