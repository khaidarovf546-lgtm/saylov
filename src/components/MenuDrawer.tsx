import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ELECTION_ARTICLES } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';

interface MenuDrawerProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onNavigate: (view: AppView) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  language,
  onClose,
  onNavigate,
}) => {
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const go = (view: AppView) => {
    onNavigate(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getArticleTitle = (article: (typeof ELECTION_ARTICLES)[number]) => {
    if (language === 'ru') return article.titleRu;
    if (language === 'en') return article.titleEn;
    return article.title;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.menuTitle}
      className="fixed inset-0 z-50 bg-white text-[#111111] overflow-y-auto"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="h-[56px] flex items-center justify-between border-b border-neutral-200 pb-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            {t.menuTitle}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 md:py-16">
          {/* Primary Sections & Practical Modules */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-6">
                {t.editorialGridLabel}
              </p>
              <nav aria-label={t.editorialGridLabel} className="space-y-4">
                {[
                  { label: t.navLabels.home, view: { type: 'home' } as AppView },
                  {
                    label: t.navLabels.kodeks,
                    view: { type: 'section', pillarId: 'kodeks' } as AppView,
                  },
                  {
                    label: t.navLabels.huquq,
                    view: { type: 'section', pillarId: 'huquq' } as AppView,
                  },
                  {
                    label: t.navLabels.komissiyalar,
                    view: { type: 'section', pillarId: 'komissiyalar' } as AppView,
                  },
                  { label: t.navLabels.izohlar, view: { type: 'commentary' } as AppView },
                ].map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => go(item.view)}
                    className="w-full text-left group flex items-baseline gap-4 py-1 cursor-pointer"
                  >
                    <span className="font-sans text-xs tabular-nums text-neutral-400">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl font-medium group-hover:underline underline-offset-8 decoration-1">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-5">
                {t.toolsLabel}
              </p>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => go({ type: 'faq' })}
                  className="block text-left text-base font-medium hover:underline underline-offset-4 cursor-pointer py-1"
                >
                  {t.navLabels.faq}
                </button>
                <button
                  type="button"
                  onClick={() => go({ type: 'glossary' })}
                  className="block text-left text-base font-medium hover:underline underline-offset-4 cursor-pointer py-1"
                >
                  {t.navLabels.glossary}
                </button>
                <button
                  type="button"
                  onClick={() => go({ type: 'quiz' })}
                  className="block text-left text-base font-medium hover:underline underline-offset-4 cursor-pointer py-1"
                >
                  {t.navLabels.quiz}
                </button>
              </div>
            </div>
          </div>

          {/* Complete Article Index */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-10 lg:pt-0 lg:pl-14">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-6">
              SAYLOV KODEKSI · MODDALAR MUNDARIJASI
            </p>
            <div className="divide-y divide-neutral-200">
              {ELECTION_ARTICLES.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => go({ type: 'article', articleId: article.id })}
                  className="w-full py-3.5 flex items-baseline justify-between gap-6 text-left group cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="font-sans text-xs uppercase tracking-[0.14em] text-neutral-500 tabular-nums shrink-0 w-24">
                      {article.numberLabel}
                    </span>
                    <span className="font-serif text-base md:text-lg text-[#111111] group-hover:underline underline-offset-4 decoration-1 truncate">
                      {getArticleTitle(article)}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 shrink-0 group-hover:text-[#111111] transition-colors">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
