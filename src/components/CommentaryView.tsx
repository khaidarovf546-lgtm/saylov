import React from 'react';
import { CODE_CONCLUSION, ELECTION_ARTICLES } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';

interface CommentaryViewProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const CommentaryView: React.FC<CommentaryViewProps> = ({
  language,
  onNavigate,
}) => {
  const t = UI_TRANSLATIONS[language];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const conclusionTitle =
    language === 'ru'
      ? CODE_CONCLUSION.titleRu
      : language === 'en'
        ? CODE_CONCLUSION.titleEn
        : CODE_CONCLUSION.title;
  const conclusionParagraphs =
    language === 'ru'
      ? CODE_CONCLUSION.paragraphsRu
      : language === 'en'
        ? CODE_CONCLUSION.paragraphsEn
        : CODE_CONCLUSION.paragraphs;

  return (
    <main className="bg-white text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-24">
        <div className="mb-12">
          <button
            type="button"
            onClick={() => handleNav({ type: 'home' })}
            className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-[#111111] cursor-pointer"
          >
            ← {t.backHome}
          </button>
        </div>

        <header className="max-w-[760px] pb-14 border-b border-[#111111]">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
            04 · DOKTRINAL VA AMALIY SHARH
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.08] tracking-[-0.02em]">
            {t.allCommentariesTitle}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-neutral-600 leading-relaxed">
            {t.allCommentariesDesc}
          </p>
        </header>

        <div className="divide-y divide-neutral-200 mt-4">
          {ELECTION_ARTICLES.map((article) => {
            const artTitle =
              language === 'ru'
                ? article.titleRu
                : language === 'en'
                  ? article.titleEn
                  : article.title;
            const commentary =
              language === 'ru'
                ? article.lawyerCommentaryRu
                : language === 'en'
                  ? article.lawyerCommentaryEn
                  : article.lawyerCommentary;

            return (
              <article
                key={article.id}
                className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="block font-sans text-xs uppercase tracking-[0.18em] text-[#111111] font-medium">
                    {article.numberLabel}
                  </span>
                  <h2 className="font-serif text-2xl font-medium leading-snug">
                    {artTitle}
                  </h2>
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-neutral-400 pt-1">
                    {article.divisionTitle}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <blockquote className="font-serif italic text-xl md:text-2xl leading-[1.6] text-[#111111]">
                    “{commentary}”
                  </blockquote>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleNav({ type: 'article', articleId: article.id })}
                      className="font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-1 hover:opacity-60 cursor-pointer"
                    >
                      {t.readFullArticle}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Code Conclusion (Xulosa) */}
        <section className="mt-16 pt-14 border-t border-[#111111] max-w-[760px]">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-4">
            VI BO‘LIM · YAKUNIY QOIDA
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            {conclusionTitle}
          </h2>
          <div className="space-y-5 font-serif text-lg md:text-xl leading-[1.8] text-[#111111]/90">
            {conclusionParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
