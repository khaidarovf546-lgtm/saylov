import React, { useEffect } from 'react';
import { Trash2, X } from 'lucide-react';
import { ELECTION_ARTICLES } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';

interface BookmarksDrawerProps {
  isOpen: boolean;
  language: Language;
  bookmarkedIds: string[];
  onClose: () => void;
  onRemoveBookmark: (articleId: string) => void;
  onNavigate: (view: AppView) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  language,
  bookmarkedIds,
  onClose,
  onRemoveBookmark,
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

  const savedArticles = ELECTION_ARTICLES.filter((a) => bookmarkedIds.includes(a.id));

  const getTitle = (article: (typeof ELECTION_ARTICLES)[number]) =>
    language === 'ru' ? article.titleRu : language === 'en' ? article.titleEn : article.title;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.bookmarksTitle}
      className="fixed inset-0 z-50 flex justify-end bg-black/25"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white text-[#111111] h-full overflow-y-auto border-l border-neutral-200 p-8 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
            <h2 className="font-serif text-2xl font-medium">{t.bookmarksTitle}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.closeLabel}
              className="w-10 h-10 flex items-center justify-center hover:opacity-60 cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          {savedArticles.length === 0 ? (
            <p className="mt-8 text-sm text-neutral-500 leading-relaxed">{t.bookmarksEmpty}</p>
          ) : (
            <div className="mt-4 divide-y divide-neutral-200">
              {savedArticles.map((article) => (
                <div key={article.id} className="py-5 flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate({ type: 'article', articleId: article.id });
                      onClose();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left group cursor-pointer"
                  >
                    <span className="block font-sans text-[11px] uppercase tracking-[0.16em] text-neutral-500 mb-1">
                      {article.numberLabel}
                    </span>
                    <span className="font-serif text-lg font-medium group-hover:underline underline-offset-4 decoration-1">
                      {getTitle(article)}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveBookmark(article.id)}
                    aria-label={`${article.numberLabel} olib tashlash`}
                    className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-[#111111] shrink-0 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-neutral-200 text-xs text-neutral-400 tabular-nums">
          {savedArticles.length} / {ELECTION_ARTICLES.length}
        </div>
      </div>
    </div>
  );
};
