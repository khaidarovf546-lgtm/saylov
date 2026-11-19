import React from 'react';
import { EDITORIAL_PILLARS, ELECTION_ARTICLES } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language, PillarId } from '../types/editorial';

interface SectionViewProps {
  pillarId: PillarId;
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const SectionView: React.FC<SectionViewProps> = ({
  pillarId,
  language,
  onNavigate,
}) => {
  const t = UI_TRANSLATIONS[language];
  const pillar = EDITORIAL_PILLARS.find((p) => p.id === pillarId) || EDITORIAL_PILLARS[0];
  const articles = ELECTION_ARTICLES.filter((a) => a.pillarId === pillar.id);

  const title =
    language === 'ru' ? pillar.titleRu : language === 'en' ? pillar.titleEn : pillar.title;
  const category =
    language === 'ru'
      ? pillar.categoryLabelRu
      : language === 'en'
        ? pillar.categoryLabelEn
        : pillar.categoryLabel;
  const description =
    language === 'ru'
      ? pillar.descriptionRu
      : language === 'en'
        ? pillar.descriptionEn
        : pillar.description;

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white text-[#111111] min-h-[70vh]">
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

        <header className="max-w-[780px] pb-14 border-b border-[#111111]">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
            {pillar.index} · {category}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.08] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        </header>

        <div className="divide-y divide-neutral-200 mt-4">
          {articles.map((article) => {
            const artTitle =
              language === 'ru'
                ? article.titleRu
                : language === 'en'
                  ? article.titleEn
                  : article.title;
            const artSummary =
              language === 'ru'
                ? article.leadSummaryRu
                : language === 'en'
                  ? article.leadSummaryEn
                  : article.leadSummary;

            return (
              <article
                key={article.id}
                className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
              >
                <div className="md:col-span-3 space-y-1">
                  <span className="block font-sans text-xs uppercase tracking-[0.18em] text-[#111111] font-medium">
                    {article.numberLabel}
                  </span>
                  <span className="block font-sans text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                    {article.divisionTitle}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium leading-snug">
                    <button
                      type="button"
                      onClick={() => handleNav({ type: 'article', articleId: article.id })}
                      className="text-left hover:underline underline-offset-4 decoration-1 cursor-pointer"
                    >
                      {artTitle}
                    </button>
                  </h2>
                  <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed">
                    {artSummary}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <button
                    type="button"
                    onClick={() => handleNav({ type: 'article', articleId: article.id })}
                    className="font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-1 hover:opacity-60 cursor-pointer whitespace-nowrap"
                  >
                    {t.readMoreLink}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};
